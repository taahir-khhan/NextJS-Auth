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
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Verify Email:</h1>
      <h2 className="bg-red-600 text-white p-2 rounded">
        {token ? `${token}` : "No Token"}
      </h2>

      {verified && (
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="bg-green-600 text-white p-2 rounded m-2">
            Email Verified
          </h1>
          <Link className="underline text-blue-500 font-bold" href={`/login`}>
            Login Here
          </Link>
        </div>
      )}

      {error && (
        <div>
          <h1 className="bg-red-600 text-white p-2 rounded m-2">
            Error Verifying Email
          </h1>
        </div>
      )}
    </div>
  );
}
