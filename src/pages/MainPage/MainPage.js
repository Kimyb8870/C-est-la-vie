import React from "react";
import MainPageHeader from "./MainPageHeader";
import "./MainPage.css";

const MainPage = ({ user }) => {
  return (
    <div className="mainpage">
      <MainPageHeader />
      <section className="mainpage__body">mainpage body</section>
      <footer className="mainpage__footer">
        {/* mainpage header */}
        mainpage footer
        {/* app button to go top */}
      </footer>
    </div>
  );
};

export default MainPage;
