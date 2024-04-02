import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Mongodb")
    } catch (err) {
        console.log("error in connection : ", err.message)
    }
}

export default connectToMongoDB;