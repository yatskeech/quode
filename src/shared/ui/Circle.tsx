import { cx } from 'class-variance-authority';

export function Circle({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        className,
        'from-black-3 rounded-full bg-radial from-0% to-transparent to-75%',
      )}
    />
  );
}
