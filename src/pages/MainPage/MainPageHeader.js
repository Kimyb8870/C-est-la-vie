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
        {/* 로고는 나중에 */}
        <IconButton>
          <PersonIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default MainPageHeader;
