'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
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
      opts={{ loop: true, align: 'start' }}
      className="container"
    >
      <CarouselContent className="gap-4">
        {clients.map(({ title, img, url }, i) => (
          <CarouselItem
            key={title}
            className="basis-1/3 lg:basis-1/5"
          >
            <Link
              href={url || '#'}
              title={title}
              target="_blank"
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              className="shrink-0 size-[7.5rem] lg:size-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center"
            >
              <Image
                src={img}
                alt={title}
                width={120}
                height={120}
                loading="lazy"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}