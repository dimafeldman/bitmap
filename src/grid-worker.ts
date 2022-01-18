import { countIslands, generateGrid } from './utils';

// eslint-disable-next-line no-restricted-globals
self.onmessage = ({ data: { x, y, probability } }) => {
  const grid = generateGrid(x, y, probability);
  const count = countIslands(grid);
  // eslint-disable-next-line no-restricted-globals
  self.postMessage({
    grid,
    count
  });
};

export {}
