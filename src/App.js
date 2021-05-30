import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import Homepage from "./Components/Homepage"
import NavbarBS from "./Components/NavbarBS";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <NavbarBS />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
