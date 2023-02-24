import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/protodatabase");

export default mongoose;
