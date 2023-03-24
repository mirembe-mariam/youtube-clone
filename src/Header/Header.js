import React from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vYBs7_HrbRjopuvwH2PZ_5dRAz3USmLspA&usqp=CAU"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder = "Search" type="text" />
        <SearchIcon 
        className="header__inputButton" />
        <MicIcon className="header__mic" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar
          alt="mirembe mariam"
          src="https://64.media.tumblr.com/85e246a7c69ba713d6be1bacd1db3aac/tumblr_p2sz8pkeJt1tlflqio1_1280.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
