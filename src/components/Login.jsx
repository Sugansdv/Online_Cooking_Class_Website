import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 

const Login = () => {
  useEffect(() => {
            document.title = "Flavour Theory | Login";
          }, []);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
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
    <div className="relative min-h-screen flex items-center justify-center">
      {/*  MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-green-600 text-lg md:text-xl font-bold">Login Successful!</h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">Redirecting to Home Page...</p>
          </div>
        </div>
      )}

      {/*  LOGIN FORM */}
      <div className="bg-[#fff1d1] relative p-8 rounded-lg shadow-md w-full max-w-2xl z-10">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-12 py-2 bg-[#c8e76f] rounded-3xl text-sm md:text-base lg:text-4xl flex items-center justify-center font-bold text-black border border-[#a4d157]">
                    LOGIN
                </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {["email", "password"].map((field) => (
            <div key={field}>
              <label className="block font-bold mb-1 uppercase text-base md:text-xl lg:text-2xl">
                {field.toUpperCase()}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full h-[9vh] p-2 rounded-full border border-red-300 shadow-sm bg-white"
                placeholder=""
              />
            </div>
          ))}

          {error && (
            <p className="text-red-600 text-sm md:text-base">{error}</p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-60 bg-[#BF4444] text-lg md:text-xl lg:text-2xl text-white py-2 rounded-full font-bold"
            >
              SUBMIT
            </button>
          </div>
        </form>

        <div className="text-center mt-4 text-sm md:text-base lg:text-lg">
          <Link to="/signup" className="font-bold">SIGN UP</Link> |{" "}
          <Link to="/forgot-pass" className="font-bold">FORGOT PASSWORD</Link>
          <p className="text-gray-500 mt-2 text-xs md:text-sm lg:text-base">
            By joining Flover Theory Academy, you agree to our <span className="underline">Terms & Policies</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
