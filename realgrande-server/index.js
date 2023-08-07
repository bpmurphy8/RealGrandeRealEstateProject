const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const allrouter = require("./routes/allRoutes");
const app = express();
app.use(express.json());
const cors=require('cors')

let corsOptions={ origin: "http://localhost:3000"}
app.use(cors(corsOptions))

const db = module.exports =()=>{
  try{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://cluster0.sprrwd8.mongodb.net/RealGrandeProject', 
    { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, 
        useNewUrlParser: true, useUnifiedTopology: true})
    console.log("MongoDB Connection is Successful")
  } catch(error){
    console.log(error);
    console.log("MongoDB Connection is failed")
  }
}
db();


app.use('/', allrouter);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
});

