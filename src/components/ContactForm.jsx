import React, { useState } from 'react';
import supImg from '../assets/images/unsplash_fdlZBWIP0aM.png';
import { FaUser } from 'react-icons/fa';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Modal state

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!captcha) {
      newErrors.captcha = 'Please confirm you are not a robot';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setShowModal(true); // Show modal instead of alert
      setEmail('');
      setSubject('');
      setDescription('');
      setCaptcha(false);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-[#FFF5ED] flex flex-col items-center justify-center p-4 relative">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">Ticket Submitted Successfully!</h2>
            <p className="text-sm text-gray-600 mb-4">Our support team will contact you soon.</p>
            <button
              className="bg-[#C3413B] text-white px-4 py-2 rounded-full text-sm font-bold"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="text-lg md:text-3xl font-bold tracking-wide text-center w-full my-10 flex items-center justify-center gap-2">
        <FaUser className="text-2xl md:text-3xl" />
        ACADEMY SUPPORT
      </h1>

      <div className="w-full max-w-7xl bg-[#FFF5ED] rounded-lg flex flex-col md:flex-row items-stretch">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h2 className="text-lg md:text-2xl font-bold mt-4">SUBMIT A TICKET</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* EMAIL */}
            <div>
              <label className="block text-lg font-semibold">REQUESTER*</label>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-lg font-semibold mt-5">SUBJECT*</label>
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full px-4 py-2 mt-1 rounded-full border border-gray-300 focus:outline-none"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-lg font-semibold mt-5">DESCRIPTION*</label>
              <textarea
                rows="4"
                className="w-full px-4 py-4 mt-1 rounded-xl border border-gray-300 focus:outline-none resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && (
                <p className="text-sm text-red-600 mt-1">{errors.description}</p>
              )}
            </div>

            <div className="w-full flex justify-center">
              <div className="text-sm text-green-600 font-semibold cursor-pointer">
                + ATTACH A FILE
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="flex items-center space-x-3 mt-2 bg-white p-2">
              <input
                type="checkbox"
                id="robot"
                className="w-5 h-5"
                checked={captcha}
                onChange={(e) => setCaptcha(e.target.checked)}
              />
              <label htmlFor="robot" className="text-sm font-semibold">
                I'M NOT A ROBOT
              </label>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
                className="h-6 ml-auto"
              />
            </div>
            {errors.captcha && <p className="text-sm text-red-600 mt-1">{errors.captcha}</p>}

            {/* Buttons */}
            <div className="flex justify-center space-x-4 pt-4">
              <button
                type="submit"
                className="bg-[#C3413B] text-white font-bold px-5 py-1.5 rounded-full text-sm"
              >
                SUBMIT
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('');
                  setSubject('');
                  setDescription('');
                  setCaptcha(false);
                  setErrors({});
                }}
                className="border border-gray-400 px-5 py-1.5 rounded-full text-sm font-bold"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={supImg}
            alt="support"
            className="w-full h-full object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none max-h-[620px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
