import { Button } from '@/shared/ui';
import { CodeTyping } from '@/widgets/CodeTyping';

export default function Home() {
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
        <Button variant="gradient">Решить задачи</Button>
      </div>
      <div className="w-full max-w-200">
        <CodeTyping />
      </div>
    </div>
  );
}
