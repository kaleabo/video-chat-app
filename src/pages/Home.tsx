import CreateRoomForm from "../components/CreateRoomForm";

export default function HomePage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-background px-4 sm:px-6 md:px-8">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-50">
            Video Chat
          </h1>
          <p className="text-gray-400">
            Connect with friends, family, and colleagues through our simple and
            secure video chat application.
          </p>
          <CreateRoomForm />
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/work-meet.png"
          alt="Video Chat"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
