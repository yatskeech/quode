import { Button, type ButtonProps, Loading } from '@/shared/ui';

export function FormButton({
  error,
  isLoading,
  children,
  ...rest
}: ButtonProps & { error?: string; isLoading?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <Button
        {...rest}
        variant="gradient"
        size="lg"
        className="flex items-center justify-center"
      >
        {isLoading ? <Loading className="h-5 w-5" /> : children}
      </Button>
      {error && <span className="text-pink text-center text-xs">{error}</span>}
    </div>
  );
}
