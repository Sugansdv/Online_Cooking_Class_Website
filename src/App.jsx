import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import LoginNavbar from "./components/LoginNavbar";
import BakeryPromo from "./pages/BakkeryPromo";
import CourseDescription from "./pages/courseDescription";
import EnrollmentForm from "./components/EnrollmentForm";
import EnrollNavbar from "./components/EnrollNavbar";
import CloudKitchen from "./pages/CloudKitchen";
import ForgetPassword from "./components/ForgetPassword";
import EnrollSuccess from "./components/EnrollSuccess";
import './App.css';

function LayoutRoutes() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup","/forgot-pass"].includes(location.pathname);
   const isEnrollPage = ["/enroll", "/enrollsuccess"].includes(location.pathname);

  return (
    <>
       {isAuthPage ? (
        <LoginNavbar />
      ) : isEnrollPage ? (
        <EnrollNavbar />
      ) : (
        <Navbar />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-pass" element={<ForgetPassword />} />
        <Route path="/bakery" element={<BakeryPromo />} />
        <Route path="/cloud-kitchen" element={<CloudKitchen />} />
        <Route path="/course-des" element={<CourseDescription />} />
        <Route path="/enroll" element={<EnrollmentForm />} />
        <Route path="/enrollsuccess" element={<EnrollSuccess />} />

      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;
