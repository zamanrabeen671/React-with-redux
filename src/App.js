import React from "react";
// import { useSelector } from "react-redux";
// import Blogs from "./Components/Blogs";

import Homepage from "./Components/Homepage"
import Testing from "./Components/testing/Testing";
// import Homepage from "./Components/Homepage";

// import Navbar from "./Components/Navbar";
// import { selectSignedIn } from "./features/userSlice";
// import "./styling/app.css";

const App = () => {
  // const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Homepage />
      {/* {isSignedIn && <Blogs />} */}
      <Testing/>
    </div>
  );
};

export default App;
