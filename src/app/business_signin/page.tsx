"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
          width: "400px",
          padding: "32px",
          border: "1px solid rgba(135, 206, 235, 0.3)",
          borderRadius: "8px",
          backgroundColor: "rgba(135, 206, 235, 0.3)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Image
  src="/logo.png"
  alt="Logo"
  width={60}
  height={40}
  style={{ display: "block", margin: "0 auto", textAlign: "center" }}
/>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "8px", color: "#333" }}>
          Let’s sign in to your account.
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "20px" }}>
          Signing in for Calenify is fast and free.
        </p>

        <form style={{ width: "100%" }}>
          {/* Email or Phone Number Input */}
          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <input
              type="text"
              id="emailOrPhone"
              placeholder="Email address or Phone number"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "16px", position: "relative", textAlign: "left" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#007bff",
                fontSize: "1.25rem",
              }}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          {/* Forget Password Option */}
          <div style={{ textAlign: "right", marginBottom: "16px" }}>
            <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
              Forget password?
            </a>
          </div>

          {/* Continue Button */}
          <a
            href="/dashboard"
            style={{
              width: "100%",
              display: "block",
              textAlign: "center",
              padding: "12px",
              backgroundColor: "#28a745",
              color: "#ffffff",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Continue
          </a>
        </form>

        <p style={{ marginTop: "16px", fontSize: "0.875rem", color: "#666" }}>
          Don’t have a Square account? {" "}
          <a href="/business_signup" style={{ color: "#007bff", textDecoration: "none" }}>
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
}
