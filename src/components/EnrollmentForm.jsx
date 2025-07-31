import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollmentForm = () => {
    useEffect(() => {
            document.title = "Flavour Theory | Enrollment";
          }, []);
    const [isNewAccount, setIsNewAccount] = useState(true);
    const [errors, setErrors] = useState({});
    const [coupon, setCoupon] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const handleApplyCoupon = () => {
        const trimmed = coupon.trim();
        if (trimmed !== '') {
            setAppliedCoupon(trimmed);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const mobile = form.mobile.value.trim();

        const newErrors = {};

        if (name.length < 3) newErrors.name = "Name must be at least 3 characters.";
        if (!email.includes('@')) newErrors.email = "Enter a valid email.";
        if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Enter a valid 10-digit number.";
        if (!paymentMethod) newErrors.payment = "Please select UPI or Card payment method.";
        if (!isChecked) newErrors.checkbox = "Please agree to use GSTIN before proceeding.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        navigate('/enrollsuccess');
    };

    return (
       <div className="min-h-screen bg-[#fff7eb] flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-7xl bg-[#fdeedc] rounded-xl shadow-md py-6 px-4 sm:px-6 md:px-20 relative">

    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 sm:px-12 py-2 bg-[#c8e76f] rounded-3xl text-sm md:text-base lg:text-4xl flex items-center justify-center font-bold text-black border border-[#a4d157]">
      ENROLL
    </div>

    <h2 className="text-center mt-8 mb-4 text-lg sm:text-2xl lg:text-3xl font-bold">
      BAKERY BUSINESS <span className="font-normal">ACCELERATOR PROGRAM</span>
    </h2>

    <form className="space-y-5 text-sm sm:text-base lg:text-2xl" onSubmit={handleSubmit} noValidate>

      {/* Responsive 2-column form section */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <div className="w-full sm:w-1/2 space-y-5">
          {/* Name Input */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              minLength={3}
              placeholder="Enter your name"
              className="w-full shadow border rounded-2xl px-4 py-4 sm:py-6"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full shadow border rounded-2xl px-4 py-4 sm:py-6"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Mobile Input */}
          <div>
            <label className="block mb-1 font-semibold">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
              className="w-full shadow border rounded-2xl px-4 py-4 sm:py-6"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Account Options */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-sm sm:text-base font-semibold space-y-3 pl-0 sm:pl-2">
          {isNewAccount ? (
            <>
              <button
                type="button"
                onClick={() => setIsNewAccount(false)}
                className="underline text-left text-black"
              >
                CREATE A NEW ACCOUNT
              </button>
              <span className="text-gray-500">OR</span>
              <button type="button" className="underline text-left text-black">
                FORGET PASSWORD?
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsNewAccount(true)}
              className="underline text-left text-black"
            >
              ALREADY HAVE AN ACCOUNT
            </button>
          )}
        </div>
      </div>

      {/* GST Checkbox */}
      <label className="flex flex-col sm:flex-row sm:items-center gap-2 font-semibold">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-4 h-4 shadow"
        />
        <span>Use GSTIN for claiming input tax (India)</span>
      </label>
      {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}

      {/* Price Details */}
      <div className="flex justify-between shadow items-center bg-white border rounded-2xl px-4 py-4 sm:py-6 font-semibold">
        <span>SUB TOTAL:</span>
        <span>INR 36000</span>
      </div>

      <div className="flex justify-between shadow items-center bg-white border rounded-2xl px-4 py-4 sm:py-6 font-semibold">
        <span>DISCOUNT:</span>
        <span>INR 0.00</span>
      </div>

      <div className="flex justify-between shadow items-center bg-white border rounded-2xl px-4 py-4 font-semibold">
        <div>
          TOTAL PAYABLE:
          <br />
          <small className="font-normal">(Incl. 18% GST)</small>
        </div>
        <span className="font-bold text-lg">INR 36000.00</span>
      </div>

      {/* Coupon input */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={appliedCoupon || coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setAppliedCoupon('');
          }}
          className="flex-grow border shadow rounded-2xl px-4 py-4 sm:py-6"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          className="bg-white border shadow rounded-2xl px-4 py-4 sm:py-6 font-semibold"
        >
          APPLY COUPON
        </button>
      </div>

      {/* Payment options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl px-4 py-4 sm:py-6 border">
          <p className="mb-2 font-semibold">UPI Payment</p>
          <button
            type="button"
            className={`w-full shadow border rounded-2xl px-4 py-4 sm:py-6 ${paymentMethod === 'upi' ? 'bg-green-100 border-green-500' : 'bg-white'}`}
            onClick={() => setPaymentMethod('upi')}
          >
            + Add UPI ID
          </button>
        </div>
        <div className="rounded-2xl px-4 py-4 sm:py-6 border">
          <p className="mb-2 font-semibold">Card Payment</p>
          <button
            type="button"
            className={`w-full shadow border rounded-2xl px-4 py-4 sm:py-6 ${paymentMethod === 'card' ? 'bg-green-100 border-green-500' : 'bg-white'}`}
            onClick={() => setPaymentMethod('card')}
          >
            + Add Card Number
          </button>
        </div>
      </div>
      {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#c7463a] hover:bg-[#b63e34] text-white font-semibold rounded-3xl px-8 py-2"
        >
          SUBMIT & PAY NOW
        </button>
      </div>
    </form>
  </div>
</div>

    );
};

export default EnrollmentForm;
