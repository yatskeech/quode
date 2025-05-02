import { Input, type InputProps } from '@/shared/ui';

export function FormInput({ error, ...rest }: InputProps & { error?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <Input {...rest} invalid={Boolean(error)} />
      {error && <span className="text-pink text-xs">{error}</span>}
    </div>
  );
}
