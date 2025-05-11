import { ProblemItem } from '@/entities/problem';
import { prisma } from '@/shared/api';

export default async function ProblemsPage() {
  const problems = await prisma.problem.findMany({ orderBy: { id: 'asc' } });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-baseline gap-4">
        <h1 className="text-6xl font-bold">Все задачи</h1>
        <span className="text-gray text-lg">{problems.length}</span>
      </div>
      <div className="bg-black-3 flex w-full flex-col gap-3 rounded-4xl p-6">
        {problems.map((problem) => (
          <ProblemItem key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}
