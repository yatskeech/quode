import { cva, cx, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { Slot } from './Slot';

const button = cva(
  'cursor-pointer transition-all outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-white',
  {
    variants: {
      variant: {
        default: 'bg-black-3 text-white hover:bg-black-3/75',
        outlined:
          'border-white border text-white hover:bg-white hover:text-black-3',
        contained: 'bg-white text-black-3 hover:bg-white/75',
        gradient:
          'bg-gradient-purple bg-size-[100%_100%] text-white hover:from-pink/75 hover:bg-size-[200%_200%]',
        text: 'text-gray hover:text-white',
      },
      size: {
        md: 'rounded-xl px-8 py-3 text-sm',
        lg: 'rounded-2xl px-8 py-4 text-sm',
        icon: 'rounded-xl p-3',
      },
      disabled: {
        true: 'pointer-events-none opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      disabled: false,
    },
  },
);

type ButtonProps = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };

export function Button({
  asChild,
  className,
  variant,
  size,
  disabled,
  ...rest
}: ButtonProps) {
  const Computed = asChild ? Slot : 'button';

  return (
    <Computed
      {...rest}
      className={cx(button({ variant, size, disabled }), className)}
    />
  );
}
