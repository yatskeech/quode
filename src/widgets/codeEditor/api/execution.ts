'use server';

import { Language } from '@prisma/client';

import { prisma } from '@/shared/api';

const PISTON_URL = 'https://emkc.org/api/v2/piston/execute';

const VERSIONS: Record<Language, string> = {
  javascript: '18.15.0',
  python: '3.10.0',
};

export async function testSolution(
  problemId: number,
  code: string,
  language: Language,
) {
  const tests = await prisma.test.findMany({
    where: { problemId, language },
    orderBy: { order: 'asc' },
  });

  const results = [];

  for (const test of tests) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const { id, order, input, expected, wrapperCode } = test;

    const payload = {
      language,
      version: VERSIONS[language],
      files: [{ name: 'main', content: code + ' ' + wrapperCode }],
      stdin: input,
      args: [],
      run_timeout: 3000,
      compile_timeout: 10000,
    };

    try {
      const res = await fetch(PISTON_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      const run = json.run || {};

      const stdout = (run.stdout ?? '').trim();
      const stderr = run.stderr ?? '';
      const exitCode = run.code ?? 1;
      const passed = exitCode === 0 && stdout === expected.trim();

      results.push({ id, order, input, expected, stdout, stderr, passed });
    } catch (e) {
      if (e instanceof Error) {
        results.push({
          id,
          order,
          input,
          expected,
          stdout: '',
          stderr: e.message,
          passed: false,
        });
      }
    }
  }

  return results;
}
