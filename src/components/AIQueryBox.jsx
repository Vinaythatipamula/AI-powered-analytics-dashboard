import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const AIQueryBox = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI assistant. Ask me anything about your analytics data, and I\'ll help you understand the insights.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock AI responses based on common queries
  const getMockAIResponse = (userQuery) => {
    const queryLower = userQuery.toLowerCase();
    
    if (queryLower.includes('revenue') || queryLower.includes('sales')) {
      return "Your revenue has increased by 12.5% this month compared to last month. The Electronics category is driving most of this growth with a 23% increase in sales. I recommend focusing your marketing efforts on this category.";
    } else if (queryLower.includes('user') || queryLower.includes('customer')) {
      return "You currently have 2,847 active users, which is an 8.2% increase from last month. The majority of new users are coming from social media channels. Your user retention rate is 67%, which is above industry average.";
    } else if (queryLower.includes('conversion') || queryLower.includes('rate')) {
      return "Your conversion rate is 3.24%, which is a 2.1% improvement from last month. The highest converting traffic source is direct visits (4.1%), followed by organic search (3.8%). Consider optimizing your landing pages for better conversion.";
    } else if (queryLower.includes('trend') || queryLower.includes('pattern')) {
      return "I've identified several key trends: 1) Mobile traffic is growing 15% month-over-month, 2) Evening hours (6-9 PM) show 40% higher engagement, 3) Video content has 3x higher conversion rates than text content.";
    } else {
      return "I understand you're asking about '" + userQuery + "'. Based on your current data, I can see some interesting patterns. Would you like me to dive deeper into any specific aspect of your analytics?";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: getMockAIResponse(query),
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-3 md:mb-4">
        <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Ask AI Assistant</h3>
      </div>

      {/* Messages */}
      <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 max-h-48 md:max-h-64 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-1 md:space-x-2 max-w-[85%] ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-2.5 w-2.5 md:h-3 md:w-3" />
                ) : (
                  <Bot className="h-2.5 w-2.5 md:h-3 md:w-3" />
                )}
              </div>
              <div
                className={`px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm ${
                  message.type === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="break-words">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-1 md:space-x-2">
              <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <Bot className="h-2.5 w-2.5 md:h-3 md:w-3" />
              </div>
              <div className="px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-100 text-gray-900">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about your analytics..."
          className="input-field flex-1 text-xs md:text-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-2 md:px-4"
        >
          <Send className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      </form>

      {/* Placeholder for real AI API integration */}
      <div className="mt-3 md:mt-4 p-2 md:p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-500 text-center">
          🤖 In production, this would connect to OpenAI API or similar AI service
          <br />
          <code className="text-xs">// TODO: Integrate with OpenAI API for real-time responses</code>
        </p>
      </div>
    </div>
  );
};

export default AIQueryBox; 