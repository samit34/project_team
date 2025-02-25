
import React, { useState } from "react";

import { Menu, X, LayoutList, Home, MessageCircle, Wallet, Settings, UserPen, UserRoundCheck, FolderKanban, LayoutDashboard, Calendar, NotebookPen } from "lucide-react";
import { Outlet, Link } from "react-router-dom";

const ProviderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="flex h-auto bg-gray-100">

      {/* Sidebar (Offcanvas) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-100 shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Provider Dashboard</h2>
          <X
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>


        <nav className="mt-4">
          <Link to="/provider" className="flex items-center p-4 hover:bg-gray-200">
            <Home className="w-5 h-5 mr-3" /> Home
          </Link>
          <Link to="/providerDash" className="flex items-center p-4 hover:bg-gray-200">
            <NotebookPen className="w-5 h-5 mr-3" /> My Jobs
          </Link>
          <Link to="/providerDash/stackpage" className="flex items-center p-4 hover:bg-gray-200">
            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
          </Link>

          <Link to="/providerDash/myprofile" className="flex items-center p-4 hover:bg-gray-200">
            <UserPen className="w-5 h-5 mr-3" /> My Profile
          </Link>
          <Link to="" className="flex items-center p-4 hover:bg-gray-200">
            <Calendar className="w-5 h-5 mr-3" /> Calender

          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <Wallet className="w-5 h-5 mr-3" /> Earnings
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <LayoutList className="w-5 h-5 mr-3" /> Pending Task

          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <FolderKanban className="w-5 h-5 mr-3" /> Manage Services
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">

            <UserRoundCheck className="w-5 h-5 mr-3" />Job Board
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">

            <MessageCircle className="w-5 h-5 mr-3" />Message
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <Settings className="w-5 h-5 mr-3" /> Settings

          </Link>

        </nav>

      </div>
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <Menu className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setIsOpen(true)} />
          <h1 className="text-2xl font-bold">Provider Dashboard</h1>
        </header>

        {/* Content Area */}
        <main className="p-6">

          <Outlet />

        </main>
      </div>


    </div>
  );
}




export default ProviderDashboard

