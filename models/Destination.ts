
import mongoose, { Schema, InferSchemaType } from 'mongoose';

const destinationSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, default: 4.5 }
}, { timestamps: true });

export type Destination = InferSchemaType<typeof destinationSchema>;
export default mongoose.models.Destination || mongoose.model('Destination', destinationSchema);
