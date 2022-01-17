export function generateGrid(gridX: number, gridY: number, probability: number): number[][] {
  const gridItems: number[][] = [];

  for (let i = 0; i < gridY; i++) {
    gridItems[i] = [];
    for (let j = 0; j < gridX; j++) {
      gridItems[i][j] = Math.random() < probability ? 1 : 0
    }
  }

  return gridItems;
}



