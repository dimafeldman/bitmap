import React, { FC } from 'react';
import { GridComponent } from './grid.component';
import { useGrid } from '../hooks/use-grid';

interface Props {}
export const Grid: FC<Props> = () => {
  const { grid } = useGrid();

  return <GridComponent grid={grid} />;
};
