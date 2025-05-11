'use client';

import { Difficulty, type Solution } from '@prisma/client';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRef, useState } from 'react';
import { RiDatabase2Line, RiTimeLine } from 'react-icons/ri';

import { DifficultyMap } from '@/entities/problem';
import { SolutionsList } from '@/entities/solution';
import { TabItem, Tabs, type TabsHandle } from '@/shared/ui';
import { CodeEditor } from '@/widgets/codeEditor';
import { MDXRenderer } from '@/widgets/mdxRenderer';

import { submitSolution } from './actions';

interface ProblemPageProps {
  problem: {
    id: number;
    title: string;
    description: string;
    difficulty: Difficulty;
    coverImage?: string | null;
    timeLimit: number;
    memoryLimit: number;
  };
  solutions: Solution[];
  mdxSource: MDXRemoteSerializeResult;
}

const getSolutionStatus = (solutions: Solution[]) => {
  if (solutions.length === 0) return 'Не решалась';
  const lastSolution = solutions[0];
  if (lastSolution.status === 'accepted') return 'Решена';
  return 'Не решена';
};

export default function ProblemPage({
  problem,
  solutions: initialSolutions,
  mdxSource,
}: ProblemPageProps) {
  const [solutions, setSolutions] = useState(initialSolutions);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null,
  );
  const tabsRef = useRef<TabsHandle>(null);

  const handleSolutionSelect = (solution: Solution) => {
    setSelectedSolution(solution);
  };

  const handleSolutionSubmit = async (code: string, language: string) => {
    tabsRef.current?.goTo(1);
    const result = await submitSolution(problem.id, code, language);

    if (result.success && result.data) {
      setSolutions((prev) => [result.data, ...prev]);
      setSelectedSolution(result.data);
    }
  };

  return (
    <div className="flex h-full w-full gap-4">
      <div className="bg-black-3 w-[40%] overflow-y-auto rounded-3xl p-4">
        <Tabs ref={tabsRef} className="h-full">
          <TabItem label="Условие задачи">
            <div className="h-full overflow-y-auto">
              {problem.coverImage && (
                <div className="mb-4 aspect-video h-48 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={problem.coverImage}
                    alt={problem.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <h1 className="mb-1 text-2xl font-bold text-white">
                {problem.title}
              </h1>
              <div className="mb-2 flex items-center gap-4 text-sm">
                <span className="text-gray">
                  {getSolutionStatus(solutions)}
                </span>
                <span
                  className={cx({
                    'text-green': problem.difficulty === Difficulty.easy,
                    'text-orange': problem.difficulty === Difficulty.medium,
                    'text-pink': problem.difficulty === Difficulty.hard,
                  })}
                >
                  {DifficultyMap[problem.difficulty]}
                </span>
              </div>
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <RiTimeLine className="h-5 w-5" />
                  <span>Лимит времени: {problem.timeLimit}мс</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiDatabase2Line className="h-5 w-5" />
                  <span>Лимит памяти: {problem.memoryLimit}МБ</span>
                </div>
              </div>
              <MDXRenderer mdxSource={mdxSource} />
            </div>
          </TabItem>
          <TabItem label="Отправленные решения">
            <div className="h-full overflow-y-auto">
              <SolutionsList
                solutions={solutions}
                selectedSolutionId={selectedSolution?.id ?? null}
                onSolutionSelect={handleSolutionSelect}
              />
            </div>
          </TabItem>
        </Tabs>
      </div>
      <div className="flex-grow overflow-hidden rounded-3xl">
        <CodeEditor
          problemId={problem.id}
          selectedSolution={selectedSolution}
          onSolutionSubmit={handleSolutionSubmit}
        />
      </div>
    </div>
  );
}
