import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Link
        className="p-2 bg-white text-red-600 font-bold rounded"
        href={`/profile`}
      >
        Profile
      </Link>
    </div>
  );
}
