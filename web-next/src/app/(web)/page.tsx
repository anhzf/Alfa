import ProductGrid from '@/components/product-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebSectionHero from '@/components/web-section-hero';
import { LOCATION } from '@/contents';
import { getCms } from '@/lib';
import { contentAsset } from '@/utils/cms';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Suspense } from 'react';
import ClientsCarousel from './clients-carousel';
import type { Media } from '@/payload-types';

export default async function Home() {
  const cms = await getCms();
  const [
    { docs: [setting] },
    { docs: categories },
    { docs: clients },
  ] = await Promise.all([
    cms.find({
      collection: 'settings',
      where: {
        key: { equals: 'PageHome' },
      },
      limit: 1,
    }),
    cms.find({ collection: 'categories' }),
    cms.find({ collection: 'clients' }),
  ]);
  const page = setting.value as {
    services: Record<string, { url: string, desc: string, icon: string }>,
    popular: string[],
  };

  return (
    <div className="flex-[1_0] flex flex-col">
      <WebSectionHero />

      <main>
        <section className="flex flex-col items-center gap-3 px-2 bg-white">
          <h3 className="sr-only">
            Klien kami
          </h3>

          <ClientsCarousel clients={clients.map(({ title, img, ...attrs }) => ({
            ...attrs,
            title,
            img: contentAsset((img as Media).url!),
          }))} />
        </section>

        <section className="flex flex-col items-center gap-3 px-2 py-8 bg-zinc-50">
          <h3 className="text-lg text-zinc-900 font-bold leading-7">
            Layanan Kami
          </h3>

          <hr className="w-20 h-[3px] bg-zinc-900" />

          <ul className="flex flex-col gap-4 px-2 lg:px-12 py-4">
            {Object.entries(page.services).map(([title, { url, desc, icon }], i) => (
              <li key={title} className="shrink-0" data-aos="fade-up" data-aos-delay={i * 50}>
                <Link key={title} href={url} className="group flex flex-wrap gap-3 hover:bg-zinc-100 active:bg-zinc-200 px-4 py-5 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="size-9 flex justify-center items-center bg-emerald-400/80 rounded-full">
                      <Icon icon={icon} className="size-6 text-white" />
                    </div>
                    <h6 className="text-2xl font-medium text-emerald-900 w-[20ch]">
                      {title}
                    </h6>
                  </div>

                  <div className="flex-auto flex gap-2">
                    <p className="grow text-zinc-700 max-w-prose">
                      {desc}
                    </p>

                    <ChevronRightIcon className="self-center shrink-0 size-8 text-zinc-500 translate-x-0 group-hover:translate-x-1  group-active:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col items-center gap-3 px-2 py-8">
          <h3 className="text-lg text-zinc-900 font-bold leading-7">
            Katalog Produk
          </h3>

          <hr className="w-20 h-[3px] bg-zinc-900" />

          <Tabs defaultValue="populer" className="w-full flex flex-col items-center px-2 lg:px-12 py-4">
            <TabsList className="w-full max-w-screen-lg justify-start lg:justify-center overflow-y-hidden overflow-x-auto">
              <TabsTrigger value="populer" className="grow shrink-0 w-24">
                Paling populer
              </TabsTrigger>

              {categories.map(({ title, id }) => (
                <TabsTrigger key={id} value={String(id)} className="grow shrink-0 w-24">
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="populer" className="w-full overflow-hidden p-2 max-w-screen-2xl">
              <Suspense fallback={<div>Loading...</div>}>
                <ProductGrid where={{ id: { in: page.popular } }} />
              </Suspense>
            </TabsContent>

            {categories.map(({ id }) => (
              <TabsContent key={id} value={String(id)} className="w-full overflow-hidden p-2 max-w-screen-2xl">
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductGrid where={{ category: { equals: id } }} />
                </Suspense>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex gap-2 p-2">
            <Link href={`/katalog?sort=popular`} className="btn text-sm text-zinc-700">
              Lihat semua →
            </Link>
          </div>
        </section>

        <section className="flex flex-col items-center gap-3 px-2 py-8 bg-zinc-50">
          <h3 className="text-lg text-zinc-900 font-bold leading-7">
            Temukan kami
          </h3>

          <hr className="w-20 h-[3px] bg-zinc-900" />

          <div className="py-8 w-full">
            <iframe
              src={LOCATION.embedUrl}
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[60vh]"
            >
              Google Maps
            </iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
