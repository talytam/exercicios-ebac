-- Exercício 2 - SQL
-- Banco utilizado: Sakila

-- 1. Quantidade de registros da lista de filmes e suas categorias
SELECT COUNT(*) AS total_registros
FROM film f
INNER JOIN film_category fc
    ON f.film_id = fc.film_id
INNER JOIN category c
    ON fc.category_id = c.category_id;


-- 2. Quantidade de atores que participaram de filmes
SELECT COUNT(*) AS total_atores
FROM (
    SELECT
        a.actor_id
    FROM actor a
    LEFT JOIN film_actor fa
        ON a.actor_id = fa.actor_id
    GROUP BY
        a.actor_id
) AS atores;


-- 3. Quantidade de atores que atuaram em filmes com mais de 120 minutos
SELECT COUNT(*) AS total_atores
FROM (
    SELECT
        a.actor_id
    FROM actor a
    INNER JOIN film_actor fa
        ON a.actor_id = fa.actor_id
    INNER JOIN film f
        ON fa.film_id = f.film_id
    WHERE
        f.length > 120
    GROUP BY
        a.actor_id
) AS atores_filmes_longos;