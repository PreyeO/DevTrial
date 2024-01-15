import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authenttication/Login";
import Home from "./Pages/Landing/Home";
import Talent from "./Pages/Users/Talent";
import RecruiterSignUp from "./Pages/Authenttication/RecruiterSignUp";
import DevSignUp from "./Pages/Authenttication/DevSignUp";
import Recruiter from "./Pages/Users/Recruiter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitersignup" element={<RecruiterSignUp />} />
          <Route path="/devsignup" element={<DevSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/recruiter" element={<Recruiter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
