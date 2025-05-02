import { cva, cx, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

const input = cva(
  'placeholder:text-gray rounded-2xl border p-4 text-sm transition-all focus:ring-1 focus:ring-offset-1 focus:outline-none',
  {
    variants: {
      invalid: {
        true: 'border-pink text-pink focus:ring-offset-pink',
        false: 'border-white text-white focus:ring-offset-white',
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

export type InputProps = VariantProps<typeof input> &
  InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, invalid, ...rest }: InputProps) {
  return <input {...rest} className={cx(input({ invalid }), className)} />;
}
