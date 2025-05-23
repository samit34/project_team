
import React, { useState } from "react";
import './providerDashboard.css';
import { Menu, X, LayoutList, Home, MessageCircle, Wallet, Settings, UserPen, UserRoundCheck, FolderKanban, LayoutDashboard, Calendar, NotebookPen } from "lucide-react";
import { Outlet, Link } from "react-router-dom";

const ProviderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="flex h-screen bg-gray-100 hello">

      {/* Sidebar (Offcanvas) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-100 shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Provider Dashboard</h2>
          <X
            className="w-6 h-6 cursor-pointer lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="mt-4  flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 sc scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <Link to="/provider" className="flex items-center p-4 hover:bg-gray-200">
            <Home className="w-5 h-5 mr-3" /> Home
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <NotebookPen className="w-5 h-5 mr-3" /> My Jobs
          </Link>
          <Link to="/providerDash/dashboard" className="flex items-center p-4 hover:bg-gray-200">
            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
          </Link>

          <Link to="/providerDash/myprofile" className="flex items-center p-4 hover:bg-gray-200">
            <UserPen className="w-5 h-5 mr-3" /> My Profile
          </Link>
          <Link to="/providerDash/clender" className="flex items-center p-4 hover:bg-gray-200">
            <Calendar className="w-5 h-5 mr-3" /> Calender
          </Link>
          {/* <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <Wallet className="w-5 h-5 mr-3"/> Earnings
          </Link>
          <Link to="/providerDash/task" className="flex items-center p-4 hover:bg-gray-200">
            <LayoutList className="w-5 h-5 mr-3" /> Pending Task
          </Link> */}
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <FolderKanban className="w-5 h-5 mr-3" /> Bookings
          </Link>
          <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
            <UserRoundCheck className="w-5 h-5 mr-3" />Jobs
          </Link>
          <Link to="/providerDAsh/messages" className="flex items-center p-4 hover:bg-gray-200">
            <MessageCircle className="w-5 h-5 mr-3" />Inbox
          </Link>
         
        </nav>
      </div>
      <div className="flex-1 flex flex-col ">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <Menu className="w-6 h-6 cursor-pointer lg:hidden" onClick={() => setIsOpen(true)} />
          <h1 className="text-2xl font-bold">Provider Dashboard</h1>
        </header>
        {/* Content Area */}
        <main className="p-6 flex-1 overflow-auto h-screen">
          <Outlet />
        </main>
      </div>


    </div>
  );
}




export default ProviderDashboard


