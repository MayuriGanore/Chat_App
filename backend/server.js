import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from './db/connectMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to  parse the incoming requests with JSON payloads

app.use('/api/auth', authRoutes);

// app.get("/", (req, res) => {
//     res.send("server is running");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server connected to ${PORT}`);
});
