'use server';

import { Language } from '@prisma/client';

import { prisma } from '@/shared/api';

export async function getCodeById({
  problemId,
  language,
}: {
  problemId: number;
  language: Language;
}) {
  const template = await prisma.template.findFirst({
    where: { problemId, language },
  });

  return template?.code ?? '';
}
