import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserDocument } from "../interfaces/UserDocumentInterface";
import config from 'config';



const userSchema = new mongoose.Schema(
    {
        id: Number,
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
    }
);

userSchema.pre("save", async function (next: any) {
    let user = this as UserDocument;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(config.get("saltRounds"), function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
        });
    });
});

userSchema.methods.comparePasswords = async function (candidatePassword: string | Buffer): Promise<boolean> {
    let user = this as UserDocument;
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const UserModel = mongoose.model("User", userSchema);
export default UserModel;