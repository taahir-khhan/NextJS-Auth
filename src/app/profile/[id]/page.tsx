export default function UserProfile({ params }: any) {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-5">
      <h1 className="text-5xl">Profile</h1>
      <p className="text-2xl">
        Grab the parameters from the URL and display them here:
        <span className="bg-red-500 px-3 py-2 mx-2 rounded-lg">
          {params.id}
        </span>
      </p>
    </div>
  );
}
