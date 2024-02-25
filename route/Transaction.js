// API to list all transactions with search and pagination

const express = require('express');
const router = express.Router();
const Transaction = require('../model/Transaction');


router.get('/transactions', async (req, res) => {
    const { month, page = 1, perPage = 10, searchText } = req.query;

    const query = {
        dateOfSale: { $regex: new RegExp(month, 'i') },
        $or: [
            { title: { $regex: new RegExp(searchText, 'i') } },
            { description: { $regex: new RegExp(searchText, 'i') } },
            { price: { $regex: new RegExp(searchText, 'i') } }
        ]
    };

    try {
        const transactions = await Transaction.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));
        res.json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router; // Fix: Change from module.export to module.exports
