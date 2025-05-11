import { Button, Link } from '@/shared/ui';
import { CodeTyping } from '@/widgets/codeTyping';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-9">
        <div className="flex max-w-200 flex-col items-center gap-3">
          <h1 className="text-center text-6xl font-bold">
            Платформа-тренажёр для изучения алгоритмов
          </h1>
          <p className="text-gray text-center text-lg">
            Освойте алгоритмы и структуры данных на практике: интерактивные
            задачи, автоматическая проверка решений и персональный прогресс
          </p>
        </div>
        <Button asChild variant="gradient">
          <Link variant="none" href="/problems">
            Решить задачи
          </Link>
        </Button>
      </div>
      <CodeTyping className="h-124 w-full max-w-200" />
    </div>
  );
}
