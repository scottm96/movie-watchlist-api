import express from 'express';
import {config} from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';

//Import Routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js"

config()
connectDB()

const app = express();


//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// APIRoutes
app.use("/movies", movieRoutes)
app.use("/auth", authRoutes)


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
});

process.on("unhandledRejection", (err) =>{
    console.error("unhandled Rejection: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    })
})

process.on("uncaughtException", async (err) =>{
    console.error("Uncaught Exception: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    })
})

process.on("SIGTERM", async () =>{
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    })
})

//http://localhost:5001