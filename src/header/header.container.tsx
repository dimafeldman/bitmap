import React, { FC, useCallback, useEffect,  useState } from 'react';
import { HeaderComponent } from './header.component';
import { useGrid } from '../hooks/use-grid';

interface Props {}
export const Header: FC<Props> = () => {
  const islandsCount = 10;
  const { createGrid, gridSize } = useGrid();
  const [gridX, setGridX] = useState(gridSize.x);
  const [gridY, setGridY] = useState(gridSize.y);

  const handleChangeX = useCallback((e) => {
    const sanitized = sanitizeInput(e.target.value);
    if (sanitized) {
      setGridX(sanitized);
    }
  }, [setGridX]);

  const handleChangeY = useCallback((e) => {
    const sanitized = sanitizeInput(e.target.value);
    if (sanitized) {
      setGridY(sanitized);
    }
  }, [setGridY]);

  const handleFaceClick = useCallback(
    () => {
      createGrid(gridX, gridY);
    },
    [createGrid, gridX, gridY],
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
    />
  );
};

const sanitizeInput = (input: string): number | undefined => {
  const parsedInput = parseInt(input);

  if (parsedInput > 0 && !isNaN(parsedInput)) {
    return parsedInput;
  }
};
