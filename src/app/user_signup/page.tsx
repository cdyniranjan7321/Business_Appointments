"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import { FiEye, FiEyeOff } from "react-icons/fi"; 

const UserSignup = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    birthday: { month: "Feb", day: "09", year: "1997" },
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [errorMessages, setErrorMessages] = useState({}); // To store error messages

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      birthday: { ...form.birthday, [name]: value },
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, termsAccepted: e.target.checked });
  };

  const validateForm = () => {
    const errors = {};
    // Email validation (simple regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone number validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    // Password match validation
    if (form.password !== form.confirmPassword) {
      errors.password = "Passwords do not match.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", form);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9fbfd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "550px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgba(135, 206, 235, 0.3)",
          borderRadius: "8px",
          backgroundColor: "rgba(135, 206, 235, 0.3)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={40}
            style={{ marginBottom: "16px" }}
          />
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #808080",
              width: "100%",
              margin: "0",
            }}
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Let’s create your account.</h2>
        <p className="text-center text-gray-600 mb-6">
          Signing up for Calenify is fast and free. No commitments or long-term contracts required.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={form.firstName}
              onChange={handleInputChange}
              className="w-1/2 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleInputChange}
              className="w-1/2 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            {errorMessages.email && (
              <span style={{ color: "red", fontSize: "12px" }}>{errorMessages.email}</span>
            )}
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              value={form.phoneNumber}
              onChange={handleInputChange}
              className="w-1/2 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
            {errorMessages.phoneNumber && (
              <span style={{ color: "red", fontSize: "12px" }}>{errorMessages.phoneNumber}</span>
            )}
            <div className="w-1/2 flex flex-col space-y-2">
              <label htmlFor="birthday" className="font-semibold text-sm">
                Date of birth
              </label>
              <div className="flex space-x-2">
                <select
                  name="month"
                  value={form.birthday.month}
                  onChange={handleBirthdayChange}
                  className="w-1/3 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                >
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name="day"
                  min="1"
                  max="31"
                  value={form.birthday.day}
                  onChange={handleBirthdayChange}
                  className="w-1/3 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                  type="number"
                  name="year"
                  min="1900"
                  value={form.birthday.year}
                  onChange={handleBirthdayChange}
                  className="w-1/3 p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleInputChange}
                className="w-full p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="relative w-1/2">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 h-12 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <input
              type="checkbox"
              id="terms"
              style={{ marginRight: "8px" }}
              checked={form.termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              style={{ fontSize: "0.875rem", color: "#333333" }}
            >
              I agree to Calenify&apos;s{" "}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Terms
              </a>
              ,{" "}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
              , and{" "}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                E-Sign Consent
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#28a745",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.875rem",
            color: "#666666",
          }}
        >
          Already have a Square account?{" "}
          <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
            Sign in
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
