// Load environment variables first
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dbConnect from '../lib/db';
import User from '../models/User';
import Destination from '../models/Destination';
import Testimonial from '../models/Testimonial';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env file');
}

async function seed() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to database
    await dbConnect();
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Destination.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create admin user
    const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
    const adminUser = await User.create({
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      passwordHash: adminPassword,
      name: 'Admin User'
    });
    console.log('👤 Created admin user');

    // Sample destinations
    const destinations = [
      {
        title: 'Paris, France',
        description: 'Experience the romance and elegance of the City of Light. Visit iconic landmarks like the Eiffel Tower, Louvre Museum, and stroll along the Seine River.',
        price: 1299,
        imageUrl: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop',
        rating: 4.8
      },
      {
        title: 'Tokyo, Japan',
        description: 'Discover the perfect blend of traditional culture and modern innovation in Japan\'s bustling capital. From ancient temples to futuristic skyscrapers.',
        price: 1599,
        imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
        rating: 4.9
      },
      {
        title: 'Santorini, Greece',
        description: 'Enjoy breathtaking sunsets, white-washed buildings, and crystal-clear waters in this stunning Greek island paradise.',
        price: 999,
        imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
        rating: 4.7
      },
      {
        title: 'Bali, Indonesia',
        description: 'Relax in tropical paradise with pristine beaches, lush rice terraces, and rich cultural heritage. Perfect for both adventure and relaxation.',
        price: 899,
        imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
        rating: 4.6
      },
      {
        title: 'New York City, USA',
        description: 'Experience the city that never sleeps. From Broadway shows to world-class museums, iconic landmarks to diverse neighborhoods.',
        price: 1199,
        imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
        rating: 4.5
      },
      {
        title: 'Dubai, UAE',
        description: 'Marvel at modern architecture, luxury shopping, and desert adventures in this futuristic city of gold.',
        price: 1399,
        imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
        rating: 4.4
      }
    ];

    await Destination.insertMany(destinations);
    console.log('🏝️ Created sample destinations');

    // Sample testimonials
    const testimonials = [
      {
        name: 'Sarah Johnson',
        comment: 'Absolutely amazing experience! The travel agency made everything seamless and the destinations were breathtaking. Highly recommend!',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
      },
      {
        name: 'Michael Chen',
        comment: 'Professional service and attention to detail. They helped plan the perfect honeymoon trip to Santorini. Unforgettable memories!',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
      },
      {
        name: 'Emily Rodriguez',
        comment: 'Best travel agency I\'ve ever worked with. They understood exactly what I wanted and delivered beyond expectations.',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
      },
      {
        name: 'David Thompson',
        comment: 'From booking to return, everything was perfectly organized. The local guides were knowledgeable and the accommodations were top-notch.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
      },
      {
        name: 'Lisa Wang',
        comment: 'Amazing value for money and incredible customer service. They made our family vacation to Japan absolutely perfect!',
        avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face'
      }
    ];

    await Testimonial.insertMany(testimonials);
    console.log('💬 Created sample testimonials');

    console.log('🎉 Database seeding completed successfully!');
    console.log(`📊 Created: ${destinations.length} destinations, ${testimonials.length} testimonials, 1 admin user`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

seed();