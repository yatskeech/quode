import { redirect } from 'next/navigation';

import { auth, prisma } from '@/shared/api';

import ProfilePage from './ProfilePage';

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      solutions: {
        include: {
          problem: true,
        },
        orderBy: {
          submittedAt: 'desc',
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  const stats = {
    totalSolutions: user.solutions.length,
    acceptedSolutions: user.solutions.filter((s) => s.status === 'accepted')
      .length,
    problemsSolved: new Set(user.solutions.map((s) => s.problemId)).size,
    languages: Object.fromEntries(
      Object.entries(
        user.solutions.reduce(
          (acc, s) => {
            acc[s.language] = (acc[s.language] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>,
        ),
      ).map(([lang, count]) => [lang, count]),
    ),
  };

  return <ProfilePage user={user} stats={stats} />;
}
