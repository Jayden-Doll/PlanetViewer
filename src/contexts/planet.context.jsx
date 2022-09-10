import { createContext, useState } from "react";

export const PlanetContext = createContext({
  planetAccent: null,
  setPlanetAccent: () => null,
});

export const PlanetProvider = ({ children }) => {
  const [planetAccent, setPlanetAccent] = useState(null);
  const value = { planetAccent, setPlanetAccent };

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};
