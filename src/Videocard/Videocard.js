import { Avatar } from "@material-ui/core";
import React from "react";
import "./Videocard.css";

function Videocard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
            <h4>{title}</h4>
            <p className="videoCard__name">{channel}</p>
            <p>{views}.{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
