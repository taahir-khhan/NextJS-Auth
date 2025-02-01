"use client";
import { Footer, Header, Main } from "@/components";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setUserId(res.data.user._id);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="flex-1 flex flex-col gap-5 items-center justify-center px-4 text-center space-y-8">
        <p className="text-7xl font-mono">Welcome to your profile page</p>

        {userId === "" ? (
          <span className="bg-white text-black hover:scale-110 p-4 rounded-md font-bold cursor-pointer ">
            No User ID Found
          </span>
        ) : (
          <Link
            className="bg-white text-black p-4 rounded-md font-bold cursor-pointer hover:scale-110 transition-transform duration-300"
            href={`/profile/${userId}`}
          >
            {userId} <span className="pl-2">→</span>
          </Link>
        )}
      </div>
      <Footer />
    </div>
  );
}
