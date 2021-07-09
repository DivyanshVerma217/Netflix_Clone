import React from "react";
import "./ProfileScreen.css";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Plans from "./Plans";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileDetails">
            <h2>{user.email}</h2>

            <div className="profile_plans">
              <h3>Plans (Choose a Plan To Start)</h3>
              
              <Plans title = "Premium (4K + HDR)"/>
              <Plans title = "Basic (720p)"/>
              <Plans title = "Standard (1080p)"/>
              <button
                onClick={() => auth.signOut()}
                className="profile_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
