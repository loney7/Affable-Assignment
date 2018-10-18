import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Todo = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String,
        default: 'Low'
    },
    status: {
        type: String,
        default: 'Open'
    },
    order: {
        type: String
    }
});

export default mongoose.model('Todo', Todo);