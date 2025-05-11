import { serialize } from 'next-mdx-remote/serialize';

import { auth, prisma } from '@/shared/api';

import ProblemPage from './ProblemPage';

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();

  const problem = await prisma.problem.findFirst({
    where: { id: Number(params.id) },
  });
  const mdxSource = await serialize(problem?.description || '');

  if (!problem) {
    return null;
  }

  const solutions = await prisma.solution.findMany({
    where: {
      problemId: problem.id,
      ...(session?.user ? { userId: Number(session.user.id) } : {}),
    },
    orderBy: { submittedAt: 'desc' },
  });

  return (
    <ProblemPage
      problem={problem}
      solutions={solutions}
      mdxSource={mdxSource}
    />
  );
}
