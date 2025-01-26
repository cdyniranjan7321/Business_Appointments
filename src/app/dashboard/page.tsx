import Sidebar from "./Sidebar";
import Header from "./header"; 

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <Header /> 

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6" style={{ backgroundColor: "#f0f8ff" }}>
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Welcome to the dashboard! Select an option from the sidebar to navigate.</p>
        </div>
      </div>
    </div>
  );
}

