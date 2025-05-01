import { cloneElement, HTMLAttributes, isValidElement } from 'react';

export function Slot(props: HTMLAttributes<HTMLElement>) {
  const { children, ...rest } = props;

  if (!isValidElement(children)) return null;
  const childrenProps = children.props as Record<string, unknown>;

  return cloneElement(children, { ...rest, ...childrenProps });
}
