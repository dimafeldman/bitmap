import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
const worker = new Worker(new URL('../grid-worker.ts', import.meta.url));

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
      worker.postMessage({ gridX, gridY });
    },
    [],
  );

  useEffect(() => {
    worker.onmessage = ({ data: { grid } }) => {
      setGrid(grid);
      setGridInProgress(false);
    };

    return () => {
      worker.terminate();
    };
  }, []);


  return (
    <GridContext.Provider value={{ grid, createGrid, gridInProgress }}>
      {children}
    </GridContext.Provider>
  );
};
