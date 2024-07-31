import ProductCard from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebSectionHero from '@/components/web-section-hero';
import { ChevronRightIcon, PrinterIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { PackageOpenIcon, PencilRulerIcon, ShirtIcon } from 'lucide-react';
import Link from 'next/link';
import ClientsCarousel, { type Client } from './clients-carousel';
import { LOCATION } from '@/contents';

const clients: Client[] = [
  {
    title: 'Pertamina',
    img: '/contents/section_clients_fake-brand1.png',
    url: 'https://pertamina.com',
  },
  {
    title: 'Tokopedia',
    img: '/contents/section_clients_fake-brand2.png',
  },
  {
    title: 'BUMN',
    img: '/contents/section_clients_fake-brand3.svg',
  },
  {
    title: 'Pertagiga',
    img: '/contents/section_clients_fake-brand1.png',
  },
  {
    title: 'Pertamini',
    img: '/contents/section_clients_fake-brand1.png',
  },
  {
    title: 'Pertaniga',
    img: '/contents/section_clients_fake-brand1.png',
  },
];

const services = {
  'Pengadaan Barang': {
    icon: PackageOpenIcon,
    desc: 'Kami menyediakan berbagai macam peralatan kantor, mulai dari alat tulis, furnitur, hingga perangkat IT, dengan kualitas terbaik.',
    url: '#',
  },
  'Percetakan': {
    icon: PrinterIcon,
    desc: 'Layanan percetakan kami mencakup segala kebutuhan Anda, dari kartu nama, poster, company profile, hingga brosur berkualitas tinggi.',
    url: '#',
  },
  'Merchandise': {
    icon: ShirtIcon,
    desc: 'Kami memproduksi berbagai merchandise unik seperti kaos, topi, payung, dan bermacam-macam yang dapat disesuaikan dengan brand Anda.',
    url: '#',
  },
  'Alat Kantor': {
    icon: PencilRulerIcon,
    desc: 'Lengkapi kantor Anda dengan peralatan canggih seperti brankas, lemari file, dan paper shredder.',
    url: '#',
  },
  'Solusi Keamanan': {
    icon: ShieldCheckIcon,
    desc: 'Lindungi bisnis Anda dengan sistem keamanan canggih seperti pemindai bagasi X-ray untuk inspeksi menyeluruh.',
    url: '#',
  },
};

const catalogCategories = [
  { title: 'ATK', id: 'atk' },
  { title: 'Furnitur', id: 'furnitur' },
  { title: 'Elektronik', id: 'elektronik' },
  { title: 'IT', id: 'it' },
];

export default async function Home() {
  return (
    <div className="flex-[1_0] flex flex-col">
      <WebSectionHero />

      <main>
        <section className="flex flex-col items-center gap-3 px-2 bg-white">
          <h3 className="sr-only">
            Klien kami
          </h3>

          <ClientsCarousel clients={clients} />
        </section>

        <section className="flex flex-col items-center gap-3 px-2 py-8 bg-zinc-50">
          <h3 className="text-lg text-zinc-900 font-bold leading-7">
            Layanan Kami
          </h3>

          <hr className="w-20 h-[3px] bg-zinc-900" />

          <ul className="flex flex-col gap-4 px-2 lg:px-12 py-4">
            {Object.entries(services).map(([title, { url, desc, icon: Icon }]) => (
              <li key={title} className="shrink-0">
                <Link key={title} href={url} className="group flex flex-wrap gap-3 hover:bg-zinc-100 active:bg-zinc-200 px-4 py-5 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="size-9 flex justify-center items-center bg-emerald-400/80 rounded-full">
                      <Icon className="size-6 text-white" />
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

              {catalogCategories.map(({ title, id }) => (
                <TabsTrigger key={id} value={id} className="grow shrink-0 w-24">
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="populer" className="w-full overflow-hidden p-2 max-w-screen-2xl">
              {/* 16.625 from ProductCard */}
              <ul className="grid grid-cols-[repeat(auto-fit,16.625rem)] justify-center gap-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i}>
                    <ProductCard
                      data={{
                        id: i.toString(),
                        title: 'Meja Ergonomis',
                        img: '/contents/products_popular1.png',
                        review: {
                          stars: 4,
                          count: 10,
                        },
                      }}
                      className="shrink-0 animate-in fade-in slide-in-from-bottom duration-700"
                      style={{ animationDelay: `${i * 25}ms` }}
                    />
                  </li>
                ))}
              </ul>
            </TabsContent>

            {catalogCategories.map(({ id }) => (
              <TabsContent key={id} value={id} className="w-full overflow-hidden p-2 max-w-screen-2xl">
                {/* 16.625 from ProductCard */}
                <ul className="grid grid-cols-[repeat(auto-fit,16.625rem)] justify-center gap-4">
                  {Array.from({ length: 8 }, (_, i) => (
                    <li key={i}>
                      <ProductCard
                        data={{
                          id: i.toString(),
                          title: 'Meja Ergonomis',
                          img: '/contents/products_popular1.png',
                          review: {
                            stars: 4,
                            count: 10,
                          },
                        }}
                        className="shrink-0 animate-in fade-in slide-in-from-bottom duration-700"
                        style={{ animationDelay: `${i * 25}ms` }}
                      />
                    </li>
                  ))}
                </ul>
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
