const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // tu peux ajouter ici des plugins ou handlers
    },
    baseUrl: 'http://localhost:8080', // adapte si besoin
  },
});
