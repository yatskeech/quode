import { Difficulty, type Problem } from '@prisma/client';
import { cx } from 'class-variance-authority';

import { Button, Link } from '@/shared/ui';

import { DifficultyMap } from '../model/difficulty';

export function ProblemItem({ problem }: { problem: Problem }) {
  return (
    <div className="bg-black-4 border-gray/25 flex items-center justify-between gap-32 rounded-2xl border px-12 py-4">
      <div className="flex w-1/2 gap-8">
        <span>{problem.id}</span>
        <span>{problem.title}</span>
      </div>
      <span
        className={cx(
          'w-full max-w-24 rounded-full border px-4 py-2 text-center text-xs',
          {
            'border-green text-green': problem.difficulty === Difficulty.easy,
            'border-orange text-orange':
              problem.difficulty === Difficulty.medium,
            'border-pink text-pink': problem.difficulty === Difficulty.hard,
          },
        )}
      >
        {DifficultyMap[problem.difficulty]}
      </span>
      <Button asChild variant="contained">
        <Link variant="none" href={`/problems/${problem.id}`}>
          Решить
        </Link>
      </Button>
    </div>
  );
}
