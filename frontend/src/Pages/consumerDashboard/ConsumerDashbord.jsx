import React, { useState } from "react";
import { Menu, X, UserPen, Calendar, Bookmark, Settings } from "lucide-react";

const ConsumerDashbord = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar (Offcanvas) */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 md:relative md:translate-x-0`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Dashboard</h2>
              <X className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setIsOpen(false)} />
            </div>
    
            <nav className="mt-4">
            <a href="#" className="flex items-center p-4 hover:bg-gray-200">
                <UserPen className="w-5 h-5 mr-3" /> Profile
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-200">
                <Calendar className="w-5 h-5 mr-3" /> My Bookings
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-200">
                <Bookmark className="w-5 h-5 mr-3" /> Saved Providers
              </a>
              <a href="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Settings
              </a>
            </nav>
          </div>
    
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
              <Menu className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setIsOpen(true)} />
              <h1 className="text-2xl font-bold">Consumer Dashboard</h1>
            </header>
    
            {/* Content Area */}
            <main className="p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, Consumer!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-white shadow rounded-lg">Upcoming Bookings: 2</div>
                <div className="p-6 bg-white shadow rounded-lg">Saved Providers: 5</div>
                <div className="p-6 bg-white shadow rounded-lg">Recent Activity</div>
              </div>
            </main>
          </div>
        </div>
      );
}

export default ConsumerDashbord




