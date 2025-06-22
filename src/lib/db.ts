import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in .env.local');
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) return;

    return await mongoose.connect(MONGODB_URI!, {
      dbName: 'valea',
    });
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export async function disconnectDB() {
  return mongoose.disconnect();
}