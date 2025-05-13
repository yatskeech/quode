import { ReactNode } from 'react';

export function Text({ children }: { children?: ReactNode }) {
  return <div className="mb-2 text-white">{children}</div>;
}

export function Input({ children }: { children?: ReactNode }) {
  return (
    <div className="border-pink bg-black-4 mb-4 flex flex-col gap-1 overflow-hidden rounded-md border-l-4 p-3">
      <span className="text-gray text-sm">Входные данные:</span>
      {children}
    </div>
  );
}

export function Output({ children }: { children?: ReactNode }) {
  return (
    <div className="border-purple bg-black-4 mb-4 flex flex-col gap-1 overflow-hidden rounded-md border-l-4 p-3">
      <span className="text-gray text-sm">Выходные данные:</span>
      {children}
    </div>
  );
}

export function Example({ input, output }: { input: string; output: string }) {
  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <div className="bg-black-4 border-gray/25 flex max-w-1/2 flex-grow flex-col gap-1 overflow-hidden rounded-md border p-4">
          <span className="text-gray text-sm">Вход</span>
          <pre className="whitespace-pre-wrap">
            <code>{input}</code>
          </pre>
        </div>
        <div className="bg-black-4 border-gray/25 flex max-w-1/2 flex-grow flex-col gap-1 overflow-hidden rounded-md border p-4">
          <span className="text-gray text-sm">Выход</span>
          <pre className="whitespace-pre-wrap">
            <code>{output}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export function Hint({ children }: { children?: ReactNode }) {
  return (
    <div className="border-orange bg-black-4 mb-4 rounded-md border-l-4 p-3 text-white">
      {children}
    </div>
  );
}
