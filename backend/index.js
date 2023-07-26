const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user")
const pinRoute =require("./Routes/pin");


dotenv.config();



mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
         })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));




app.use("/api/pins", pinRoute);
app.use("/api/user", userRoute);


app.listen(8285, () => {
  console.log("Backend server is running!");
});