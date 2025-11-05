import React from "react";

const Dashboard = () => {
  const fullName = "Sasmitha Hiram";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-8">NEXTA</h2>

        <nav className="space-y-3">
          <a className="block py-2.5 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer">
            Dashboard
          </a>
          <a className="block py-2.5 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer">
            Courses
          </a>
          <a className="block py-2.5 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer">
            Learning Tracks
          </a>
          <a className="block py-2.5 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer">
            Performance
          </a>
          <a className="block py-2.5 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

          {/* Profile Initial Badge */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">{fullName}</span>
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold shadow-md">
              {initials}
            </div>
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-600 text-sm">Total Courses</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-600 text-sm">Completed</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900">8</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-600 text-sm">In Progress</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900">3</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-600 text-sm">Pending</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900">1</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
