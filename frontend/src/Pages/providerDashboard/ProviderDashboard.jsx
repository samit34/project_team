
import React, { useState } from "react";
import { Menu, X, ClipboardList, Wallet, Settings,UserPen } from "lucide-react";
import { Link } from "react-router-dom";
const  ProviderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
      return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar (Offcanvas) */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-100 shadow-md transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
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
                <UserPen className="w-5 h-5 mr-3" /> My Profile
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <ClipboardList className="w-5 h-5 mr-3" /> My Jobs
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Wallet className="w-5 h-5 mr-3" /> Earnings
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> pending Request
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Manage Services
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> jobs done
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Settings
              </Link>
             
            </nav>
          </div>
    
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <header className="flex items-center justify-end  p-4 bg-red-200 shadow-md">
              <h5 className="text-xl font-bold mr-4">Sort</h5>
              <Menu className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setIsOpen(true)} />

            </header>
    
            {/* Content Area */}
            <main className="p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, Provider!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-white shadow rounded-lg">Total Jobs: 20</div>
                <div className="p-6 bg-white shadow rounded-lg">Earnings: $500</div>
                <div className="p-6 bg-white shadow rounded-lg">Pending Requests: 5</div>
              </div>
            </main>
          </div>
        </div>
      );
    }
    
 


export default ProviderDashboard

