
import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const DestinationSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  price: z.number().positive(),
  imageUrl: z.string().url(),
  rating: z.number().min(0).max(5).optional()
});

export const TestimonialSchema = z.object({
  name: z.string().min(2),
  comment: z.string().min(5),
  avatarUrl: z.string().url()
});
