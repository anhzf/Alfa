import ProductCard from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeftIcon, ChevronRightIcon, PrinterIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { PackageOpenIcon, PencilRulerIcon, ShirtIcon } from 'lucide-react';
import Link from 'next/link';

const Carousel = () => (
  <header className="self-center relative h-[80svh] w-full text-white overflow-hidden">
    <img src="/hero-slides1_1.png" className="absolute w-full max-w-screen h-full object-cover blur" />

    <div className="relative flex flex-col w-full h-full max-w-screen-xl mx-auto">
      <img src="/hero-slides1_1.png" className="absolute w-full h-full object-cover blur-lg" />

      <div className="">
        <img src="/hero-slides1_1.png" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(196,196,196,0)_20.51%,rgba(39,39,42,0.7)_64.84%,#171717_100%)]" />
      </div>

      <div className="absolute bottom-8 left-5 lg:left-[3.375rem] right-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold uppercase leading-7">
            General Supplier
          </h3>
          <hr className="bg-white w-20 h-[3px]" />
        </div>

        <div className="max-w-prose">
          <p className="text-base leading-6">Melayani berbagai kebutuhan pasokan barang untuk kebutuhan usaha Anda maupun kebutuhan lainnya.</p>
        </div>

        <div className="py-2 flex gap-2">
          <button className="btn btn--filled btn--sm !bg-white hover:!bg-zinc-200 active:!bg-zinc-300 px-3 py-1.5 !text-zinc-900">
            Kontak Kami
          </button>
          <button className="btn btn--sm text-white">
            Lihat produk →
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-2 lg:right-4 flex">
        <button className="btn btn--round text-white hover:text-zinc-300 disabled:text-zinc-500 disabled:cursor-not-allowed" disabled>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button className="btn btn--round text-white hover:text-zinc-300 disabled:text-zinc-500 disabled:cursor-not-allowed">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
);

export default function Home() {
  return (
    <div className="flex-[1_0] flex flex-col">
      <Carousel />

      <main>
        <section className="flex flex-col items-center gap-3 px-2 bg-white">
          <h3 className="sr-only">
            Klien kami
          </h3>

          <div className="flex lg:justify-center items-center flex-nowrap gap-12 lg:gap-20 py-4 w-full max-w-screen-lg overflow-x-auto">
            {[
              {
                title: 'Pertamina',
                img: '/contents/section_clients_fake-brand1.png',
                url: '#',
              },
              {
                title: 'Tokopedia',
                img: '/contents/section_clients_fake-brand2.png',
                url: '#',
              },
              {
                title: 'BUMN',
                img: '/contents/section_clients_fake-brand3.svg',
                url: '#',
              },
            ].map(({ title, img, url }) => (
              <Link key={title} href={url} target="_blank"
                className="shrink-0 size-[7.5rem] lg:size-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center">
                <img src={img} alt={title} className="object-contain" />
              </Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-3 px-2 py-8 bg-zinc-50">
          <h3 className="text-lg text-zinc-900 font-bold leading-7">
            Layanan Kami
          </h3>

          <hr className="w-20 h-[3px] bg-zinc-900" />

          <ul className="flex flex-col gap-4 px-2 lg:px-12 py-4">
            {[
              {
                title: 'Pengadaan Barang',
                url: '#',
                icon: PackageOpenIcon,
                desc: 'Kami menyediakan berbagai macam peralatan kantor, mulai dari alat tulis, furnitur, hingga perangkat IT, dengan kualitas terbaik.',
              },
              {
                title: 'Percetakan',
                url: '#',
                icon: PrinterIcon,
                desc: 'Layanan percetakan kami mencakup segala kebutuhan Anda, dari kartu nama, poster, company profile, hingga brosur berkualitas tinggi.',
              },
              {
                title: 'Merchandise',
                url: '#',
                icon: ShirtIcon,
                desc: 'Kami memproduksi berbagai merchandise unik seperti kaos, topi, payung, dan bermacam-macam yang dapat disesuaikan dengan brand Anda.',
              },
              {
                title: 'Alat Kantor',
                url: '#',
                icon: PencilRulerIcon,
                desc: 'Lengkapi kantor Anda dengan peralatan canggih seperti brankas, lemari file, dan paper shredder.',
              },
              {
                title: 'Solusi Keamanan',
                url: '#',
                icon: ShieldCheckIcon,
                desc: 'Lindungi bisnis Anda dengan sistem keamanan canggih seperti pemindai bagasi X-ray untuk inspeksi menyeluruh.',
              },
            ].map(({ title, url, desc, icon: Icon }) => (
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
              {[
                { title: 'Paling laris', name: 'populer' },
                { title: 'ATK', name: 'atk' },
                { title: 'Furnitur', name: 'furnitur' },
                { title: 'Elektronik', name: 'elektronik' },
                { title: 'IT', name: 'it' },
              ].map(({ title, name }) => (
                <TabsTrigger key={name} value={name} className="grow shrink-0 min-w-20">
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
            {[
              'populer',
              'atk',
              'furnitur',
              'elektronik',
              'it',
            ].map((category) => (
              <TabsContent key={category} value={category} className="w-full overflow-y-hidden overflow-x-auto p-2">
                <ul className="flex gap-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <ProductCard key={i} className="shrink-0 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 25}ms` }} />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4242826384494!2d106.79412792919918!3d-6.303466899714855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee1f646ec7f3%3A0x4eb7085df5c42fc2!2sJl.%20RS.%20Fatmawati%20Raya%20No.1%2C%20RT.9%2FRW.7%2C%20Pd.%20Labu%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012450!5e0!3m2!1sen!2sid!4v1662602771036!5m2!1sen!2sid"
              width={600} height={450}
              style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[60vh]">
              Google Maps
            </iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
