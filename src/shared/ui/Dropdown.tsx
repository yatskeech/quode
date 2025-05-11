'use client';

import { cx } from 'class-variance-authority';
import {
  createContext,
  Dispatch,
  type KeyboardEvent,
  type LiHTMLAttributes,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Button } from './Button';

type DropdownContextValue = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownContext = createContext<DropdownContextValue | null>(null);

export function Dropdown({ children }: { children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handler = (event: MouseEvent) => {
      if (!isOpen || !dropdownRef.current) return;

      if (!dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Button = function DropdownButton({
  children,
}: {
  children: ReactNode;
}) {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown.Button must be used within a Dropdown');
  }
  const { isOpen, setIsOpen } = context;

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    } else if (event.key === 'Escape' || event.key === 'ArrowUp') {
      setIsOpen(false);
    }
  };

  return (
    <Button
      variant="text"
      size="none"
      className={cx('flex items-center gap-2 rounded-full px-6 py-2 text-sm', {
        'bg-black-4 text-white': isOpen,
        'hover:bg-black-4 hover:text-white': !isOpen,
      })}
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      {children}
      {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
    </Button>
  );
};

Dropdown.Item = function DropdownItem({
  children,
  className,
  ...rest
}: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...rest}
      className={cx(
        'hover:bg-black-4 flex cursor-pointer flex-col px-6 py-3 text-sm transition-all',
        className,
      )}
    >
      {children}
    </li>
  );
};

Dropdown.Content = function DropdownContent({
  children,
}: {
  children: ReactNode;
}) {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown.Content must be used within a Dropdown');
  }
  const { isOpen } = context;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute inset-x-0 top-full z-10 mt-2">
      <ul className="bg-black-3 border-gray/25 overflow-hidden rounded-3xl border">
        {children}
      </ul>
    </div>
  );
};
