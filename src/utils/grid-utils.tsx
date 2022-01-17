function getWindowDimensions(): {
  innerWidth: number,
  innerHeight: number,
  headerHeight: number,
  cellWidth: number,
  cellHeight: number,
  gridContainerBorder: number,
} {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    headerHeight: window.innerWidth <= 480 ? 120 : 35,
    cellWidth: 15,
    cellHeight: 15,
    gridContainerBorder: 4,
  };
}

export function generateGrid(gridX: number, gridY: number, probability: number): number[][] {
  const gridItems: number[][] = [];

  for (let i = 0; i < gridX; i++) {
    gridItems[i] = [];
    for (let j = 0; j < gridY; j++) {
      gridItems[i][j] = Math.random() < probability ? 1 : 0;
    }
  }

  return gridItems;
}

export function calculateVisibleDimensions({ gridSize }: { gridSize: { x: number, y: number } }): { x: number, y: number } {
  const { innerWidth, innerHeight, headerHeight, cellHeight, cellWidth, gridContainerBorder } = getWindowDimensions();
  const requiredWidth = gridSize.x * cellWidth + gridContainerBorder;
  const requiredHeight = gridSize.y * cellHeight + gridContainerBorder;

  return {
    x: innerWidth < requiredWidth ? innerWidth : requiredWidth + gridContainerBorder,
    y: innerHeight - headerHeight < requiredHeight ? innerHeight - headerHeight : requiredHeight,
  };
}


export function getGridSizeToFitScreen(): { x: number, y: number } {
  const { innerWidth, innerHeight, headerHeight, cellWidth } = getWindowDimensions();
  return { x: Math.floor(innerWidth / cellWidth), y: Math.floor((innerHeight - headerHeight) / cellWidth) };
}

