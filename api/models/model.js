import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    temp: {
        type: Number,
        // required: true,
    },
    humd: {
        type: Number,
        // required: true,
    },
    noise: {
        type: String,
        // required: true,
    },
    room1: {
        type: String,
        // required: true,
    },
    room2: {
        type: String,
        // required: true,
    },
    book: {
        type: String,
        // required: true,
    },
})

const Data = mongoose.model('Data',userSchema);

export default Data;