import React, { useState,useEffect } from "react";
import "./Navbar.css";
import {useHistory} from "react-router-dom";



function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  } 

  useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
      return () => {
          window.removeEventListener("scroll", transitionNavBar);
      }
  }, [])

  return (
    <div className= {`nav ${show && "nav_black"}`} >
      <div clssName="nav_contents">
        <img
          onClick = {() => history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className = "nav_input">
        <input
          placeholder="Search Movies, TV Shows..."
          type="text"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>

        <img
          onClick= {()=> history.push("./profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
