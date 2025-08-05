import React from 'react';
import { Home, BarChart3, TrendingUp, Users, Settings, Database, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: TrendingUp, label: 'Reports' },
    { icon: Users, label: 'Users' },
    { icon: Database, label: 'Data Sources' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-bold text-gray-900">AnalyticsAI</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  item.active
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={onClose}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  item.active
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 