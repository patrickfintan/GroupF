
import mongoose from "mongoose";


const editSchema = mongoose.Schema(
    {
        storyId: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        accountId: {
            type: [String],
            required: true,
        }
    }
);

export const Edit = mongoose.model('Edit', editSchema);