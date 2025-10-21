require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db');

const productsRouter = require('./routes/products');
const suppliersRouter = require('./routes/suppliers');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

connectDB();

app.get('/', (req, res) => res.send({ ok: true, message: 'Inventory API running' }));
app.use('/api/products', productsRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));