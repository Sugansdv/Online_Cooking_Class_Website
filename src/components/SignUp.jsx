import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  useEffect(() => {
            document.title = "Flavour Theory | SignUp";
          }, []);
  const [form, setForm] = useState({ name: "", email: "", password: "", mobile: "" });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, mobile } = form;

  if (!name || !email || !password || !mobile) {
    setError("All fields are required");
    return;
  }

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    setError("Name should contain only letters and spaces");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    setError("Mobile number must be exactly 10 digits and contain only numbers");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    setError("User already exists!");
    return;
  }

  users.push(form);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(form));

  setShowModal(true);
  setTimeout(() => {
    setShowModal(false);
    navigate("/");
  }, 2000);
};


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center my-20 px-2">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-green-600 text-lg md:text-xl font-bold">Signup Successful!</h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">Redirecting to Login Page...</p>
          </div>
        </div>
      )}


      <div className="relative bg-[#fff1d1] p-8 rounded-lg w-full max-w-2xl shadow-md">
       <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-20 py-2 bg-[#c8e76f] rounded-3xl text-sm md:text-base lg:text-4xl flex items-center justify-center font-bold text-black border border-[#a4d157]">
                    SIGNUP
                </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {["name", "email", "password", "mobile"].map((field) => (
            <div key={field}>
              <label className="block font-bold mb-1 uppercase text-base md:text-xl lg:text-2xl">
                {field.replace(/^\w/, c => c.toUpperCase())}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full h-[9vh] p-2 rounded-full border border-red-300 shadow-sm bg-white"
              />
            </div>
          ))}

          {error && <p className="text-red-600 text-sm md:text-base">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-60 bg-[#C34F4F] hover:bg-[#D57A66] text-lg md:text-xl lg:text-2xl text-white py-2 rounded-full font-bold"
            >
              SUBMIT
            </button>
          </div>
        </form>

        <div className="text-center mt-4 text-sm md:text-base lg:text-lg">
          <Link to="/login" className="font-bold">LOGIN</Link> |{" "}
          <Link to="/forgot-pass" className="font-bold">FORGOT PASSWORD</Link>
          <p className="text-gray-500 mt-2 text-xs md:text-sm lg:text-base">
            By Joining And Using Flover Theory Academy Platform, You Agree To Our <span className="underline">Terms & Policies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
