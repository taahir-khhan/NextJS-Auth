"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout failed");
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setUserId(res.data.user._id);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-5">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-5xl">Profile</h1>
      <p className="underline text-2xl">Profile page section</p>

      <button
        onClick={logout}
        className="bg-white hover:bg-slate-300 text-red-600 font-bold px-5 py-2 rounded-lg mt-2 mx-auto"
      >
        LogOut
      </button>

      <p>
        {userId === "" ? (
          "Nothing"
        ) : (
          <Link
            className="underline bg-white hover:bg-slate-300 p-2 rounded text-red-600 font-bold"
            href={`/profile/${userId}`}
          >
            {userId}
          </Link>
        )}
      </p>
    </div>
  );
}
