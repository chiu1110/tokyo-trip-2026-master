
export interface Spot {
  name: string;
  infoLink: string;
  transportToNext?: string; // Information on how to get to the next spot or restaurant
}

export interface ItineraryDay {
  date: string;
  title: string;
  spots: Spot[];
  transport: string;
  restaurant: {
    name: string;
    link: string;
  };
  notes: string;
  isMarathonDay?: boolean;
  googleMapQuery?: string;
}

export interface BookingReminder {
  id: string;
  target: string;
  deadline: string; // ISO format or string
  description: string;
  priority: 'high' | 'normal';
  link?: string;
  strategy?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}

export type ViewType = 'dashboard' | 'itinerary' | 'reminders' | 'settings';
