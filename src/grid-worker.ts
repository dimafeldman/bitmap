import { generateGrid } from './utils';

// eslint-disable-next-line no-restricted-globals
self.onmessage = ({ data: { x, y } }) => {
  const grid = generateGrid(x, y);

  // eslint-disable-next-line no-restricted-globals
  self.postMessage({
    grid,
  });
};

export {}
