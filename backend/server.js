import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

import next from "next";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3001;

// Connect Next.js to Express
nextApp.prepare().then(() => {
  // Middleware setup
  app.use(
    cors({
      origin: "http://localhost:3000", // Frontend URL (can be adjusted in production)
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());

  // API Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/messages", messageRoutes);
  app.use("/api/users", userRoutes);

  // Use Next.js to handle all other routes
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server started running at ${PORT}`);
  });
});
