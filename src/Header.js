import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import tinder from "./Capture.PNG"
import "./Header.css"

export const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src={tinder}
      />
    </div>
  );
};
