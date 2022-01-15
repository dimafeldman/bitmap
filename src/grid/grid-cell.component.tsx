import React, { CSSProperties, FC } from 'react';

interface Props {
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
}
export const GridCell: FC<Props> = ({ style}) => {
  return <div style={style} className="grid-cell" />;
};
