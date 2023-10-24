import mongoose, { Schema, Document } from 'mongoose';

export interface Genre extends Document {
  name: string;
}

const genreSchema: Schema<Genre> = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model<Genre>('Genre', genreSchema);