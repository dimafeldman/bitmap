import React, { FC } from 'react';
import './root.component.scss';
import { Header } from './header';
import { Grid } from './grid';
import { GridProvider } from './hooks/use-grid';

const Root: FC = () => {
  return (
    <GridProvider>
      <div className="root">
        <Header />
        <Grid />
      </div>
    </GridProvider>
  );
}

export default Root;
