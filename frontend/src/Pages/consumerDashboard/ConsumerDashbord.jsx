import React, { useState } from "react";
import { Menu, X, UserPen, Calendar, Bookmark, Settings } from "lucide-react";


import { Outlet , Link } from "react-router-dom";


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
          <Link to="/ConsumerDash" className="flex items-center p-4 hover:bg-gray-200">
          <UserPen className="w-5 h-5 mr-3" /> Profile
          </Link>
          <Link to="stackpage" className="flex items-center p-4 hover:bg-gray-200">
          <Calendar className="w-5 h-5 mr-3" /> My Bookings
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
          <Bookmark className="w-5 h-5 mr-3" /> Saved Providers
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
          <Settings className="w-5 h-5 mr-3" /> Settings
          </Link>
        </nav>
        </div>
        <Outlet/>
      </div>
      );
}

export default ConsumerDashbord




