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
        <input className="counter" type="number" value={gridX} onChange={onChangeX} />
        <input className="counter" type="number" value={gridY} onChange={onChangeY} />
      </div>
      <div className="face" onClick={onFaceClick} />
      <div className="counter-wrap">
        <label>Islands:</label>
        <div className="counter">{islandsCount}</div>
      </div>
    </div>
  );
};