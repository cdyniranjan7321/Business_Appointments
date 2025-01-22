export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-600 mt-4">Explore our dashboard for more details.</p>
      <a
        href="/dashboard"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
