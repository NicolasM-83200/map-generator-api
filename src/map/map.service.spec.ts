import { Test, TestingModule } from '@nestjs/testing';
import { MapService } from './map.service';
import { MapConfig } from 'src/common/interfaces/map-config.interface';

describe('MapService', () => {
  let service: MapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapService],
    }).compile();

    service = module.get<MapService>(MapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateMap', () => {
    it('should generate a map with the correct dimensions', () => {
      const config: MapConfig = {
        width: 5,
        height: 5,
        availableBiome: ['forest', 'desert', 'plain', 'ocean'],
        baseBiome: 'ocean',
        numberOfBiomes: 3,
      };

      const map = service.generateMap(config);

      expect(map).toHaveLength(config.height);
      map.forEach((row) => expect(row).toHaveLength(config.width));
    });

    it('should fill the map with the baseBiome', () => {
      const config: MapConfig = {
        width: 5,
        height: 5,
        availableBiome: ['forest', 'desert', 'plain', 'ocean'],
        baseBiome: 'ocean',
        numberOfBiomes: 0,
      };

      const map = service.generateMap(config);

      map.forEach((row) =>
        row.forEach((cell) => expect(cell).toBe(config.baseBiome)),
      );
    });
  });
});
