import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "Flavour Theory | Forget Password";
  }, []);

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); 
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setError("Email not found");
    } else {
      setError("");
      setStep(2); 
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
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
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] p-4">
      <div className="bg-[#fff1d1] p-8 rounded-2xl shadow-md w-full max-w-xl text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#a4ce4e] px-10 py-2 rounded-3xl text-2xl font-bold">
          FORGET PASSWORD
        </div>

        {success && (
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg mb-4 font-semibold">
            Password Reset Successful! Redirecting...
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="mt-10 space-y-8">
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
              CONTINUE
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordReset} className="mt-10 space-y-6">
            <h3 className="text-xl font-semibold mb-2">Reset Password for: {email}</h3>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
              }}
              className="w-full p-3 border rounded-full"
              required
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              className="w-full p-3 border rounded-full"
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#BF4444] text-white font-bold py-2 rounded-full"
            >
              RESET PASSWORD
            </button>
          </form>
        )}

        <p className="text-gray-500 text-sm mt-6">
          By using Flavour Theory Academy, you agree to our{" "}
          <span className="underline">Terms & Policies</span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
