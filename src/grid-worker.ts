import { generateGrid } from './utils';

// eslint-disable-next-line no-restricted-globals
self.onmessage = ({ data: { gridX, gridY } }) => {
  const grid = generateGrid(gridX, gridY);

  // eslint-disable-next-line no-restricted-globals
  self.postMessage({
    grid,
  });
};

export {}
