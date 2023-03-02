import mongoose from "mongoose";
// dotenv.config();

export const connection = async() => {
   try {
      const conn = await mongoose.connect(process.env.uri);
      console.log('Connected')
   } catch (error) {
      console.log(error.message);
   }
}