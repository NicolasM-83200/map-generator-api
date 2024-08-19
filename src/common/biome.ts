import { getRandomBiomeSize } from '../utils/biome-utils';
import { BiomeType } from './interfaces/map-config.interface';

export class Biome {
  type: BiomeType;
  width: number;
  height: number;

  constructor(type: BiomeType) {
    const { width, height } = getRandomBiomeSize();
    this.type = type;
    this.width = width;
    this.height = height;
  }
}
