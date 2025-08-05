import React from 'react';
import MetricCard from './MetricCard.jsx';
import ChartComponent from './ChartComponent.jsx';
import AIInsights from './AIInsights.jsx';
import AIQueryBox from './AIQueryBox.jsx';

const Dashboard = () => {
  // Mock data for metrics
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      changeType: 'positive',
      icon: '💰'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '+8.2%',
      changeType: 'positive',
      icon: '👥'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.1%',
      changeType: 'positive',
      icon: '📈'
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '-1.2%',
      changeType: 'negative',
      icon: '⏱️'
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts and AI Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Charts */}
        <div className="xl:col-span-2 space-y-4 md:space-y-6">
          <ChartComponent />
        </div>

        {/* AI Insights */}
        <div className="space-y-4 md:space-y-6">
          <AIInsights />
          <AIQueryBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 