// swagger.js

const express = require('express'); 
const swaggerUi = require('swagger-ui-express'); 
const YAML = require('yamljs'); 
const path = require('path');

const swaggerDocumentPath = path.join(__dirname, 'docs', 'swagger.yaml'); 
const swaggerDocument = YAML.load(swaggerDocumentPath);

console.log('Swagger loaded from:', swaggerDocumentPath); 
console.log('🔍 Server base URL:', swaggerDocument.servers?.[0]?.url);

module.exports = (app) => { 
  app.use('/docs', express.static(path.resolve(__dirname, 'docs'))); 
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
};