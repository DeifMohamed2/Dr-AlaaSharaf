const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    transactionDate: {
        type: Date,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    transactionPhoto :{
        type: String,
        required: true
    },
    transactionAmount: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    transactionStatus: {
        type: String,
        required: true
    },
    transactionUsedIn: {
        type: String,
        default: '',
        required: false
    },
    transactionGrade: {
        type: String,
        required: true
    },
    transactionUser: {
        type: String,
        ref: 'User',
        required: true
    },

},{timestamps:true});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;