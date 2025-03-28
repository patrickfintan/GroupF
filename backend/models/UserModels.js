
import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        }
    }
);

export const User = mongoose.model('User', userSchema);