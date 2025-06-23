const mongoose = require('mongoose');


const bugSchema = new mongoose.Schema({

    bugId: {
        type: Number,
        required: true
    },
    module: {
        type: String,
        default: 'Not Given'
    },
    type: {
        type: String,
        enum: ['Functional', 'User Interface', 'Load', 'Stress', 'Performance', 'Spike', 'Soak', 'Security', 'Misc.']
    },
    description: {
        type: String,
        required: true,
    },
    requirement: {
        type: String,
        required: true
    },
    reference: {
        type: String, 
    },
    severity: {
        type: String,
        enum: ['Critical', 'High', 'Medium', 'Low']
    },
    priority: {
        type: String,
        enum: ['Critical', 'High', 'Medium', 'Low']
    },
    status: {
        type: String,
        enum: ['Open', 'Ongoing', 'Solved', 'Reopened', 'Resolved', 'Closed']
    },
    comment: {
        type: String
    }
}, { timestamps: true });

const Bug = mongoose.model('Bug', bugSchema);
module.exports = Bug;