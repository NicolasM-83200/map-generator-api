import { MapConfig } from 'src/common/interfaces/map-config.interface';
import { mapResultMock } from './map.result.mock';

export class MapServiceMock {
  generate = jest.fn().mockImplementation((config: MapConfig) => {
    return Promise.resolve(mapResultMock);
  });
}
