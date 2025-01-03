import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.uri);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDb;
