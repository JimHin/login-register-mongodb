import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    id: Number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(candidatePassword: string): Promise<boolean>
}