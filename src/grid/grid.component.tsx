import React, { FC } from 'react';
import { GridCell } from './grid-cell.component';
import './grid.component.scss';

interface Props {
  grid: number[][];
}
export const GridComponent: FC<Props> = ({ grid }) => {
  return (
    <div className="grid">
      <div className="grid-content">
        {grid.map((row, x) => {
          return (
            <div key={x} className="grid-row">
              {row.map((item: any, y: number) => {
                const cellIndex = `${x}-${y}`;

                return (
                  <GridCell
                    key={cellIndex}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>);
};
