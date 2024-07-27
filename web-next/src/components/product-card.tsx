import { createId } from '@/utils/common';
import { cn } from '@/utils/ui';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

export default function ProductCard({ dense, className, ...props }: HTMLAttributes<HTMLElement> & { dense?: boolean; }) {
  return (
    <Link href={`/katalog/produk/${createId()}`} className={cn('group flex flex-col overflow-hidden h-80 w-[16.625rem] shadow-sm shadow-zinc/50', { 'w-40 h-60': dense }, className)} {...props}>
      <img src="/contents/products_popular1.png" alt="Produk terlaris 1" loading="lazy" className="h-60 bg-zinc-100 active:shadow-none" />

      <div className={cn('shrink-0 bg-white group-hover:bg-zinc-300/25 group-active:bg-zinc-300/50 flex flex-col items-center gap-2 p-4', { 'p-2 gap-1': dense })}>
        <h6 className={cn('text-gray-700 font-medium line-clamp-1', { 'text-sm': dense })}>
          Meja Ergonomis
        </h6>
        <div className="flex gap-1">
          <div className={cn('flex *:size-4 *:text-amber-400', { '*:size-3': dense })}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>

          <span className="text-xs text-zinc-500">
            (57)
          </span>
        </div>
      </div>
    </Link>
  );
}