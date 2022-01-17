import React, { ChangeEvent, FC } from 'react';
import styles from './header.component.module.scss';

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
    <div className={styles.header}>
      <div className={styles.counterWrap}>
        <label>Grid size:</label>
        <input className={styles.counter} type="text" value={gridX} onChange={onChangeX} pattern="\d*" />
        <input className={styles.counter} type="text" value={gridY} onChange={onChangeY} pattern="\d*" />
      </div>
      <div className={styles.face} onClick={onFaceClick} />
      <div className={styles.counterWrap}>
        <label>Islands:</label>
        <div className={styles.counter}>{islandsCount}</div>
      </div>
    </div>
  );
};
