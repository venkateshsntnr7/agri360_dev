import React from 'react';
import { Newspaper, Layout, Target, MessageSquare, LogIn } from 'lucide-react';

interface NavigationProps {
  onFeaturesClick: () => void;
  onMissionClick: () => void;
  onNewsClick: () => void;
  onEnquiryClick: () => void;
  onAuthClick: () => void;
}

export function Navigation({ 
  onFeaturesClick, 
  onMissionClick, 
  onNewsClick, 
  onEnquiryClick,
  onAuthClick 
}: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <div className="flex gap-8">
            <button
              onClick={onFeaturesClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <Layout className="w-4 h-4" />
              Features
            </button>
            <button
              onClick={onMissionClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <Target className="w-4 h-4" />
              Mission & Vision
            </button>
            <button
              onClick={onNewsClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              News
            </button>
            <button
              onClick={onEnquiryClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </button>
            <button
              onClick={onAuthClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}