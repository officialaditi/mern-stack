import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
      try {
            const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDB connected on ${conn.connection.host}`.bgMagenta);
      } catch (error) {
            console.error(`Error: ${error.message}`.red);
            process.exit(1);
      }
}

export default connectDB;