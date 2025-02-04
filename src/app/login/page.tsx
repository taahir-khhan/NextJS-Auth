"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disableButton, setDisableButton] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onLogin = async () => {
    try {
      setProcessing(true);
      await axios.post("/api/users/login", user);
      toast.success("Login Successfully");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        console.log("Error", error.message);
      }
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-black via-gray-900 to-black  bg-[length:400%_400%]"></div>

      <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-300 hover:shadow-3xl transition-all duration-300 min-w-[90%] md:min-w-[450px] z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            LOGIN
          </h1>
        </div>

        <div className="space-y-3 mb-6">
          {disableButton && (
            <div className="animate-fade-in bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-lg">
              ⚠️ Please fill in all fields
            </div>
          )}

          {processing && (
            <div className="animate-fade-in bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-3 rounded-lg flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700"></div>
              Authenticating...
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold text-lg"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 border-2 text-gray-800 border-gray-300 rounded-lg focus:border-gray-600 focus:ring-2 focus:ring-gray-500 transition-all placeholder-gray-400"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold text-lg"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:ring-2 focus:ring-gray-500 transition-all placeholder-gray-400"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>
          <Link
            href={`/forgotpassword`}
            className="text-blue-500 underline font-bold text-left my-2"
          >
            Forgot your password ?
          </Link>

          <button
            onClick={onLogin}
            disabled={disableButton}
            className={`w-full py-3 text-lg font-bold rounded-lg transition-all ${
              disableButton
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-black hover:bg-gray-900 hover:scale-[1.02]"
            } text-white shadow-md`}
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/signup"
            className="text-gray-600 hover:text-black font-semibold underline underline-offset-4 hover:underline-offset-2 transition-all"
          >
            Create New Account
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full py-4 bg-black/80 backdrop-blur-sm border-t border-white/10 z-10">
        <p className="text-center text-gray-400 text-sm">
          © 2025 Tahir. All rights reserved
        </p>
      </footer>
    </div>
  );
}
