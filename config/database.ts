import mongoose from 'mongoose';

const connectDB = async (): Promise<boolean> => {
  if (mongoose.connection.readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default connectDB;
