import React from "react";
import { Link, useHistory } from "react-router-dom";
import { authService, googleAuthProvider } from "../../firebase";

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
    <div>
      {user ? (
        <>
          <h2>Hello {user.displayName}</h2>
          <button onClick={onGoToHome}>시작하기</button>
        </>
      ) : (
        <>
          <h2>You need to login</h2>
          <button onClick={onGoogleLogin}>로그인 하기</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
