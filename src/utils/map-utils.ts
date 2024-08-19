import { Biome } from '../common/biome';

export function getRandomPosition(width: number, height: number) {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
}

export function placeBiomeOnMap(
  map: string[][],
  biome: Biome,
  x: number,
  y: number,
) {
  const { width: biomeWidth, height: biomeHeight } = biome;
  const width = map[0].length;
  const height = map.length;

  for (let dx = 0; dx < biomeWidth; dx++) {
    for (let dy = 0; dy < biomeHeight; dy++) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < width && ny < height) {
        map[ny][nx] = biome.type;
      }
    }
  }
}
