import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  // Mock AI insights data
  const insights = [
    {
      type: 'positive',
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Your revenue has increased by 12.5% this month. This is primarily driven by increased conversion rates in the Electronics category.',
      timestamp: '2 hours ago'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Session Duration',
      description: 'Average session duration has decreased by 1.2%. Consider optimizing page load times and improving user engagement.',
      timestamp: '4 hours ago'
    },
    {
      type: 'insight',
      icon: Lightbulb,
      title: 'Opportunity',
      description: 'Users from social media have 23% higher conversion rates. Consider increasing your social media marketing budget.',
      timestamp: '6 hours ago'
    }
  ];

  const getInsightColor = (type) => {
    switch (type) {
      case 'positive':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'insight':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'positive':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'insight':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-3 md:mb-4">
        <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`p-3 md:p-4 rounded-lg border ${getInsightColor(insight.type)}`}
          >
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className={`mt-0.5 md:mt-1 ${getIconColor(insight.type)}`}>
                <insight.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                    {insight.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {insight.timestamp}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for real AI API integration */}
      <div className="mt-3 md:mt-4 p-2 md:p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 text-center">
          💡 In production, this would connect to OpenAI API or similar AI service
          <br />
          <code className="text-xs">// TODO: Integrate with OpenAI API for real-time insights</code>
        </p>
      </div>
    </div>
  );
};

export default AIInsights; 