const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Define a schema with an array of email addresses
const subsSchema = new mongoose.Schema({
    listName: { type: String, required: true },
    subscribers: [ {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        } ], // Array of email strings
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