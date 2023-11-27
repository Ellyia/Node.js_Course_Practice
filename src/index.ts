import express, { Request, Response } from 'express';
import { swaggerUi, swaggerSpec } from './swagger';
import notFoundMiddleware from './middlewares/notFoundMiddleware';
import errorHandler from './middlewares/errorHandlingMiddleware';
import routes from './routes';

const app = express();
const PORT: number = 3000;

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req: Request, res: Response) => {
  res.send("This is a root path");
})

app.use(errorHandler);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
