import { type Solution } from '@prisma/client';

import { SolutionItem } from './SolutionItem';

interface SolutionsListProps {
  solutions: Solution[];
  selectedSolutionId: number | null;
  onSolutionSelect: (solution: Solution) => void;
}

export function SolutionsList({
  solutions,
  selectedSolutionId,
  onSolutionSelect,
}: SolutionsListProps) {
  if (solutions.length === 0) {
    return (
      <div className="text-gray flex h-full items-center justify-center">
        Нет отправленных решений
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {solutions.map((solution) => (
        <SolutionItem
          key={solution.id}
          solution={solution}
          isSelected={solution.id === selectedSolutionId}
          onClick={() => onSolutionSelect(solution)}
        />
      ))}
    </div>
  );
}
