import mongoose from 'mongoose';

const mongoDB = "mongodb://127.0.0.1/ella's_database";

mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default mongoose;