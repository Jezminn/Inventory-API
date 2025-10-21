const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET all
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// POST create
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
});

// GET one
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// PUT update
router.put('/:id', async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
