import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';

import { auth, prisma } from '@/shared/api';

import ProblemPage from './ProblemPage';

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ solutionId?: string }>;
}) {
  const session = await auth();
  const { id } = await params;
  const { solutionId } = await searchParams;

  const problemId = Number(id);

  if (isNaN(problemId)) {
    notFound();
  }

  const problem = await prisma.problem.findFirst({
    where: { id: problemId },
    select: {
      id: true,
      title: true,
      description: true,
      difficulty: true,
      coverImage: true,
      timeLimit: true,
      memoryLimit: true,
    },
  });

  if (!problem) {
    notFound();
  }

  const mdxSource = await serialize(problem.description);

  const solutions = await prisma.solution.findMany({
    where: {
      problemId: problem.id,
      ...(session?.user ? { userId: session.user.id } : {}),
    },
    orderBy: { submittedAt: 'desc' },
  });

  return (
    <ProblemPage
      problem={problem}
      solutions={solutions}
      mdxSource={mdxSource}
      initialSolutionId={Number(solutionId)}
    />
  );
}
