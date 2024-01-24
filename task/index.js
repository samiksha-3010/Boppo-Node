import express  from "express"
import  dotenv from "dotenv"
import mongoose from "mongoose";
import { Login, Register, getCurrentUser } from "./Controolers/userControolers.js";
import { addProduct, createCategory, deleteproduct, getAllCategories, getByHandle, update } from "./Controolers/Product.controolers.js";

// import cors from 'cors'
//  import morgan from "morgan"
//  import routesIndex from './routes/index.js'



const app = express();
app.use(express.json())
//  app.use(cors())
// app.use(morgan("dev"))
dotenv.config()


app.get ("/",(req,res)=>{
      res.send("Working on......")
})

app.post("/register", Register);
app.post("/login", Login);
app.get("/getCurrentUser", getCurrentUser);
app.post("/addProduct", addProduct);
app.get("/getByHandle", getByHandle);
app.put("/update ", update );
app.delete("/deleteproduct", deleteproduct);
app.post("/createCategory ", createCategory );
app.get("/getAllCategories", getAllCategories);

// app.use(/'api/v1',routesIndex)


mongoose.connect(process.env.Mongo_URL).then(()=>{
      console.log("connected to  DB ..")
})


app.listen(8000,()=>{
      console.log("Listing on Port 8000")
})



