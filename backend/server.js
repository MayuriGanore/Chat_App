import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongoDB from './db/connectMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser()); // to  parse the incoming requests with JSON payloads

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', usersRoutes);

// app.get("/", (req, res) => {
//     res.send("server is running");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server connected to ${PORT}`);
});
