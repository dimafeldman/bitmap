import React, { ChangeEvent, FC } from 'react';
import styles from './header.component.module.scss';

interface Props {
  gridX: number;
  gridY: number;
  islandsCount: number;
  onChangeX: (e: ChangeEvent) => void;
  onChangeY: (e: ChangeEvent) => void;
  onFaceClick: () => void;
  gridInProgress: boolean;
}

export const HeaderComponent: FC<Props> = ({ gridX, gridY, islandsCount, onChangeX, onChangeY, onFaceClick, gridInProgress }) => {
  const faceStyle = gridInProgress ? `${styles.face} ${styles.faceInProgress}` : styles.face;
  return (
    <div className={styles.header}>
      <div className={styles.counterWrap}>
        <label>Grid size:</label>
        <input className={styles.counter} type="text" value={gridX} onChange={onChangeX} pattern="\d*" disabled={gridInProgress} />
        <input className={styles.counter} type="text" value={gridY} onChange={onChangeY} pattern="\d*" disabled={gridInProgress} />
      </div>
      <div className={faceStyle} onClick={onFaceClick} />
      <div className={styles.counterWrap}>
        <label>Islands:</label>
        <div className={styles.counter}>{gridInProgress ? '...' : islandsCount}</div>
      </div>
    </div>
  );
};
