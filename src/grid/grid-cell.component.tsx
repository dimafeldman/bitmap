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
  const gridStyle = gridValueAtIndex(columnIndex, rowIndex) ? `${styles.gridCell} ${styles.gridCellActive}` : styles.gridCell;

  return <div style={style} className={gridStyle} />;
};
