import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    id: Number,
    first_name: String,
    last_name: String,
    email: String
}