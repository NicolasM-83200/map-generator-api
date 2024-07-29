import { MapConfig } from 'src/common/interfaces/map-config.interface';

export const mapConfigMock: MapConfig = {
  availableBiome: ['plain', 'desert', 'forest', 'ocean'],
  baseBiome: 'ocean',
  numberOfBiomes: 5,
  width: 10,
  height: 10,
};
