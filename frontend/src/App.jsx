import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Booking from "./components/Booking";
import AdminPanel from "./components/AdminPanel";
import Home from "./components/Home";

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/bookings" element={<Booking authToken={authToken} />} />
        <Route path="/admin" element={<AdminPanel authToken={authToken} />} />
      </Routes>
    </Router>
  );
};

export default App;
