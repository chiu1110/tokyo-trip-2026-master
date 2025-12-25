
import React, { useState, useEffect } from 'react';
import { HOTEL_INFO, DEFAULT_CHECKLIST, ITINERARY } from '../constants';
import { ChecklistItem } from '../types';

const Dashboard: React.FC = () => {
  const [temp, setTemp] = useState(7); // Simulated temp for Tokyo
  const [checklist, setChecklist] = useState<ChecklistItem[]>(DEFAULT_CHECKLIST);
  const [daysToTrip, setDaysToTrip] = useState<number>(0);

  useEffect(() => {
    // Calculate days until trip (Feb 28, 2026)
    const calculateCountdown = () => {
      const tripDate = new Date('2026-02-28').getTime();
      const now = new Date().getTime();
      const diff = tripDate - now;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysToTrip(days);
    };
    calculateCountdown();
  }, []);

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const getGoogleMapsUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-500">
      {/* Trip Countdown & Weather Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Countdown Widget */}
        <section className="bg-indigo-600 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden">
          <div className="absolute -right-2 -bottom-2 opacity-10">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </div>
          <h2 className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">距離出發</h2>
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-black">{daysToTrip > 0 ? daysToTrip : 0}</span>
            <span className="text-xs font-bold opacity-80">天</span>
          </div>
          <p className="text-[9px] mt-2 font-medium opacity-70">2026/02/28 出發</p>
        </section>

        {/* Weather Widget */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
          <h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">東京天氣</h2>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-slate-800">{temp}°C</span>
            <div className="text-blue-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6.5 20Q4.22 20 2.61 18.39 1 16.77 1 14.5 1 12.55 2.2 11.03 3.4 9.5 5.35 9.1 6.08 6.15 8.56 4.08 11.05 2 14 2 17.05 2 19.16 4.04 21.28 6.09 21.47 9.13 22.88 10.45 23.44 12.3 24 14.15 24 16.5 24 19.63 21.82 21.82 19.63 24 16.5 24H6.5Z" /></svg>
            </div>
          </div>
        </section>
      </div>

      {temp <= 8 && (
        <div className="p-3 bg-blue-50 text-blue-700 text-xs rounded-xl border border-blue-100 flex items-start space-x-2">
          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="font-medium leading-tight">天氣寒冷（低於 8°C），請務必穿戴足夠的保暖衣物！</span>
        </div>
      )}

      {/* Quick Links */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 ml-1">快速導航</h3>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={getGoogleMapsUrl("幕張豐砂站")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-2 active:scale-95 transition-transform"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-slate-700">幕張豐砂站</span>
          </a>
          <a
            href={getGoogleMapsUrl("Shibuya Scramble Square")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-2 active:scale-95 transition-transform"
          >
            <div className="bg-orange-100 p-2 rounded-full text-orange-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-slate-700">澀谷 SKY</span>
          </a>
          <a
            href={getGoogleMapsUrl(HOTEL_INFO.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-2 active:scale-95 transition-transform col-span-2 group"
          >
             <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <span className="text-xs font-bold text-slate-700">返回飯店基地 (大塚)</span>
          </a>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
          <span>行前檢查</span>
        </h3>
        <div className="space-y-3">
          {checklist.map(item => (
            <div key={item.id} onClick={() => toggleCheck(item.id)} className="flex items-center group cursor-pointer">
              <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${item.completed ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`}>
                {item.completed && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
              </div>
              <span className={`ml-3 text-sm font-medium transition-all ${item.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Shibuya Sky Module */}
      <section className="bg-slate-900 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="flex justify-between items-start relative z-10">
          <h3 className="font-bold text-lg tracking-tight">SHIBUYA SKY 注意事項</h3>
          <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase">必看</span>
        </div>
        <div className="mt-3 space-y-1 relative z-10">
          <p className="text-slate-400 text-xs">嚴格禁止：</p>
          <p className="text-slate-100 text-xs font-medium">• 任何形式的帽子、圍巾</p>
          <p className="text-slate-100 text-xs font-medium">• 三腳架、自拍棒、專業攝錄影器材</p>
        </div>
        <div className="mt-5 relative z-10">
          <a
            href="https://www.shibuya-scramble-square.com/sky/ticket/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-white text-slate-900 py-3 rounded-xl text-sm font-black shadow-lg active:scale-95 transition-transform"
          >
            開啟官方預約頁面
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
