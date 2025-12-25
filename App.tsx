
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ItineraryList from './components/ItineraryList';
import DayDetail from './components/DayDetail';
import Reminders from './components/Reminders';
import { ViewType, ItineraryDay } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [selectedDay, setSelectedDay] = useState<ItineraryDay | null>(null);

  const handleSelectDay = (day: ItineraryDay) => {
    setSelectedDay(day);
  };

  const handleBackToItinerary = () => {
    setSelectedDay(null);
  };

  const renderContent = () => {
    if (selectedDay) {
      return <DayDetail day={selectedDay} onBack={handleBackToItinerary} />;
    }

    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'itinerary':
        return <ItineraryList onSelectDay={handleSelectDay} />;
      case 'reminders':
        return <Reminders />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={(view) => {
      setSelectedDay(null); // Reset detail view when changing tabs
      setActiveView(view);
    }}>
      {renderContent()}
    </Layout>
  );
};

export default App;
