import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { BackendUrlProvider } from "./components/BackendUrl.jsx";
// import NavBar from "./components/Navbar";
// import PrivateRoutes from "./components/PrivateRoutes.jsx";
import Login from "./pages/Login";

// make sure that axios always sends the cookies to the backend server
// why is this necessary?
// axios.defaults.withCredentials = true;

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

export default function App() {



  // const [user, setUser] = useState(() => {
  //   // Reading value of Cookie with name 'user
  //   const loggedInUser = Cookies.get("user");
  //   if (loggedInUser) {
  //     // Storing cookie value in user
  //     return JSON.parse(loggedInUser);
  //   }
  //   return {};
  // });

  return (
    <BackendUrlProvider backendUrlData={BACKEND_URL}>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          {/* <Route path="/" element={<Landing user={user} />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route element={<PrivateRoutes user={user} />}> */}
            {/* all protected routes here */}
          {/* </Route>  */}
        </Routes>
      </Router>
    </BackendUrlProvider>
  );
}
