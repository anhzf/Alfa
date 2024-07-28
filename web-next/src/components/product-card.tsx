import { cn } from '@/utils/ui';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

interface ProductCardProps extends HTMLAttributes<HTMLElement> {
  data: {
    id: string;
    title: string;
    img: string;
    review?: {
      stars: number;
      count: number;
    };
  };
  dense?: boolean;
}

export default function ProductCard({ dense, data, className, ...props }: ProductCardProps) {
  return (
    <Link
      {...props}
      href={`/katalog/produk/${data.id}`}
      className={cn('group flex flex-col overflow-hidden h-80 w-[16.625rem] shadow-sm shadow-zinc/50', { 'w-40 h-60': dense }, className)}
    >
      <img
        src={data.img}
        alt="Produk terlaris 1"
        loading="lazy"
        className="h-60 bg-zinc-100 active:shadow-none"
      />

      <div className={cn('shrink-0 bg-white group-hover:bg-zinc-300/25 group-active:bg-zinc-300/50 flex flex-col items-center gap-2 p-4', { 'p-2 gap-1': dense })}>
        <h6 className={cn('text-gray-700 font-medium line-clamp-1', { 'text-sm': dense })}>
          {data.title}
        </h6>

        {data.review ? (
          <div className="flex items-center gap-1">
            <div className={cn('flex *:size-4', { '*:size-3': dense })}>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon
                  key={i}
                  className={cn(i < data.review!.stars ? 'text-amber-400' : 'text-gray-300')}
                />
              ))}
            </div>

            <div className="text-xs leading-none text-gray-500">
              ({data.review.count})
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-400">
            Belum ada review
          </div>
        )}
      </div>
    </Link>
  );
}