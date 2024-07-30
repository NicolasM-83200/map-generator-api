import { Test, TestingModule } from '@nestjs/testing';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapServiceMock } from './mocks/map.service.mock';
import { MapConfig } from 'src/common/interfaces/map-config.interface';

describe('MapController', () => {
  let controller: MapController;
  let service: MapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapController],
      providers: [
        {
          provide: MapService,
          useClass: MapServiceMock,
        },
      ],
    }).compile();

    controller = module.get<MapController>(MapController);
    service = module.get<MapService>(MapService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should generate a map and return it', () => {
    const config: MapConfig = {
      availableBiome: ['plain', 'desert', 'forest', 'ocean'],
      baseBiome: 'plain',
      numberOfBiomes: 10,
      width: 10,
      height: 10,
    };

    const result = controller.generate(config);

    expect(service.generateMap).toHaveBeenCalledWith(config);
    expect(result).toEqual('mockedMap');
  });
});
