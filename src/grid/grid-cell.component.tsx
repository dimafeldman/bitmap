import React, { CSSProperties, FC } from 'react';
import styles from './grid.component.module.scss';
import { useGrid } from '../hooks/use-grid';

interface Props {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}

export const GridCell: FC<Props> = ({ columnIndex, rowIndex, style }) => {
  const { gridValueAtIndex } = useGrid();
  const value = gridValueAtIndex(columnIndex, rowIndex);
  const gridStyle = value ? `${styles.gridCell} ${styles.gridCellActive} grid-color-${value % 100}` : styles.gridCell;

  return <div style={style} className={gridStyle} />;
};
