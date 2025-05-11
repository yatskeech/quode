'use client';

import Image from 'next/image';
import { User } from 'next-auth';
import {
  RiAccountCircleLine,
  RiEditCircleLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';

import { Button, Dropdown, Link, Loading } from '@/shared/ui';

import { useSignOut } from '../model/useSignOut';

export function Profile({ user }: { user: User }) {
  const { isLoading, onSignOut } = useSignOut();

  return (
    <Dropdown>
      <Dropdown.Button>
        <div className="flex cursor-pointer items-center gap-3">
          <div className="bg-purple flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white text-white">
            {user.image ? (
              <Image width={40} height={40} src={user.image} alt="" />
            ) : (
              <span>{user.email?.[0].toUpperCase()}</span>
            )}
          </div>
          {user.email}
        </div>
      </Dropdown.Button>
      <Dropdown.Content>
        {isLoading ? (
          <Dropdown.Item>
            <Loading className="text-pink mx-auto h-4 w-4" />
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item>
              <Link
                variant="none"
                href="/profile"
                className="flex items-center gap-2"
              >
                <RiAccountCircleLine size={16} className="opacity-75" /> Мой
                профиль
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                variant="none"
                href="/problems"
                className="flex items-center gap-2"
              >
                <RiEditCircleLine size={16} className="opacity-75" /> Все задачи
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button
                variant="none"
                size="none"
                className="text-pink flex items-center gap-2"
                onClick={onSignOut}
              >
                <RiLogoutCircleLine size={16} className="opacity-75" />
                Выйти
              </Button>
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Content>
    </Dropdown>
  );
}
