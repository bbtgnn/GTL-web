import type { Shape } from './types';
import { Rectangle } from './rectangle';
import { Quarter } from './quarter';

export const shapes = [Rectangle, Quarter] as Array<typeof Shape>;
