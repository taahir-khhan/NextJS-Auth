"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [disableButton, setDisableButton] = useState(false);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const onSignup = async () => {
    try {
      setProcessing(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("SignUp Failed", error.message);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="p-5 bg-white text-black rounded-lg flex flex-col gap-2 items-start">
        <h1 className="text-3xl font-bold min-w-[400px] text-center">Signup</h1>

        {disableButton && (
          <p className="text-red-500 mx-auto my-2 font-bold text-lg">
            Please fill in all fields
          </p>
        )}

        {processing && (
          <p className="text-blue-600 mx-auto my-2 font-bold text-lg">
            Wait user is resgistering...
          </p>
        )}

        <label htmlFor="username" className="text-xl">
          username:
        </label>
        <input
          className="border-2 border-black rounded-lg p-2 w-full placeholder:italic"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
        />

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
          onClick={onSignup}
          className={`${disableButton ? "bg-gray-600" : "bg-black"} text-white px-5 py-2 rounded-lg mt-2 mx-auto`}
          disabled={disableButton}
        >
          SignUp
        </button>

        <Link
          href="/login"
          className="text-blue-600 underline font-bold mx-auto mt-2"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
