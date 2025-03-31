
import mongoose from "mongoose";


const snapshotSchema = mongoose.Schema(
    {
        snapshotName: {
            type: String,
            required: true,
        },
        startPoint: {
            type: Number,
            required: true,
        },
        endPoint: {
            type: Number,
            required: true,
        },
        links: {
            type: [String],
            required: true,
        }
    }
);

export const Snapshot = mongoose.model('Snapshot', snapshotSchema);