require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');
const Supplier = require('./models/supplier');
const Order = require('./models/order');

const run = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Supplier.deleteMany();
    await Order.deleteMany();

    const supplier = await Supplier.create({ name: "Acme Supplies", contact: "acme@example.com" });

    const prod1 = await Product.create({ sku: "A123", name: "Widget", price: 10.99, stock: 100 });
    const prod2 = await Product.create({ sku: "B456", name: "Gadget", price: 15.49, stock: 50 });

    await Order.create({
        supplierId: supplier._id,
        items: [
            { productId: prod1._id, qty: 2, price: 10.99 },
            { productId: prod2._id, qty: 1, price: 15.49 }
        ],
        status: "pending"
    });

    console.log("Database seeded!");
    process.exit();
};

run();q