import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  age: number;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model<IUser>("User", userSchema);
