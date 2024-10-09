const { Router } = require("express");
const { contactModel } = require("../mongoDb");

const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
    const { name, email, phoneNumber, subject, message }  = req;
    try {
        await contactModel.create({
            name,
            email,
            phoneNumber,
            subject,
            message
        })
        res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
        res.status(500).json({ message: "Failed while storing in db." });
    }

});

module.exports = {
    contactRouter
}