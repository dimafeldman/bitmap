import React, { FC, useCallback, useEffect, useState } from 'react';
import { GridComponent } from './grid.component';
import { useGrid } from '../hooks/use-grid';
import debounce from 'lodash.debounce';

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

const calculateVisibleDimensions = ({ gridSize }: { gridSize: { x: number, y: number } }): { x: number, y: number } => {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  // UI Derived consts
  const headerHeight = innerWidth <= 480 ? 120 : 35;
  const cellWidth = 15;
  const cellHeight = 15;
  const gridContainerBorder = 4;

  const requiredWidth = gridSize.x * cellWidth + gridContainerBorder;
  const requiredHeight = gridSize.y * cellHeight + gridContainerBorder;

  return {
    x: innerWidth < requiredWidth ? innerWidth : requiredWidth + gridContainerBorder,
    y: innerHeight - headerHeight < requiredHeight ? innerHeight - headerHeight : requiredHeight,
  }
}
