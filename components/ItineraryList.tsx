
import React from 'react';
import { ITINERARY } from '../constants';
import { ItineraryDay } from '../types';

interface Props {
  onSelectDay: (day: ItineraryDay) => void;
}

const ItineraryList: React.FC<Props> = ({ onSelectDay }) => {
  return (
    <div className="p-4 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">2026 行程總覽</h2>
        <span className="text-xs text-slate-500 font-medium">共 {ITINERARY.length} 天</span>
      </div>

      {ITINERARY.map((day, idx) => (
        <div
          key={day.date}
          onClick={() => onSelectDay(day)}
          className="relative group cursor-pointer"
        >
          {/* Timeline indicator */}
          <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-slate-200 group-last:bottom-1/2"></div>
          <div className="absolute -left-2 top-6 w-3 h-3 rounded-full border-2 border-slate-200 bg-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300"></div>

          <div className="ml-6 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all active:scale-[0.98]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-blue-600 font-black text-xs tracking-widest">{day.date.split('-').slice(1).join('/')}</span>
              {day.isMarathonDay && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                  馬拉松管制 ⚠️
                </span>
              )}
            </div>
            <h3 className="font-bold text-slate-800 text-base mb-2">{day.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {day.spots.slice(0, 3).map(spot => (
                <span key={spot.name} className="bg-slate-50 text-slate-500 text-[10px] px-2 py-1 rounded border border-slate-100 uppercase tracking-tight">
                  {spot.name}
                </span>
              ))}
              {day.spots.length > 3 && <span className="text-slate-400 text-[10px] py-1 font-medium">+{day.spots.length - 3} 更多</span>}
            </div>
            <div className="mt-3 flex items-center text-xs text-slate-400">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span className="truncate">{day.notes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItineraryList;
