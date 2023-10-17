const express = require('express'); 
const { swaggerUi, swaggerSpec } = require('../swagger');
const errorHandler = require('./middlewares/errorHandlingMiddleware');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000; 
 
app.use('/api', routes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);
 
app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`); 
});