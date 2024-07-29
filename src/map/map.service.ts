import { Injectable } from '@nestjs/common';
import { MapConfig } from 'src/common/interfaces/map-config.interface';

@Injectable()
export class MapService {
  generateMap(config: MapConfig) {
    const { width, height, availableBiome, baseBiome, numberOfBiomes } = config;
    const map: string[][] = Array.from({ length: height }, () =>
      Array(width).fill(baseBiome),
    );

    for (let i = 0; i < numberOfBiomes; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      const biome =
        availableBiome[Math.floor(Math.random() * availableBiome.length)];

      map[y][x] = biome;
    }
    return map;
  }
}
