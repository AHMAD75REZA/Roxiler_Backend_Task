const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    dateOfSale: {
        type: Date,
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });  // Fix: Use an object to enable timestamps

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
