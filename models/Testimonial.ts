
import mongoose, { Schema, InferSchemaType } from 'mongoose';

const testimonialSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  avatarUrl: { type: String, required: true }
}, { timestamps: true });

export type Testimonial = InferSchemaType<typeof testimonialSchema>;
export default mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
