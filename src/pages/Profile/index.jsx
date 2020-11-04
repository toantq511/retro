// libs
import UpdatePassword from "pages/Profile/mains/UpdatePassword";
import UpdateProfile from "pages/Profile/mains/UpdateProfile";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// components
// others
import "./style.scss";

const Profile = () => {
	const user = useSelector((state) => state.auth);
	return user.name ? (
		<div className="profile-wrapper">
			<UpdateProfile />
			<UpdatePassword />
		</div>
	) : (
		<Redirect to="/login" />
	);
};

export default Profile;
