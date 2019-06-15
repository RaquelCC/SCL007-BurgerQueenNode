const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
    price: {
        type: String,
        required: true,
        trim: true,
      },
    menu: {
        type: String,
        required: true,
        trim: true,
      },
});

module.exports = mongoose.model('Product', ProductSchema);
