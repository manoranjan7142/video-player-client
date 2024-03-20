//Date - 13-12-2023

import React from 'react'
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from "react-icons/ai";
import {
    
    MdOutlineVideoLibrary,
    MdOutlineWatchLater,
  } from "react-icons/md";
  // import shorts from "./shorts.png";
  import { FaHistory } from "react-icons/fa";
function DrawerSidebar({ toggleDrawer,toggleDrawerSidebar }) {
  return (
    <div className="container_DrawaerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawaerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
    
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={'/library'} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>
          <NavLink to={'/history'} className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={'/yourvideos'} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
          <NavLink to={'/watchlater'} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={'/likedvideo'} className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
          <NavLink to={'/more'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch More </div>
            </p>
          </NavLink>
        </div>
      </div>
      <div
        className="container3_DrawaerLeftSidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default DrawerSidebar
