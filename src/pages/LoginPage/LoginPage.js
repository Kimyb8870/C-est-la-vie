import React from "react";

const LoginPage = ({ user }) => {
  return (
    <div>
      <h1>This is Login page</h1>
      {user ? <h2>user exist</h2> : <h2>No user</h2>}
    </div>
  );
};

export default LoginPage;
