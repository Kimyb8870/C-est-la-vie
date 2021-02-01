import React from "react";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  let history = useHistory();
  console.log(history);
  history.push("/profile");
  return (
    <div>
      <h1>This is Main page</h1>
    </div>
  );
};

export default MainPage;
