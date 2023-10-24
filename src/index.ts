import express from 'express';
import { swaggerUi, swaggerSpec } from './swagger';
import notFoundMiddleware from './middlewares/notFoundMiddleware';
import errorHandler from './middlewares/errorHandlingMiddleware';
import routes from './routes';

const app = express();
const PORT: number = 3000;

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
