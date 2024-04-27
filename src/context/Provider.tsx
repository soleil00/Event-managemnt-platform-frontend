import React, { ReactNode, useState } from "react";
import { IUser } from "../constants/types";
import { IEvent } from "../constants/events";

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
};

export const AppContext = React.createContext<AppContextProps>(initialState);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
  const [refetch, setRefetch] = useState<boolean>(false);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
