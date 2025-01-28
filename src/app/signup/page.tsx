"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="p-5 bg-white text-black rounded-lg flex flex-col gap-2 items-start">
        <h1 className="text-3xl font-bold min-w-[400px] text-center">Signup</h1>

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
          className="bg-black text-white px-5 py-2 rounded-lg mt-2 mx-auto"
        >
          SignUp
        </button>

        <Link
          href="/login"
          className="text-blue-500 underline font-bold mx-auto mt-2"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
