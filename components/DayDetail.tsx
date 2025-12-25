
import React from 'react';
import { ItineraryDay } from '../types';
import { HOTEL_INFO } from '../constants';

interface Props {
  day: ItineraryDay;
  onBack: () => void;
}

const DayDetail: React.FC<Props> = ({ day, onBack }) => {
  const getSearchUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  
  const getRouteUrl = (origin: string, dest: string) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}&travelmode=transit`;
  };

  const firstSpot = day.spots[0]?.name;
  const lastSpot = day.spots[day.spots.length - 1]?.name;

  return (
    <div className="animate-in slide-in-from-right-4 duration-300 pb-10">
      {/* Detail Header */}
      <div className="relative h-56 bg-slate-900 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${day.title}/800/600`}
          alt={day.title}
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white active:scale-90 transition-transform z-10 border border-white/30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-1">{day.date}</p>
          <h2 className="text-white text-3xl font-black truncate">{day.title}</h2>
        </div>
      </div>

      <div className="p-6 space-y-8 -mt-4 relative z-20">
        {/* Important Alerts */}
        {day.isMarathonDay && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-2xl shadow-sm flex items-start space-x-3">
            <div className="bg-red-100 p-2 rounded-full shrink-0">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-red-800 text-sm">2026-03-01 馬拉松大交管</h4>
              <p className="text-red-700 text-xs mt-1 leading-relaxed">當日市中心大規模管制。強烈建議留在幕張區域活動，避免進入都心受阻。</p>
            </div>
          </div>
        )}

        {/* Dynamic Route Shortcuts */}
        <section className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center px-1">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.492V4.508a2 2 0 011.553-1.944L9 1l6 3 5.447-2.724A2 2 0 0121 3.224v10.984a2 2 0 01-1.553 1.944L15 23l-6-3z"/></svg>
            本日交通大綱
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {day.date === "2026-02-28" && (
              <a href={getRouteUrl("成田國際機場", HOTEL_INFO.name)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-2xl shadow-md active:scale-95 transition-transform">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-bold">路線：機場 ➔ 飯店基地</span>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            )}

            {day.date !== "2026-02-28" && day.date !== "2026-03-09" && (
              <>
                <a href={getRouteUrl(HOTEL_INFO.name, firstSpot)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-95 transition-transform">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <div className="bg-blue-50 p-1.5 rounded-lg"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div>
                    <span className="text-xs font-bold">出發：飯店 ➔ {firstSpot}</span>
                  </div>
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
                <a href={getRouteUrl(lastSpot, day.restaurant.name)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-95 transition-transform">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <div className="bg-orange-50 p-1.5 rounded-lg"><svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 01-3 0 2.701 2.701 0 01-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z"/></svg></div>
                    <span className="text-xs font-bold">餐廳：{lastSpot} ➔ {day.restaurant.name}</span>
                  </div>
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
              </>
            )}

            {day.date === "2026-03-09" && (
              <a href={getRouteUrl(HOTEL_INFO.name, "成田國際機場")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800 text-white rounded-2xl shadow-md active:scale-95 transition-transform">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  <span className="text-sm font-bold">歸途：飯店 ➔ 機場</span>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            )}
          </div>
        </section>

        {/* Detailed Spots List with inter-spot transport */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h4 className="font-bold text-slate-800 text-base">景點間交通明細</h4>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tap Icons for Maps</span>
          </div>
          <div className="space-y-4">
            {day.spots.map((spot, index) => (
              <div key={spot.name} className="relative group">
                {/* Visual Connector */}
                {index < day.spots.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-[-16px] w-0.5 bg-slate-100 z-0 flex flex-col justify-center items-center">
                    <div className="bg-white p-1 rounded-full border border-slate-100">
                       <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7"/></svg>
                    </div>
                  </div>
                )}
                
                <div className="relative z-10 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400 text-sm border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800">{spot.name}</h5>
                        <p className="text-[10px] text-slate-400 font-medium">景點詳情與搜索</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <a
                        href={spot.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </a>
                      <a
                        href={getSearchUrl(spot.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </a>
                    </div>
                  </div>
                  {/* Transition Info */}
                  {spot.transportToNext && (
                    <div className="mt-2 ml-14 p-2 bg-slate-50 rounded-lg text-[11px] text-slate-500 font-medium flex items-center">
                      <svg className="w-3 h-3 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
                      {spot.transportToNext}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurant Section */}
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-800 text-sm flex items-center">
              <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              美食推薦 (地圖連結)
            </h4>
            <a href={getSearchUrl(day.restaurant.name)} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-orange-500 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </a>
          </div>
          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <div>
              <span className="text-slate-800 text-base font-black">{day.restaurant.name}</span>
              <p className="text-[10px] text-orange-600 font-bold mt-1">本日推薦之選</p>
            </div>
            <a
              href={day.restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-xl text-xs font-black active:scale-95 transition-transform shadow-md shadow-orange-100"
            >
              官網/預約
            </a>
          </div>
        </section>

        {/* Notes & Extra Context */}
        <section className="bg-slate-50 p-5 rounded-3xl border border-dashed border-slate-200">
          <h4 className="font-bold text-slate-800 text-xs mb-3 flex items-center uppercase tracking-widest">
            <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            每日必讀
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-1">主要交通工具</p>
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{day.transport}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-1">特別提醒</p>
              <p className="text-slate-500 text-sm italic leading-relaxed">{day.notes}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DayDetail;
