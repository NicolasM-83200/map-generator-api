import { Injectable } from '@nestjs/common';
import { MapConfig } from 'src/common/interfaces/map-config.interface';

@Injectable()
export class MapService {
  // Fonction de génération de la carte
  generateMap(config: MapConfig) {
    // Desctructuring de l'objet config
    const { width, height, availableBiome, baseBiome, numberOfBiomes } = config;
    // Création de la matrice de base remplie avec le 'baseBiome'
    const map: string[][] = Array.from({ length: height }, () =>
      Array(width).fill(baseBiome),
    );

    // Fonction utilitaire pour obtenir une position aleatoire
    const getRandomPosition = () => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    });

    // Génération des biomes de tailles variables
    for (let i = 0; i < numberOfBiomes; i++) {
      const { x, y } = getRandomPosition();
      const biome =
        availableBiome[Math.floor(Math.random() * availableBiome.length)];
      const biomeWidth = Math.floor(Math.random() * 3) + 2;
      const biomeHeight = Math.floor(Math.random() * 3) + 2;

      // Placement du biome sur la carte
      for (let dx = 0; dx < biomeWidth; dx++) {
        for (let dy = 0; dy < biomeHeight; dy++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < width && ny < height) {
            map[ny][nx] = biome;
          }
        }
      }
    }
    return map;
  }
}
