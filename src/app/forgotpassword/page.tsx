"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await axios.post("/api/users/forgotpassword", { email });
      toast.success("Email sent to your mail");
      setTimeout(() => {
        router.push("/resetpasswordmsg");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-serif animate-text-gradient">
            Forgot Your Password?
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          Enter your email address below, and we'll send you a link to reset
          your password.
        </p>

        <div className="w-full max-w-md">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>

        <button
          onClick={onSubmit}
          className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Submit</span>
        </button>
      </main>
    </div>
  );
}
