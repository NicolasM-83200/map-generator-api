import { Injectable } from '@nestjs/common';
import { MapConfig } from 'src/common/interfaces/map-config.interface';
import { MapGenerator } from '../common/map-generator';

@Injectable()
export class MapService {
  private mapGenerator = new MapGenerator();

  generateMap(config: MapConfig) {
    return this.mapGenerator.generateMap(config);
  }
}
