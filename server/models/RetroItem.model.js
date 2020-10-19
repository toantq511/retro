const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const retroSchema = new Schema(
	{
		desc: String,
		templateId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Template",
		},
		colIndex: Number,
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);
const RetroItem = mongoose.model("RetroItem", retroSchema);

module.exports = RetroItem;
