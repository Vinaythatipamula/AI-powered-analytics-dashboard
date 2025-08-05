import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ChartComponent = () => {
  const [activeChart, setActiveChart] = useState('line');

  // Mock data for line chart (Revenue over time)
  const lineData = [
    { month: 'Jan', revenue: 4000, users: 2400 },
    { month: 'Feb', revenue: 3000, users: 1398 },
    { month: 'Mar', revenue: 2000, users: 9800 },
    { month: 'Apr', revenue: 2780, users: 3908 },
    { month: 'May', revenue: 1890, users: 4800 },
    { month: 'Jun', revenue: 2390, users: 3800 },
    { month: 'Jul', revenue: 3490, users: 4300 },
  ];

  // Mock data for bar chart (Sales by category)
  const barData = [
    { category: 'Electronics', sales: 4000 },
    { category: 'Clothing', sales: 3000 },
    { category: 'Books', sales: 2000 },
    { category: 'Home', sales: 2780 },
    { category: 'Sports', sales: 1890 },
  ];

  // Mock data for pie chart (Traffic sources)
  const pieData = [
    { name: 'Direct', value: 400, color: '#3B82F6' },
    { name: 'Organic', value: 300, color: '#10B981' },
    { name: 'Social', value: 300, color: '#F59E0B' },
    { name: 'Referral', value: 200, color: '#EF4444' },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const renderChart = () => {
    switch (activeChart) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 space-y-3 sm:space-y-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Analytics Overview</h3>
        <div className="flex space-x-1 sm:space-x-2">
          <button
            onClick={() => setActiveChart('line')}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              activeChart === 'line'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Line
          </button>
          <button
            onClick={() => setActiveChart('bar')}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              activeChart === 'bar'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setActiveChart('pie')}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
              activeChart === 'pie'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Pie
          </button>
        </div>
      </div>
      
      {renderChart()}
    </div>
  );
};

export default ChartComponent; 