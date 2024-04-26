import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.cqhwonq.mongodb.net/helloworldcrud"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
