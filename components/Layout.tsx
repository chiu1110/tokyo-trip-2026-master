
import React from 'react';
import { ViewType } from '../types';

interface LayoutProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeView, setActiveView, children }) => {
  const navItems: { type: ViewType; label: string; icon: string }[] = [
    { type: 'dashboard', label: '總覽', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { type: 'itinerary', label: '行程', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { type: 'reminders', label: '提醒', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-md shrink-0">
        <h1 className="text-xl font-bold tracking-tight">東京之旅</h1>
        <p className="text-sm opacity-80">2026 年冬季</p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 flex justify-around items-center h-20 px-4 z-50">
        {navItems.map((item) => (
          <button
            key={item.type}
            onClick={() => setActiveView(item.type)}
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
              activeView === item.type ? 'text-blue-600 scale-110' : 'text-slate-400'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
