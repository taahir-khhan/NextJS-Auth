"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      if (error.response) {
        console.log("Login Failed", error.response.data);
        console.log("Status", error.response.status);
        console.log("Headers", error.response.headers);
      } else if (error.request) {
        console.log("No response received", error.request);
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
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="p-5 bg-white text-black rounded-lg flex flex-col gap-2 items-start">
        <h1 className="text-3xl font-bold min-w-[400px] text-center">Login</h1>

        {disableButton && (
          <p className="text-red-500 mx-auto my-2 font-bold text-lg">
            Please fill in all fields
          </p>
        )}

        {processing && (
          <p className="text-blue-600 mx-auto my-2 font-bold text-lg">
            Wait user is Login in...
          </p>
        )}

        <label htmlFor="email" className="text-xl">
          email:
        </label>
        <input
          className="border-2 border-black rounded-lg p-2 w-full placeholder:italic"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="text-xl">
          password:
        </label>
        <input
          className="border-2 border-black rounded-lg p-2 w-full placeholder:italic"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          onClick={onLogin}
          className={`${disableButton ? "bg-gray-600" : "bg-black"} text-white px-5 py-2 rounded-lg mt-2 mx-auto`}
          disabled={disableButton}
        >
          LogIn
        </button>

        <Link
          href="/signup"
          className="text-blue-600 underline font-bold mx-auto mt-2"
        >
          Don't have an account? Signup
        </Link>
      </div>
    </div>
  );
}
