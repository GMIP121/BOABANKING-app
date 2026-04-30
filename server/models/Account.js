const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accountNumber: {
        type: String,
        unique: true,
        required: true
    },
    accountType: {
        type: String,
        enum: ['Checking', 'Savings', 'Investment'],
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: 'USD'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

accountSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;