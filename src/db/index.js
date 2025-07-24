import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connextDB = async() => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODBURI}/${DB_Name }`)
    console.log(`\n  MongoDB connected!! DB host: ${connectionInstance.connection.host} `);
    
  } catch (error) {
      console.log("mongodb connection error", error);
      process.exit(1)
      
  }

}
export default connextDB