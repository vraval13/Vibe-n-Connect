import express from "express";
// const express = require("express");
// const dotenv = require("dotenv");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";


import {app,server} from "./socket/socket.js";
// const app = express();
const PORT = process.env.PORT || 3001;


dotenv.config();

app.use(cors({
  origin: "http://localhost:3000", // Your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Vibe-n-Connect!");
});

// app.get("/api/auth/signup",(req,res)=>{
//   console.log('signup route');
// });

// app.get("/api/auth/login",(req,res)=>{
//   console.log('login route');
// });

// app.get("/api/auth/logout",(req,res)=>{
//   console.log('logout route');
// });


server.listen(PORT,()=>{
  connectToMongoDB();
  console.log(`Server started running at ${PORT}`);
})
