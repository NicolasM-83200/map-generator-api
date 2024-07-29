import { Body, Controller, Get, Post } from '@nestjs/common';
import { MapService } from './map.service';
import { MapConfig } from 'src/common/interfaces/map-config.interface';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post('generate')
  generate(@Body() config: MapConfig) {
    return this.mapService.generateMap(config);
  }
}
