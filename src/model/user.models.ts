import mongoose from "mongoose";
import { config } from "process";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        id: Number,
        first_name: String,
        last_name: String,
        email: String
    }

);


const UserModel = mongoose.model("User", userSchema);
export default UserModel;