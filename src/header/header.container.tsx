import React, { FC, useCallback, useEffect,  useState } from 'react';
import { HeaderComponent } from './header.component';
import { useGrid } from '../hooks/use-grid';

interface Props {}
export const Header: FC<Props> = () => {
  const { createGrid, gridSize, gridInProgress, islandsCount } = useGrid();
  const [gridX, setGridX] = useState(gridSize.x);
  const [gridY, setGridY] = useState(gridSize.y);

  const handleChangeX = useCallback((e) => {
    const sanitized = sanitizeInput(e.target.value);
    if (sanitized && !gridInProgress) {
      setGridX(sanitized);
    }
  }, [setGridX, gridInProgress]);

  const handleChangeY = useCallback((e) => {
    const sanitized = sanitizeInput(e.target.value);
    if (sanitized && !gridInProgress) {
      setGridY(sanitized);
    }
  }, [setGridY, gridInProgress]);

  const handleFaceClick = useCallback(
    () => {
      if (!gridInProgress) {
        createGrid(gridX, gridY);
      }
    },
    [createGrid, gridInProgress, gridX, gridY],
  );

  useEffect(() => {
    createGrid(gridX, gridY);
  }, []);

  return (
    <HeaderComponent
      gridX={gridX}
      gridY={gridY}
      islandsCount={islandsCount}
      onChangeX={handleChangeX}
      onChangeY={handleChangeY}
      onFaceClick={handleFaceClick}
      gridInProgress={gridInProgress}
    />
  );
};

const sanitizeInput = (input: string): number | undefined => {
  const parsedInput = parseInt(input);

  if (parsedInput > 0 && !isNaN(parsedInput)) {
    return parsedInput;
  }
};
