
import mongoose from "mongoose";


const accountSchema = mongoose.Schema(
    {
        accountName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        stories: {
            type: [String],
            required: true,
        },
        follows: {
            type: [String],
            required: true,
        }
    }
);

export const Account = mongoose.model('Account', accountSchema);