import React, { createContext, useState } from 'react';
import { Building } from '../types/common';

interface Props {
  children: React.ReactNode;
}

interface Value {
  activeBuilding: Building | null;
  setActiveBuilding: React.Dispatch<React.SetStateAction<Building | null>>;
}

const ActiveBuildingContext = createContext<Value | null>(null);

export const ActiveBuildingContextProvider = ({ children }: Props) => {
  const [activeBuilding, setActiveBuilding] = useState<Building | null>(null);

  const value = { activeBuilding, setActiveBuilding };

  return <ActiveBuildingContext.Provider value={value}>{children}</ActiveBuildingContext.Provider>;
};

export default ActiveBuildingContext;
