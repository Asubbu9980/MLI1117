const mongoose = require('mongoose');

const Data = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
})

const userModel = mongoose.Schema({

    topic: {
        type: String,
        required: true,
    },
    data: Data
})



module.exports = mongoose.model("notebookapp", userModel)