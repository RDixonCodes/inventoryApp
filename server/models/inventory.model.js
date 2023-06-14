const mongoose = require('mongoose');
const InventorySchema = new mongoose.Schema({
    category: {
        type: String
    },
    productName: {
        type: String,
        required: [true, "Product name is required"],
        minLength: [5, 'Product name must be at least 5 characters']
    },

    expDate: {
        type: Date,

    },

    expired: {
        type: Boolean,
        default: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Inventory', InventorySchema);