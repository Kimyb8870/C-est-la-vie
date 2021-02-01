import React from "react";
import { Link, useHistory } from "react-router-dom";
import { authService, googleAuthProvider } from "../../firebase";
import "./LoginPage.css";

const LoginPage = ({ user }) => {
  const onGoogleLogin = () => {
    authService.signInWithPopup(googleAuthProvider);
  };
  let history = useHistory();

  const onGoToHome = () => {
    history.push("/home");
  };

  console.log(user);
  return (
    <div className="loginpage">
      {user ? (
        <div className="loginpage__wrapper">
          <h2 className="loginpage__title">Hello {user.displayName}</h2>
          <button className="loginpage__button" onClick={onGoToHome}>
            시작하기
          </button>
        </div>
      ) : (
        <div className="loginpage__wrapper">
          <h2 className="loginpage__title">You need to login</h2>
          <button className="loginpage__button" onClick={onGoogleLogin}>
            로그인 하기
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
