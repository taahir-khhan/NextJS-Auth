export default function UserProfile({ params }: any) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      {/* Profile Title */}
      <h1 className="text-6xl font-extrabold text-white tracking-wide border-b-4 border-red-500 pb-2 text-center">
        User ID
      </h1>

      {/* Parameter Display Section */}
      <p className="text-2xl text-gray-300 font-medium text-center">
        This is the profile page for user with ID, which is grabbed from the
        URL:
        <span className="bg-red-600 px-4 py-2 mx-2 rounded-lg text-white font-bold shadow-lg">
          {params.id}
        </span>
      </p>
    </div>
  );
}
