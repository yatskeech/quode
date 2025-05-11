'use client';

import { cx } from 'class-variance-authority';
import React, {
  Children,
  forwardRef,
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';

import { Button } from './Button';

export interface TabItemProps {
  label: string;
  children: ReactNode;
}

export function TabItem({ children }: TabItemProps) {
  return <>{children}</>;
}
TabItem.displayName = 'TabItem';

export interface TabsProps {
  children: ReactElement<TabItemProps>[];
  defaultIndex?: number;
  className?: string;
}

export interface TabsHandle {
  goTo: (index: number) => void;
}

export const Tabs = forwardRef<TabsHandle, TabsProps>(
  ({ children, defaultIndex = 0, className }, ref) => {
    const items = Children.toArray(children) as ReactElement<TabItemProps>[];
    const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

    useImperativeHandle(
      ref,
      () => ({
        goTo: (index: number) => {
          if (index >= 0 && index < items.length) {
            setActiveIndex(index);
          }
        },
      }),
      [items.length],
    );

    return (
      <div className={cx('flex h-full flex-col', className)}>
        <div className="flex justify-evenly gap-2">
          {items.map((child, index) => (
            <Button
              key={index}
              variant="none"
              size="none"
              onClick={() => setActiveIndex(index)}
              className={cx('rounded-xl px-4 py-2', {
                'text-gray': index !== activeIndex,
                'text-white': index === activeIndex,
              })}
            >
              {child.props.label}
            </Button>
          ))}
        </div>
        <div className="flex-grow p-4">
          {items[activeIndex]?.props.children}
        </div>
      </div>
    );
  },
);
Tabs.displayName = 'Tabs';
