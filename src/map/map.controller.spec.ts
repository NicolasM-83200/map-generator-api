import { Test, TestingModule } from '@nestjs/testing';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapServiceMock } from './mocks/map.service.mock';
import { MapConfig } from 'src/common/interfaces/map-config.interface';
import { mapConfigMock } from './mocks/map.config.mock';
import { mapResultMock } from './mocks/map.result.mock';

describe('MapController', () => {
  let controller: MapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapController],
      providers: [{ provide: MapService, useClass: MapServiceMock }],
    }).compile();

    controller = module.get<MapController>(MapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('generate', () => {
    it('should return an array of string in two dimensions', () => {
      const result = controller.generate(mapConfigMock);
      expect(result).toEqual(mapResultMock);
    });
  });
});
