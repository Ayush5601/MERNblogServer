const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {                                 //replaces space separation with dash separation 
            type: String,
            unique: true,
            index: true
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('Category', categorySchema);