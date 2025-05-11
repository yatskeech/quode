import { Difficulty } from '@prisma/client';

export const DifficultyMap = {
  [Difficulty.easy]: 'Лёгкая',
  [Difficulty.medium]: 'Средняя',
  [Difficulty.hard]: 'Сложная',
};
