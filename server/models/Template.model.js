const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema(
	{
		name: String,
		list: [
			{
				name: String,
				color: String,
			},
		],
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
