import { cn } from '@/utils/ui';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

export default function Brand({ expand, className, ...props }: HTMLAttributes<HTMLElement> & {
  expand?: boolean;
}) {
  return (
    <Link href="/" className={cn('btn inline-flex flex-col gap-0', className)} {...props}>
      <span data-name className={cn(
        'text-[2em] inline-block w-full font-bold text-blue-500 italic leading-none',
        { 'tracking-wider text-left ml-[0.5em]': expand },
      )}>
        ACM
      </span>
      {expand && (
        <span className="font-medium text-sm text-zinc-400 leading-none uppercase tracking-tighter">
          Alfa Cipta Mukti
        </span>
      )}
    </Link>
  );
}