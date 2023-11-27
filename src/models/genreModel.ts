import mongoose, { Schema, Document } from 'mongoose';

export interface IGenreDocument extends Document {
  name: string;
}

const genreSchema: Schema<IGenreDocument> = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IGenreDocument>('Genre', genreSchema);