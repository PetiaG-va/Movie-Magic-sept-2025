import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Cast name is required!']
    }, 
    age: {
        type: Number,
        require: [true, 'Cast age is required!'],
        max: 120,
        min: 0
    },
    born: {
        type: String,
        require: [true, 'Cast born place is required!']
    },
    imageUrl: {
        type: String,
        require: true
    },
});

const Cast = model('Cast', castSchema);

export default  Cast;