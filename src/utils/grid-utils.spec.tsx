import {generateGrid
} from './grid-utils';

describe('grid utils', () => {

  it('should create correct size grid', async () => {
    const grid = generateGrid(10, 10);

    expect(grid.length).toBe(10);
    expect(grid[0].length).toBe(10);
  });
})

