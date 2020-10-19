const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateColSchema = new Schema(
	{
		name: String,
		color: String,
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const TemplateCol = mongoose.model("TemplateCol", templateColSchema);

module.exports = TemplateCol;
