const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: String,
		password: String,
		role: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);
const User = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = User;
