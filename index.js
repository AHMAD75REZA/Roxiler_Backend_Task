const express = require('express');
const axios = require('axios');
const mongoose = require('./config/mongoose');
 const Transaction = require('./model/Transaction');
 const router = require('./route/Transaction');
 const transactionRouter = require('./route/Transaction');

const app = express();
const PORT = 3000;

// Use the transaction router
app.use('/transactions', transactionRouter);


// API to initialize the database
app.get('/initialize', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const seedData = response.data; // Assume an array of transactions
        await Transaction.insertMany(seedData);
        res.json({ success: true, message: 'Database initialized with seed data.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
