import React, { ReactNode, useState } from "react";

interface AppContextProps {
  isBooking: boolean;
  setIsBooking: React.Dispatch<boolean>;
}

const initialState = {
  isBooking: false,
  setIsBooking: () => {},
};

export const AppContext = React.createContext<AppContextProps>(initialState);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBooking, setIsBooking] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isBooking, setIsBooking }}>
      {children}
    </AppContext.Provider>
  );
};
