// require ('dotenv').config()
import dotenv from "dotenv"

import connextDB from "./db/index.js  "
dotenv.config({
  path: "./env"
})
connextDB()


















/*
 * @author Faryal Rizwan
import express from "express"
const app = express()

( async () => {
  try {
     await mongoose.connect(`${process.env.MONGODBURI}/${DB_Name }`)
     app.on("error", (err) => {
      console.log("Err: ", err);
      throw err
     })
     app.listen(process.env.PORT, () => {
      console.log(`App is listening omn port ${process.env.PORT}`);
      
     })

  } catch (error) {
      console.log("Error:" ,error);
      throw err
      
  }
})( )
*/