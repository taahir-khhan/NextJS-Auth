"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
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
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-5">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-5xl">Profile</h1>
      <p className="underline text-2xl">Profile page section</p>

      <button
        onClick={logout}
        className="bg-white hover:bg-slate-400 text-black font-bold px-5 py-2 rounded-lg mt-2 mx-auto"
      >
        LogOut
      </button>
    </div>
  );
}
