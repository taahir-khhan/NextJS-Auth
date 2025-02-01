"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Header() {
  const router = useRouter();

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
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-black border-b border-gray-800">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-mono">
        NEXTJS
      </h1>
      <button
        onClick={logout}
        className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-sm hover:scale-110"
      >
        Logout
      </button>
    </header>
  );
}
