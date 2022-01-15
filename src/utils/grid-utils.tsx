export function generateGrid(gridX: number, gridY: number): number[][] {
  const gridItems: number[][] = [];
  const col = new Array(gridX).fill(0);

  for (let i = 0; i < gridY; i++) {
    gridItems[i] = col.slice();
  }

  return gridItems;
}



