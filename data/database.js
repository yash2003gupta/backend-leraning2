import mongoose from "mongoose";

export const connectDB=()=>{
mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database connected")).catch((e) => console.log(e));
};