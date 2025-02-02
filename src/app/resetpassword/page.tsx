import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-serif animate-text-gradient">
            Reset Your Password
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          Enter your new password below to reset your password.
        </p>

        <div className="w-full max-w-md">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>

        <div className="w-full max-w-md">
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>

        <button
          className="px-8 py-4 text-lg font-semibold bg-white text-black rounded-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-lg
          hover:-translate-y-1 border-2 border-gray-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Reset Password</span>
        </button>

        <Link
          href="/login"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          ← Back to Login
        </Link>
      </main>
    </div>
  );
}
