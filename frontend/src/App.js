import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: "10px" }}>
          <Link to="/register"> Register </Link> |{" "}
          <Link to="/login"> Login </Link> |{" "}
          <Link to="/profile"> Profile </Link>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
