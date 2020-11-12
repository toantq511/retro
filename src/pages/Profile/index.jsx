// libs
import UpdatePassword from "pages/Profile/mains/UpdatePassword";
import UpdateProfile from "pages/Profile/mains/UpdateProfile";
import React from "react";
// components
// others
import "./style.scss";

const Profile = () => (
	<div className="profile-wrapper">
		<UpdateProfile />
		<UpdatePassword />
	</div>
);

export default Profile;
