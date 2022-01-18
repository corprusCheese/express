const mongoose = require("mongoose"),
    {Schema} = mongoose,
    userSchema = new Schema({
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true,
        }
    }, {
        timestamps: true
    });

module.exports = mongoose.model("User", userSchema);



