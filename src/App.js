import React from "react";
// import { useSelector } from "react-redux";
// import Blogs from "./Components/Blogs";

import Homepage from "./Components/Homepage"
<<<<<<< HEAD
import Testing from "./Components/testing/Testing";
=======
// import Homepage from "./Components/Homepage";
>>>>>>> 18c2bef2d277482bbc01ded05a253151e6640758

// import Navbar from "./Components/Navbar";
// import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";

const App = () => {
  // const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Homepage />
      {/* {isSignedIn && <Blogs />} */}
    </div>
  );
};

export default App;
