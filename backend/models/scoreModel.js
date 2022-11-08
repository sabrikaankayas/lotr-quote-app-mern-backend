const mongoose = require("mongoose")

const scoreSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add your name"]
        },
        score: {
            type: Number
        },
    },
    {
        timestamps: true
    }
)

const Score = mongoose.model("Score", scoreSchema)

module.exports = Score