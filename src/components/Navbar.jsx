import React from 'react';
import { BarChart3, Bell, Search, User, Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AnalyticsAI</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search analytics..."
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile search button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 