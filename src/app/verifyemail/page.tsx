"use client";
import { connect } from "@/DBConfig/dbConfig";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

connect();

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      await axios.post("api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = document.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Verify Email</h1>

        <div className="mb-6">
          <h2 className="bg-gray-200 text-gray-800 p-3 rounded-lg font-mono break-all">
            {token ? `Token: ${token}` : "No Token"}
          </h2>
        </div>

        {verified && (
          <div className="flex flex-col items-center gap-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
              Email Verified Successfully!
            </div>
            <Link
              href="/login"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Login Here
            </Link>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
            Error Verifying Email. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
