import mongoose, { Schema, Document } from 'mongoose';

export interface IMovieDocument extends Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string[];
}

const movieSchema: Schema<IMovieDocument> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: [String], required: true },
});

export default mongoose.model<IMovieDocument>('Movie', movieSchema);