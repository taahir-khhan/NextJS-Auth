"use client";
import React from "react";

const EmailVerification = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-lg text-center transform transition-all hover:scale-105">
        {/* Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-blue-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Verify Your Email Address
        </h2>

        <p className="text-gray-600 mb-6">
          A verification link has been sent to your mail
          <span className="font-semibold text-blue-600"></span>. Please check
          your inbox and follow the instructions to verify your email address.
        </p>

        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
