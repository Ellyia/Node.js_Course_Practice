const express = require('express'); 
const { swaggerUi, swaggerSpec } = require('../swagger');
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000; 


app.use('/api', routes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/health-check', (req, res) => { 
  res.json({ status: 'Server is running' }); 
}); 
 
app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`); 
});

app.use(errorHandlingMiddleware);