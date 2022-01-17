import React, { CSSProperties, FC } from 'react';
import styles from './grid.component.module.scss';

interface Props {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}
export const GridCell: FC<Props> = ({ style}) => {
  return <div style={style} className={styles.gridCell} />;
};
