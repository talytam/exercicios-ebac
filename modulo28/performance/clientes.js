import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
  vus: 10,
  duration: '30s',

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  },
};

export function setup() {
  const loginResponse = http.post(
    `${BASE_URL}/api/login`,
    JSON.stringify({
      username: 'admin',
      password: 'admin',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  check(loginResponse, {
    'login realizado com sucesso': (r) =>
      r.status === 200 || r.status === 201,
  });

  const token = loginResponse.json('accessToken');

  if (!token) {
    throw new Error(
      `Não foi possível obter o token. Status: ${loginResponse.status} - ${loginResponse.body}`
    );
  }

  return {
    token: token,
  };
}

export default function (data) {
  const response = http.get(`${BASE_URL}/api/customers`, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });

  check(response, {
    'status deve ser 200': (r) => r.status === 200,
    'resposta deve ocorrer em menos de 1s': (r) =>
      r.timings.duration < 1000,
  });

  sleep(1);
}