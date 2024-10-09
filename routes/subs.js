const { Router } = require("express");
const { subsModel } = require("../mongoDb");

const subsRouter = Router();

subsRouter.post("/", async (req, res) => {
    const email = req.email;
    async function addSubscriber(email) {
        try {
            // Find the list (you might have multiple lists, so you can add filters if needed)
            const list = await subsModel.findOne({ listName: "Newsletter Subscribers" });
    
            if (!list) {
                // If list does not exist, create it and add the first email
                const newList = new subsModel({
                    listName: "Newsletter Subscribers",
                    subscribers: [email],
                });
    
                await newList.save();
                console.log("List created and email added.");
            } else {
                // If list exists, check if the email is already in the subscribers array
                if (!list.subscribers.includes(email)) {
                    list.subscribers.push(email);  // Push the new email
                    await list.save();  // Save the updated list
                    console.log("Email added to the list.");
                } else {
                    console.log("Email already exists in the list.");
                }
            }
        } catch (err) {
            console.error("Error adding subscriber:", err);
        }
    }
    try {
        await addSubscriber(email);
        res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to subscribe." });
    }

});

module.exports = {
    subsRouter
}