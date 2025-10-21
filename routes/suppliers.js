const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');

// GET all suppliers
router.get('/', async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
});

// POST create supplier
router.post('/', async (req, res) => {
  const newSupplier = new Supplier(req.body);
  const saved = await newSupplier.save();
  res.status(201).json(saved);
});

// GET one supplier by ID
router.get('/:id', async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
  res.json(supplier);
});

// PUT update supplier
router.put('/:id', async (req, res) => {
  const updated = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Supplier not found' });
  res.json(updated);
});

// DELETE supplier
router.delete('/:id', async (req, res) => {
  const deleted = await Supplier.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Supplier not found' });
  res.json({ message: 'Supplier deleted' });
});

module.exports = router;