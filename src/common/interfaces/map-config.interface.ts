export interface MapConfig {
  availableBiome: BiomeType[];
  baseBiome: BiomeType;
  numberOfBiomes: number;
  width: number;
  height: number;
}

export type BiomeType = 'plain' | 'desert' | 'forest' | 'ocean';
