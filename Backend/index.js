import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"



const app = express();
app.use(cors())
app.use(express.json())

dotenv.config();
const PORT=process.env.PORT || 4000

const URI=process.env.MongoDBURI

//connect to mongoDb
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useunifiedTopology:true

  });
  console.log("connected to mongoDb")
} catch (error) {
  console.log("Error",error)
}

//defining route
app.use("/book",bookRoute)
app.use("/user",userRoute) 


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
