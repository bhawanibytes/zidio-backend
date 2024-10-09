const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const subsSchema = new Schema({
    email: {type: String, unique: true}
});

const contactSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    subject: String,
    message: String
});

const subsModel = mongoose.model("subs", subsSchema);
const contactModel = mongoose.model("contact", contactSchema);

module.exports = {
    subsModel,
    contactModel
}