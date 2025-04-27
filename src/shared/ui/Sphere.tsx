import { cx } from 'class-variance-authority';

export function Sphere({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        className,
        'from-black-2 to-black-3 rounded-full bg-radial-[at_25%_25%] from-0% to-75% opacity-50 blur-md',
      )}
    />
  );
}
