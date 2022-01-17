import React, { FC, useEffect, useState } from 'react';
import { GridComponent } from './grid.component';
import { useGrid } from '../hooks/use-grid';
import debounce from 'lodash.debounce';
import { calculateVisibleDimensions } from '../utils';

interface Props {}
export const Grid: FC<Props> = () => {
  const { grid, gridSize } = useGrid();
  const [visibleDimensions, setVisualDimensions] = useState(calculateVisibleDimensions({ gridSize }));
  const handleResize = debounce(() => setVisualDimensions(calculateVisibleDimensions({ gridSize })), 300);

  useEffect(() => {
    handleResize()
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);


  return <GridComponent grid={grid} gridSize={gridSize} gridWidth={visibleDimensions.x} gridHeight={visibleDimensions.y} />;
};


