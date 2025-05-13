'use server';

import { Language } from '@prisma/client';

import { auth, prisma } from '@/shared/api';
import { testSolution } from '@/widgets/codeEditor';

interface TestResult {
  id: number;
  order: number;
  input: string;
  expected: string;
  stdout: string;
  stderr: string;
  passed: boolean;
}

export async function submitSolution(
  problemId: number,
  code: string,
  language: string,
) {
  try {
    const session = await auth();

    if (!session?.user || !session.user.id) {
      return { success: false, error: 'Unauthorized' };
    }

    const results = await testSolution(problemId, code, language as Language);
    const passedCount = results.filter((r: TestResult) => r.passed).length;
    const totalCount = results.length;

    const solution = await prisma.solution.create({
      data: {
        problemId,
        userId: session.user.id,
        language: language as Language,
        code,
        status: passedCount === totalCount ? 'accepted' : 'rejected',
        passedCount,
        totalCount,
        details: results,
      },
    });

    return { success: true, data: solution };
  } catch (error) {
    console.error('Error submitting solution:', error);
    return { success: false, error: 'Failed to submit solution' };
  }
}
