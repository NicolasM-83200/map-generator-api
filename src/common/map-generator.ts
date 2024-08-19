import { Biome } from '../common/biome';
import {
  BiomeType,
  MapConfig,
} from '../common/interfaces/map-config.interface';
import { getRandomPosition, placeBiomeOnMap } from '../utils/map-utils';
import { getRandomBiomeSize } from '../utils/biome-utils';

export class MapGenerator {
  private biomes: Record<BiomeType, Biome>;

  constructor() {
    this.biomes = {
      plain: new Biome('plain'),
      desert: new Biome('desert'),
      forest: new Biome('forest'),
      ocean: new Biome('ocean'),
    };
  }

  generateMap(config: MapConfig) {
    const { width, height, availableBiome, baseBiome, numberOfBiomes } = config;
    const map: string[][] = Array.from({ length: height }, () =>
      Array(width).fill(baseBiome),
    );

    for (let i = 0; i < numberOfBiomes; i++) {
      const { x, y } = getRandomPosition(width, height);
      const biomeType =
        availableBiome[Math.floor(Math.random() * availableBiome.length)];
      const biome = this.biomes[biomeType];
      const { width: biomeWidth, height: biomeHeight } = getRandomBiomeSize();

      biome.width = biomeWidth;
      biome.height = biomeHeight;

      placeBiomeOnMap(map, biome, x, y);
    }

    return map;
  }
}
