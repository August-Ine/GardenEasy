import { LawnService } from 'src/app/models/lawn-service.model';

export const lawnServices: LawnService[] = [
  new LawnService(
    'assets/images/garden-watering-cropped.jpg',
    'Planting and garden bed maintenance',
    0,
    3
  ),
  new LawnService(
    'assets/images/lawn-house-cropped.jpg',
    'Landscape design and installation',
    1,
    3
  ),
  new LawnService(
    'assets/images/lawn-mower-cropped.jpg',
    'Lawn maintenance and care',
    2,
    3
  ),
  new LawnService(
    'assets/images/sprinkler-cropped.jpg',
    'Irrigation and watering solutions',
    3,
    5
  ),
  new LawnService(
    'assets/images/tractor-tree-cropped.jpg',
    'Tree and shrub care',
    4,
    6
  ),
];
