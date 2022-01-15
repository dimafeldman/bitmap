import React, { FC } from 'react';
import { GridCell } from './grid-cell.component';
import { FixedSizeGrid as Grid } from 'react-window';
import './grid.component.scss';

interface Props {
  grid: number[][];
  gridSize: { x: number, y: number }
  gridWidth: number;
  gridHeight: number;
}

export const GridComponent: FC<Props> = ({ gridSize, gridWidth, gridHeight }) => {
  return (
    <div className="grid">
        <Grid
          columnCount={gridSize.x}
          rowCount={gridSize.y}
          height={gridHeight}
          width={gridWidth}
          columnWidth={15}
          rowHeight={15}
          className="grid-content"
        >
          {GridCell}
        </Grid>

    </div>
  );
};
