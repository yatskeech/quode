import { Circle, Sphere } from '@/shared/ui';

export function Decoration() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 mx-auto max-w-300">
      <Sphere className="absolute top-20 left-1/2 h-16 w-16" />
      <Sphere className="absolute top-60 right-0 h-24 w-24" />
      <Sphere className="absolute top-100 left-0 h-32 w-32" />
      <Circle className="absolute top-0 left-1/2 h-128 w-128 -translate-x-1/2" />
    </div>
  );
}
