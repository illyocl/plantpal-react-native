import React, { createContext, useContext, useState } from 'react';

export type Plant = {
  name: string;
  type: string;
  size: 'küçük' | 'orta' | 'büyük';
  addedDate: Date;
};

type MyPlantsContextType = {
  plants: Plant[];
  addPlant: (plant: Plant) => void;
};

const MyPlantsContext = createContext<MyPlantsContextType | undefined>(undefined);

export const MyPlantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [plants, setPlants] = useState<Plant[]>([]);

  const addPlant = (plant: Plant) => {
    setPlants((prev) => [...prev, plant]);
  };

  return (
    <MyPlantsContext.Provider value={{ plants, addPlant }}>
      {children}
    </MyPlantsContext.Provider>
  );
};

export const useMyPlants = () => {
  const context = useContext(MyPlantsContext);
  if (!context) throw new Error("useMyPlants must be used within MyPlantsProvider");
  return context;
};
