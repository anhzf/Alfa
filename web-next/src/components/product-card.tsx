import { cn } from '@/utils/ui';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

export interface ProductCardProps extends HTMLAttributes<HTMLElement> {
  data: {
    id: string;
    title: string;
    img: string;
    review?: {
      stars: number;
      count: number;
    };
  };
}

export default function ProductCard({ data, className, ...props }: ProductCardProps) {
  return (
    <Link
      {...props}
      href={`/katalog/produk/${data.id}`}
      className={cn(
        'group w-40 lg:w-[16.625rem] h-60 lg:h-80 flex flex-col overflow-hidden rounded shadow-sm shadow-zinc-700/20',
        className,
      )}
    >
      <Image
        src={data.img}
        alt={data.title}
        height={320}
        width={250}
        loading="lazy"
        className="w-full h-60 object-contain bg-zinc-100 active:shadow-none"
      />

      <div className={cn('shrink-0 bg-white group-hover:bg-zinc-300/25 group-active:bg-zinc-300/50 flex flex-col items-center gap-1 lg:gap-2 p-2 lg:p-4')}>
        <h6 className={cn('text-sm lg:text-base text-gray-700 font-medium line-clamp-1')}>
          {data.title}
        </h6>

        {data.review ? (
          <div className="flex items-center gap-1">
            <div className={cn('flex *:size-3 lg:*:size-4')}>
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