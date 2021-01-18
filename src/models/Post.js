import { Schema, model } from 'mongoose';

const postScheema = new Schema({
    userId: {
        type: Number,
        required: true,
        trim: true,
    },
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
    },
},{
    versionKey: false,
    timestamps: true
});

export default model("Post", postScheema);