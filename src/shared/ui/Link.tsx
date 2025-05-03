import { cva, cx, VariantProps } from 'class-variance-authority';
import LinkComponent from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

const link = cva('transition-all outline-none', {
  variants: {
    variant: {
      default: 'hover:opacity-75 focus:opacity-75',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkProps = VariantProps<typeof link> &
  ComponentPropsWithoutRef<typeof LinkComponent>;

export function Link({ className, variant, ...rest }: LinkProps) {
  return (
    <LinkComponent {...rest} className={cx(link({ variant }), className)} />
  );
}
