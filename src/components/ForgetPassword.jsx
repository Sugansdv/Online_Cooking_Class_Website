import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  useEffect(() => {
            document.title = "Flavour Theory | Login | ForgetPassword";
          }, []);
  const [email, setEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setError("Email not found");
      return;
    }

    setShowResetModal(true);
  };

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, password: newPassword } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] p-4">
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-green-600 text-xl font-bold">Password Created Successfully!</h2>
            <p className="text-gray-700 mt-2">Redirecting to Login...</p>
          </div>
        </div>
      )}

      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
              }}
              className="w-full p-3 mb-4 border rounded-full"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              className="w-full p-3 mb-4 border rounded-full"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleReset}
              className="w-full bg-[#BF4444] text-white font-bold py-2 rounded-full"
            >
              SET PASSWORD
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#fff1d1] p-8 rounded-2xl shadow-md w-full max-w-xl text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#a4ce4e] px-10 py-2 rounded-3xl text-2xl font-bold">
          FORGET PASSWORD
        </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <label className="block text-left font-bold text-xl mb-2">E MAIL</label>
            <input
              type="email"
              className="w-full h-[9vh] px-4 py-2 border border-red-300 rounded-full shadow-md"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-60 bg-[#C34F4F] hover:bg-[#D57A66] text-white text-lg py-2 rounded-full font-bold"
          >
            SUBMIT
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-6">
          By Joining And Using Flover Theory Academy Platform, You Agree To Our{" "}
          <span className="underline">Terms & Policies</span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
