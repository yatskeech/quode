import { cx } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

export function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={cx(
        'outline-gray placeholder:text-gray rounded-2xl border border-white p-4 text-sm text-white transition-all focus:ring-1 focus:ring-white focus:ring-offset-1 focus:outline-none',
        className,
      )}
    />
  );
}
