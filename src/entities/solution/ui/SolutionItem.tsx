import { type Solution } from '@prisma/client';
import { cx } from 'class-variance-authority';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { LanguageMap } from '@/entities/language';

interface SolutionItemProps {
  solution: Solution;
  isSelected: boolean;
  onClick: () => void;
}

export function SolutionItem({
  solution,
  isSelected,
  onClick,
}: SolutionItemProps) {
  const passedPercentage = Math.round(
    (solution.passedCount / solution.totalCount) * 100,
  );

  return (
    <button
      className={cx(
        'flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition-colors',
        {
          'bg-black-4': isSelected,
          'hover:bg-black-4/50': !isSelected,
        },
      )}
      onClick={onClick}
    >
      <div className="flex flex-col gap-1">
        <span className="text-gray text-sm">
          {format(solution.submittedAt, 'd MMMM yyyy, HH:mm', { locale: ru })}
        </span>
        <span className="text-sm capitalize">
          {LanguageMap[solution.language]}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">
          {solution.passedCount} из {solution.totalCount} пройдено
        </span>
        <div className="bg-gray/50 h-2 w-24 overflow-hidden rounded-full">
          <div
            className={cx('h-full transition-all', {
              'bg-green': passedPercentage === 100,
              'bg-orange': passedPercentage > 0 && passedPercentage < 100,
              'bg-pink': passedPercentage === 0,
            })}
            style={{ width: `${passedPercentage}%` }}
          />
        </div>
      </div>
    </button>
  );
}
