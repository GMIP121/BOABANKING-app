const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromAccountId: { type: String, required: true },
    toAccountId: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['Transfer', 'Deposit', 'Withdrawal'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], required: true },
    description: { type: String, required: false },
    transactionDate: { type: Date, default: Date.now },
    reference: { type: String, required: false }
});

module.exports = mongoose.model('Transaction', transactionSchema);