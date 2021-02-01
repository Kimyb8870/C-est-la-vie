import React from "react";
import MainPageHeader from "./MainPageHeader";

const MainPage = ({ user }) => {
  return (
    <div className="mainpage">
      <MainPageHeader />
      <section className="mainpage__body"></section>
      <footer className="mainpage__footer">
        {/* mainpage header */}
        {/* app button to go top */}
      </footer>
    </div>
  );
};

export default MainPage;
