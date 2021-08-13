import mongoose from "mongoose";
import dotenv from "dotenv";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.8k2hq.mongodb.net/flipkart?retryWrites=true`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("error", error.message);
  }
};

export default Connection;
