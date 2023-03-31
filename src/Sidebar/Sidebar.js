/* Sidebar.js */

import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutLInedIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
//mport { NavLink } from "react-router-dom";

function MobileSidebar({toggle}) {
  return (
    <div className="mobile-sidebar">
      <div className="home__icon">
      <NavLink to="/" onClick={toggle}>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </NavLink>
      </div>
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SidebarRow Icon={ThumbUpAltOutLinedIcon} title="Liked videos"/>
      <SidebarRow Icon={ExpandMoreOutLInedIcon} title="Show more"/>
      <hr/>
    </div>
  );
}

  
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SidebarRow Icon={ThumbUpAltOutLinedIcon} title="Liked videos"/>
      <SidebarRow Icon={ExpandMoreOutLInedIcon} title="Show more"/>
      <hr/>
    </div>
  );
}


export { Sidebar, MobileSidebar };


