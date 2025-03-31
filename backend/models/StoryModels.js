
import mongoose from "mongoose";


const storySchema = mongoose.Schema(
    {
        storyName: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        storyText: {
            type: String,
            required: true,
        },
        snapshots: {
            type: [String],
            required: true,
        },
        canEdit: {
            type: Boolean,
            required: true,
        },
        views: {
            type: Number,
            required: true,
        },
        edits: {
            type: [String],
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        public: {
            type: Boolean,
            required: true,
        },
        thumbnail: {
            type: String,
            required: false,
        }
    }
);

export const Story = mongoose.model('Story', storySchema);