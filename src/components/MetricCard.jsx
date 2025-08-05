import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{title}</p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-1 truncate">{value}</p>
        </div>
        <div className="text-2xl sm:text-3xl ml-2 flex-shrink-0">{icon}</div>
      </div>
      
      <div className="flex items-center mt-3 sm:mt-4">
        <div className={`flex items-center text-xs sm:text-sm font-medium ${
          changeType === 'positive' ? 'text-green-600' : 'text-red-600'
        }`}>
          {changeType === 'positive' ? (
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          )}
          {change}
        </div>
        <span className="text-xs text-gray-500 ml-2 hidden sm:inline">vs last month</span>
      </div>
    </div>
  );
};

export default MetricCard; 