import React, { ChangeEvent, FC } from 'react';
import './header.component.scss';

interface Props {
  gridX: number;
  gridY: number;
  islandsCount: number;
  onChangeX: (e: ChangeEvent) => void;
  onChangeY: (e: ChangeEvent) => void;
  onFaceClick: () => void;
}

export const HeaderComponent: FC<Props> = ({ gridX, gridY, islandsCount, onChangeX, onChangeY, onFaceClick }) => {
  return (
    <div className="header">
      <div className="counter-wrap">
        <label>Grid size:</label>
        <input className="counter" type="text" value={gridX} onChange={onChangeX} pattern="\d*" />
        <input className="counter" type="text" value={gridY} onChange={onChangeY} pattern="\d*" />
      </div>
      <div className="face" onClick={onFaceClick} />
      <div className="counter-wrap">
        <label>Islands:</label>
        <div className="counter">{islandsCount}</div>
      </div>
    </div>
  );
};
