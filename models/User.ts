
import mongoose, { Schema, InferSchemaType } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true }
}, { timestamps: true });

export type User = InferSchemaType<typeof userSchema>;
export default mongoose.models.User || mongoose.model('User', userSchema);
