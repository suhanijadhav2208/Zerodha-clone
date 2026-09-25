const { Schema } = require("mongoose");

const FundsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },

    availableCash: {
        type: Number,
        default: 0,
    },

    openingBalance: {
        type: Number,
        default: 0,
    },

    payin: {
        type: Number,
        default: 0,
    },

    payout: {
        type: Number,
        default: 0,
    },
});

module.exports = { FundsSchema };