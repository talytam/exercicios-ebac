const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "twwwd7",
e2e: {
    baseUrl: "http://localhost:3000/",
    video: true
  }
});