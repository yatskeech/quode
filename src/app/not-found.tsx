'use client';

import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-center text-gray-500">
          К сожалению, запрашиваемая страница не найдена.
          <br />
          Возможно, она была удалена или перемещена.
        </p>
      </div>
      <Link
        href="/problems"
        className="bg-black-3 hover:bg-black-4 flex items-center gap-2 rounded-lg px-6 py-3 text-sm transition-colors"
      >
        <RiArrowLeftLine size={20} />
        <span>Вернуться к списку задач</span>
      </Link>
    </div>
  );
}
