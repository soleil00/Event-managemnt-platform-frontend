/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";
import { IBooking, IEvent, IUser } from "../constants/types";

interface AppContextProps {
  isBooking: boolean;
  setIsBooking: React.Dispatch<boolean>;
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<IUser>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<boolean>;
  selectedEvent: IEvent | null;
  setSelectedEvent: React.Dispatch<IEvent>;
  refetch: boolean;
  setRefetch: React.Dispatch<boolean>;
  currentEvent: IEvent | null;
  setCurrentEvent: React.Dispatch<IEvent>;
  bookings: IBooking[];
  setBookings: React.Dispatch<IBooking[]>;
}

const initialState = {
  isBooking: false,
  setIsBooking: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  refetch: false,
  setRefetch: () => {},
  currentEvent: null,
  setCurrentEvent: () => {},
  bookings: [],
  setBookings: () => {},
};

export const AppContext = React.createContext<AppContextProps>(initialState);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [currentEvent, setCurrentEvent] = useState<IEvent | null>(null);
  const [bookings, setBookings] = useState<IBooking[]>([]);

  return (
    <AppContext.Provider
      value={{
        isBooking,
        setIsBooking,
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        selectedEvent,
        setSelectedEvent,
        refetch,
        setRefetch,
        currentEvent,
        setCurrentEvent,
        bookings,
        setBookings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
