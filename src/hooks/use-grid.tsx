import React, { createContext, FC, useCallback, useContext, useState } from 'react';
import { generateGrid } from '../utils';

interface GridData {
  grid: number[][];
  gridInProgress: boolean;
  createGrid: (gridX: number, gridY: number) => void;
}

const GridContext = createContext({} as GridData);

export const useGrid = () => useContext(GridContext);
export const GridProvider: FC = ({ children }) => {
  const [grid, setGrid] = useState([] as number[][]);
  const [gridInProgress, setGridInProgress] = useState(false);

  const createGrid = useCallback(
    (gridX, gridY) => {
      setGridInProgress(true);
      setGrid(generateGrid(gridX, gridY))
      setGridInProgress(false);
    },
    [],
  );

  return (
    <GridContext.Provider value={{ grid, createGrid, gridInProgress }}>
      {children}
    </GridContext.Provider>
  );
};
