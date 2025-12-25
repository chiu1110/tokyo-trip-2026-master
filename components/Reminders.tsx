
import React, { useState, useEffect } from 'react';
import { REMINDERS } from '../constants';

const Reminders: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const updatedTime: { [key: string]: string } = {};

      REMINDERS.forEach(rem => {
        const target = new Date(rem.deadline).getTime();
        const diff = target - now;

        if (diff < 0) {
          updatedTime[rem.id] = "已截止";
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          
          if (days > 0) {
            updatedTime[rem.id] = `${days}天 ${hours}時`;
          } else {
            updatedTime[rem.id] = `${hours}時 ${minutes}分`;
          }
        }
      });
      setTimeLeft(updatedTime);
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col space-y-1">
        <h2 className="text-lg font-bold text-slate-800">搶票預約提醒</h2>
        <p className="text-xs text-slate-400">系統將在指定時間推送，請務必準時</p>
      </div>

      <div className="space-y-6">
        {REMINDERS.map(rem => (
          <div
            key={rem.id}
            className={`bg-white rounded-3xl p-6 shadow-sm border transition-all ${
              rem.priority === 'high' ? 'border-red-100 ring-4 ring-red-50' : 'border-slate-100'
            }`}
          >
            {/* Header Area */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-black text-slate-800 text-lg leading-tight">{rem.target}</h3>
                <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-widest">{rem.description}</p>
              </div>
              <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest ${
                rem.priority === 'high' ? 'bg-red-500 text-white shadow-md shadow-red-100' : 'bg-slate-100 text-slate-500'
              }`}>
                {rem.priority === 'high' ? 'Critical' : 'Normal'}
              </span>
            </div>

            {/* Strategy Box */}
            {rem.strategy && (
              <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-100">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">搶票詳細攻略</span>
                </div>
                <div className="text-slate-600 text-[11px] leading-relaxed whitespace-pre-line font-medium">
                  {rem.strategy}
                </div>
              </div>
            )}

            {/* Action Area */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">DEADLINE</span>
                <span className="text-sm font-bold text-slate-700">{rem.deadline}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 px-3 py-1.5 rounded-xl flex flex-col items-end">
                  <span className="text-[8px] text-blue-400 uppercase font-black">Time Left</span>
                  <span className={`text-xs font-black ${timeLeft[rem.id] === '已截止' ? 'text-slate-300' : 'text-blue-600'}`}>
                    {timeLeft[rem.id]}
                  </span>
                </div>
                
                {rem.link && (
                  <a
                    href={rem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 active:scale-90 transition-transform"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden mt-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-amber-400 p-1.5 rounded-lg">
            <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,14Z"/></svg>
          </div>
          <span className="font-black text-sm uppercase tracking-widest">重要提示</span>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed font-medium">
          熱門票券（如 SHIBUYA SKY 夕陽場）開賣即秒殺。請務必在截止時間前 10 分鐘進入網站登錄會員，並建議使用電腦搭配手機多線操作。
        </p>
      </div>
    </div>
  );
};

export default Reminders;
