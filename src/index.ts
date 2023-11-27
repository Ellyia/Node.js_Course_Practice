import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { swaggerUi, swaggerSpec } from './swagger';
import notFoundMiddleware from './middlewares/notFoundMiddleware';
import errorHandler from './middlewares/errorHandlingMiddleware';
import routes from './routes/routes';

import mongoose from 'mongoose';

const mongoDBuri = `mongodb+srv://beeella:hSVFsl9IX1QsquXR@cluster0.vzaily7.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoDBuri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Ella connected to MongoDB');
});

const app = express();
const PORT: number = 3000;

app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req: Request, res: Response) => {
  res.send("This is a root path");
})

app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
