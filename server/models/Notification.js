const mongoose = require('mongoose');

// Mongoose Schema for Notification
const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['Transfer', 'Deposit', 'Alert', 'Info'], required: true },
    read: { type: Boolean, default: false },
    transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
