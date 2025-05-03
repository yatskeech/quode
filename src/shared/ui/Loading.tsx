import { cx } from 'class-variance-authority';

export function Loading({ className }: { className?: string }) {
  return (
    <svg
      className={cx('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
    >
      <circle
        cx="28"
        cy="28"
        r="26"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="12 12"
      />
    </svg>
  );
}
