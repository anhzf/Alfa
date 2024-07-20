import { cn } from '@/utils/ui';
import type { HTMLAttributes } from 'react';

export default function Separator({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <hr className={cn('text-zinc-200 bg-current h-[3px] w-7ch lg:w-full', className)} {...props} />
  );
}