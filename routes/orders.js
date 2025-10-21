const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// GET all orders
router.get('/', async (req, res) => {
  const orders = await Order.find().populate('supplierId').populate('items.productId');
  res.json(orders);
});

// POST create order
router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  const saved = await newOrder.save();
  res.status(201).json(saved);
});

// GET one order
router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('supplierId')
    .populate('items.productId');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});

// PUT update order
router.put('/:id', async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Order not found' });
  res.json(updated);
});

// DELETE order
router.delete('/:id', async (req, res) => {
  const deleted = await Order.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Order not found' });
  res.json({ message: 'Order deleted' });
});

module.exports = router;