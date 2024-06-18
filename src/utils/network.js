import mongoose from "mongoose";

export default async function Connect() {
  if (mongoose.Connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.URL);
    console.log("connect to DB");
  } catch (error) {
    console.log(error);
  }
}
