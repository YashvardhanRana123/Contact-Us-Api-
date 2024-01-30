const mongoose = require('mongoose');

const contectSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
});

module.exports = mongoose.model("contact",contectSchema);