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
import CourseDescription from "./pages/CourseDescription";
import EnrollmentForm from "./components/EnrollmentForm";
import EnrollNavbar from "./components/EnrollNavbar";
import CloudKitchen from "./pages/CloudKitchen";
import ForgetPassword from "./components/ForgetPassword";
import EnrollSuccess from "./components/EnrollSuccess";
import './App.css';
import ScrollToTop from "d:/Ecommerce_Wedding_Cards/src/components/ScrollToTop";
import { DropdownProvider } from "./components/DropdownContext";
import Course1 from "./components/Course1";
import Course2 from "./components/Course2";
import Course3 from "./components/Course3";
import Course4 from "./components/Course4";
import Course5 from "./components/Course5";
import Course6 from "./components/Course6";
import Course7 from "./components/Course7";
import Course8 from "./components/Course8";

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
        <Route path="/course1" element={<Course1 />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/course3" element={<Course3 />} />
        <Route path="/course4" element={<Course4 />} />
        <Route path="/course5" element={<Course5 />} />
        <Route path="/course6" element={<Course6 />} />
        <Route path="/course7" element={<Course7 />} />
        <Route path="/course8" element={<Course8 />} />

      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <DropdownProvider>
      <ScrollToTop />
      <LayoutRoutes />
      </DropdownProvider>
    </Router>
  );
}

export default App;
