"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Importing the eye icons

// Declaring and exporting the Signuppage component
export default function SignupPage() {

  const [showPassword, setShowPassword] = useState(false); // Declaring a state to toggle password visibility (false by default)
  
  const togglePasswordVisibility = () => {  //Function to toggle the password visibility
    setShowPassword((prev) => !prev); //Toggling the value of showPassword state
  };

  return (
    // Main wrapper div with styles to center content vertically and horizontally
    <div
      style={{
        display: "flex",  // Flexbox layout to center
        justifyContent: "center",  // centers horizontally
        alignItems: "center", //centers vertically
        height: "100vh", //full viewport height
        backgroundColor: "#f9fbfd", //background color of the page.
        fontFamily: "Arial, sans-serif", //font family for the page
      }}
    >

      {/* container div for the form */}
      <div
        style={{
            width: "1000px",  //setting width of the container
            height: "550px", //setting height of the container
            margin: "0 auto", // Center the container horizontally
            display: "flex", // flexbox layout
            flexDirection: "column", //stack items vertically
            justifyContent: "center", //centers items vertically
            alignItems: "center", //centers items horizontally
            border: "1px solid rgba(135, 206, 235, 0.3)", // Sky blue border with 30% opacity
            borderRadius: "8px", //rounded corners for the container
            backgroundColor: "rgba(135, 206, 235, 0.3)", // sky blue background with 100% opacity
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // shadow for 3D effect
        }}
      >

        {/* Logo section */}
        <div style={{ marginBottom: "16px" }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}      // Set image width
            height={40}       // Set image height
            style={{ marginBottom: "16px" }}
          />

          {/* horizontal line */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #808080",
              width: "100%",
              margin: "0", // No extra spacing
            }}
          />
        </div>
        
        {/* Heading for the signup form */}
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#333333",
          }}
        > 
          Let’s create your account.
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#666666",
            marginBottom: "20px",
          }}
        >
          Signing up for Calenify is fast and free. No commitments or long-term
          contracts required.
        </p>

        {/* Signup form */}
        <form>
          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <label
              htmlFor="emailorphone"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "#333333",
                marginBottom: "4px",
              }}
            >
            </label>
            <input
              type="email and phone number"
              id="emailOrphone"
              placeholder="Email address or Phone number"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              pattern="(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)|(^\+?[1-9]\d{1,14}$)" // Pattern for email or phone number
              title="Enter a valid email address or phone number"
            />
          </div>

          {/* password input field */}
          <div
            style={{
              marginBottom: "16px",
              position: "relative", // Relative positioning for password visibility toggle
              textAlign: "left",
            }}
          >
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "0.875rem",
                color: "#333333",
                marginBottom: "4px",
              }}
            >
    
            </label>
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
            {/* Button to toggle password visibility */}
            <button
              type="button"
              onClick={togglePasswordVisibility} // Toggle password visibility on click
              style={{
                position: "absolute", // Absolute positioning to align button on the right
                top: "50%", // Vertically center the button
                right: "10px", // Position from the right
                transform: "translateY(-50%)", // Center vertically
                background: "none", // No background
                border: "none", // No border
                cursor: "pointer", // Pointer cursor on hover
                color: "#007bff", // Button text color
                fontSize: "1.25rem", // Button text size for icon
              }}
            >
              {showPassword ? (
                <AiFillEyeInvisible /> // Eye icon to hide password
              ) : (
                <AiFillEye /> // Eye icon to show password
              )}
            </button>
          </div>
          
          {/* Terms & conditions checkbox */}
          <div
            style={{
              marginBottom: "16px",
              display: "flex", // Flexbox for checkbox and label
              alignItems: "center", // Align items vertically
              textAlign: "left",
            }}
          >
            <input
              type="checkbox"
              id="terms" // Checkbox id
              style={{ marginRight: "8px" }} // Space between checkbox and label
            />
            <label
              htmlFor="terms" // For checkbox
              style={{ fontSize: "0.875rem", color: "#333333" }}
            >
              I agree to Calenify&apos;s{" "}
              {/* Link to terms of service */}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Terms
              </a>
              ,{" "}
              {/* Link to privacy policy */}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
              , and{" "}
              {/* Link to e-sign consent */}
              <a
                href="#"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                E-Sign Consent
              </a>
              .
            </label>
          </div>

             {/* Updated Continue button */}
             <a
                 href="/business_signup2"
                      style={{
                                width: "100%",
                                display: "block", // Ensures it takes the full width
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
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.875rem",
            color: "#666666",
          }}
        >
          Already have a Square account?{" "}
          <a href="/business_signin" style={{ color: "#007bff", textDecoration: "none" }}>
            Sign in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
