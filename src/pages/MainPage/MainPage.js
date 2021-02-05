import React from "react";
import MainPageHeader from "./MainPageHeader";
import "./MainPage.css";
import MainPageBody from "./MainPageBody";

const MainPage = ({ user }) => {
  return (
    <div className="mainpage">
      <MainPageHeader />
      <MainPageBody />
      <footer className="mainpage__footer">
        {/* mainpage header */}
        mainpage footer
        {/* app button to go top */}
      </footer>
    </div>
  );
};

export default MainPage;
