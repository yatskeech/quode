'use client';

import { type Solution, type User } from '@prisma/client';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import { LanguageMap } from '@/entities/language';
import { DifficultyMap } from '@/entities/problem';
import { useSignOut } from '@/entities/user';
import { Button } from '@/shared/ui';

interface ProfilePageProps {
  user: User & {
    solutions: (Solution & {
      problem: {
        id: number;
        title: string;
        difficulty: string;
      };
    })[];
  };
  stats: {
    totalSolutions: number;
    acceptedSolutions: number;
    problemsSolved: number;
    languages: Record<string, number>;
  };
}

export default function ProfilePage({ user, stats }: ProfilePageProps) {
  const { isLoading, onSignOut } = useSignOut();

  const successRate =
    stats.totalSolutions > 0
      ? Math.round((stats.acceptedSolutions / stats.totalSolutions) * 100)
      : 0;

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-purple flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-white text-2xl font-bold text-white">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || 'Avatar'}
                width={96}
                height={96}
              />
            ) : (
              <span>{user.email?.[0].toUpperCase()}</span>
            )}
          </div>
          <div>
            {user.name ? (
              <>
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-gray">{user.email}</p>
              </>
            ) : (
              <h1 className="text-2xl font-bold text-white">{user.email}</h1>
            )}
          </div>
        </div>
        <Button onClick={onSignOut} variant="outlined" disabled={isLoading}>
          Выйти
        </Button>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="bg-black-3 rounded-3xl p-6">
          <div className="text-gray text-sm">Всего решений</div>
          <div className="text-2xl font-bold text-white">
            {stats.totalSolutions}
          </div>
        </div>
        <div className="bg-black-3 rounded-3xl p-6">
          <div className="text-gray text-sm">Принятых решений</div>
          <div className="text-2xl font-bold text-white">
            {stats.acceptedSolutions}
          </div>
        </div>
        <div className="bg-black-3 rounded-3xl p-6">
          <div className="text-gray text-sm">Решено задач</div>
          <div className="text-2xl font-bold text-white">
            {stats.problemsSolved}
          </div>
        </div>
        <div className="bg-black-3 rounded-3xl p-6">
          <div className="text-gray text-sm">Процент успеха</div>
          <div className="text-2xl font-bold text-white">{successRate}%</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-white">
          Используемые языки
        </h2>
        {Object.keys(stats.languages).length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(stats.languages).map(([lang, count]) => (
              <div key={lang} className="bg-black-3 rounded-3xl p-6">
                <div className="text-gray text-sm">
                  {LanguageMap[lang as keyof typeof LanguageMap]}
                </div>
                <div className="text-2xl font-bold text-white">{count}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-black-3 text-gray rounded-3xl p-6">
            Вы еще не отправили ни одного решения
          </div>
        )}
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold text-white">Последние решения</h2>
        {user.solutions.length > 0 ? (
          <div className="space-y-2">
            {user.solutions.slice(0, 10).map((solution) => (
              <Link
                key={solution.id}
                href={`/problems/${solution.problem.id}?solutionId=${solution.id}`}
                className="block"
              >
                <div className="bg-black-3 hover:bg-black-4 flex items-center justify-between rounded-3xl p-6 transition-colors">
                  <div>
                    <div className="text-white">{solution.problem.title}</div>
                    <div className="text-gray text-sm">
                      {LanguageMap[solution.language]}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={cx('text-sm', {
                        'text-green': solution.status === 'accepted',
                        'text-pink': solution.status === 'rejected',
                      })}
                    >
                      {solution.passedCount}/{solution.totalCount}
                    </span>
                    <span
                      className={cx('text-sm', {
                        'text-green': solution.problem.difficulty === 'easy',
                        'text-orange': solution.problem.difficulty === 'medium',
                        'text-pink': solution.problem.difficulty === 'hard',
                      })}
                    >
                      {
                        DifficultyMap[
                          solution.problem
                            .difficulty as keyof typeof DifficultyMap
                        ]
                      }
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-black-3 text-gray rounded-3xl p-6">
            У вас пока нет отправленных решений
          </div>
        )}
      </div>
    </>
  );
}
