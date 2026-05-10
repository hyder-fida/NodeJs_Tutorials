const mongoose = require("mongoose");

// Define a schema for the Menu collection

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum : ["spicy", "sweet", "sour", "bitter"],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }

});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;

