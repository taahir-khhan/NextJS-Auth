"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const resetPassword = async () => {
    try {
      const response = await axios.post("api/users/resetpassword", {
        token,
        newPassword,
      });
      console.log("Password reset success", response.data);
      toast.success("Password reset Successful");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = document.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-serif animate-text-gradient">
            Reset Your Password
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          Enter your new password below to reset your password.
        </p>

        <div className="w-full max-w-md">
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="text"
            placeholder="New Password"
            className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>

        <button
          onClick={resetPassword}
          className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-lg
          hover:-translate-y-1 border-2 border-gray-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Reset Password</span>
        </button>

        <Link
          href="/login"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          ← Back to Login
        </Link>
      </main>
    </div>
  );
}
