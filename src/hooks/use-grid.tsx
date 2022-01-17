import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
const worker = new Worker(new URL('../grid-worker.ts', import.meta.url));

interface GridData {
  grid: number[][];
  gridInProgress: boolean;
  createGrid: (gridX: number, gridY: number) => void;
  gridSize: { x: number, y: number };
  gridValueAtIndex: (x: number, y: number) => number;
}

const GridContext = createContext({} as GridData);

export const useGrid = () => useContext(GridContext);
export const GridProvider: FC = ({ children }) => {
  const [grid, setGrid] = useState([] as number[][]);
  const [gridInProgress, setGridInProgress] = useState(false);
  const [gridSize, setGridSize] = useState({ x: 0, y: 0});
  const [probability, setProbability] = useState(0.1);

  const createGrid = useCallback(
    (x, y) => {
      setGridInProgress(true);
      setGridSize({ x, y });
      worker.postMessage({ x, y, probability });
    },
    [probability],
  );

  const gridValueAtIndex = useCallback(
    (x, y) =>
      grid?.[x]?.[y] || 0
    ,
    [grid],
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
    <GridContext.Provider value={{ grid, createGrid, gridInProgress, gridSize, gridValueAtIndex }}>
      {children}
    </GridContext.Provider>
  );
};