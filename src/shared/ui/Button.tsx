import { cva, cx, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const button = cva(
  'cursor-pointer transition-all focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white',
  {
    variants: {
      variant: {
        default: 'bg-black-3 text-white hover:bg-black-3/75',
        gradient:
          'bg-gradient-purple bg-size-[100%_100%] text-white hover:from-pink/75 hover:bg-size-[200%_200%]',
        text: 'text-gray hover:text-white',
      },
      size: {
        md: 'rounded-xl px-8 py-3 text-sm',
        icon: 'rounded-xl p-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

type ButtonProps = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, variant, size, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={cx(button({ variant, size }), className)} />
  );
}
