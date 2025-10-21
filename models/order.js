const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        qty: Number,
        price: Number
    }],
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);