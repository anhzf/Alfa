'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';
import Link from 'next/link';
import { useRef, type ComponentProps } from 'react';

const MINIMUM_ITEMS = 6;

export interface Client {
  title: string;
  img: string;
  url?: string;
}

export default function ClientsCarousel({ clients }: { clients: Client[] }) {
  const plugins = useRef<ComponentProps<typeof Carousel>['plugins']>(
    clients.length > MINIMUM_ITEMS
      ? [Autoscroll({ stopOnInteraction: true })]
      : []);

  return (
    <Carousel
      plugins={plugins.current}
      opts={{ loop: true }}
      className="container"
    >
      <CarouselContent>
        {clients.map(({ title, img, url }) => (
          <CarouselItem
            key={title}
            className="basis-1/3 lg:basis-1/5"
          >
            <Link
              href={url || '#'}
              target="_blank"
              className="shrink-0 size-[7.5rem] lg:size-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center"
            >
              <img src={img} alt={title} className="object-contain" />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}