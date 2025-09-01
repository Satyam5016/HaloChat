import mongoose from "mongoose";
// Define the Message schema
const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: { type: String },
        image: { type: String },
        seen: { type: Boolean, default: false },
    },
    { timestamps: true }
);
// Create and export the Message model
const message = mongoose.model("Message", messageSchema);

export default message;