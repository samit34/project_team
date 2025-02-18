
import React, { useState } from "react";
import { Menu, X, Home, ClipboardList, Wallet, Settings,UserPen } from "lucide-react";
import { Outlet , Link } from "react-router-dom";
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
              <Link to="/providerDash" className="flex items-center p-4 hover:bg-gray-200">
                <UserPen className="w-5 h-5 mr-3" /> My Profile
              </Link>
              <Link to="/providerDash/stackpage" className="flex items-center p-4 hover:bg-gray-200">
                <ClipboardList className="w-5 h-5 mr-3" /> Stacks
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Wallet className="w-5 h-5 mr-3" /> Earnings
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Pending Request
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Manage Services
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Jobs Done
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Settings
              </Link>
              <Link to="#" className="flex items-center p-4 hover:bg-gray-200">
                <Settings className="w-5 h-5 mr-3" /> Settings
              </Link>
            </nav>
          </div>

          <Outlet />
        </div>
      );
    }
    
 


export default ProviderDashboard

