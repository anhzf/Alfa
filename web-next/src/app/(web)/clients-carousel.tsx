'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, type ComponentProps } from 'react';

export interface Client {
  title: string;
  img: string;
  url?: string | null;
}

export default function ClientsCarousel({ clients }: { clients: Client[] }) {
  const plugins = useRef<ComponentProps<typeof Carousel>['plugins']>([
    Autoscroll({ stopOnInteraction: true })
  ]);

  return (
    <Carousel
      plugins={plugins.current}
      opts={{ loop: true, align: 'start' }}
      className="container p-0"
    >
      <CarouselContent className="gap-4">
        {clients.map(({ title, img, url }, i) => (
          <CarouselItem
            key={`${i}${title}`}
            className="basis-1/3 lg:basis-1/5 max-h-28 flex flex-col justify-center items-center p-2"
          >
            <Link
              href={url || '#'}
              title={title}
              target="_blank"
              className="size-full hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center"
            >
              <Image
                src={img}
                alt={title}
                width={100}
                height={100}
                loading="lazy"
                objectFit="contain"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
                data-aos-offset="-100"
                className="object-contain max-w-28 h-full"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}