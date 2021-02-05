import React from "react";
import "./MainPageHeader.css";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";

const MainPageHeader = () => {
  return (
    <nav className="mainpage__header">
      <div className="mainpage__header__navGroup">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <h1 className="mainpage__header__logo">this is life</h1>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default MainPageHeader;
