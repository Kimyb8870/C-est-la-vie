import React, { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { authService } from "./firebase";

function App() {
  const [user, setUser] = useState({ id: "kimyb" });

  // const [user, setUser] = useState(null);
  const loadCurrentUser = async () => {
    try {
      await authService.onAuthStateChanged((user) => {
        setUser(user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <div className="App">
      <AppRouter user={user} />
    </div>
  );
}

export default App;
