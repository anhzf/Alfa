import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function WebSectionHero() {
  return (
    <header className="self-center relative h-[80svh] w-full text-white overflow-hidden">
      <Image
        src="/hero-slides1_1.png"
        width={1280}
        height={720}
        alt=""
        className="absolute w-full max-w-screen h-full object-cover blur"
      />
      {/* <img src="/hero-slides1_1.png" className="absolute w-full max-w-screen h-full object-cover " />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(196,196,196,0)_20.51%,rgba(39,39,42,0.7)_64.84%,#171717_100%)]" /> */}

      <div className="relative flex flex-col w-full h-full max-w-screen-xl mx-auto">
        <Image
          src="/hero-slides1_1.png"
          alt=""
          width={1280}
          height={720}
          className="absolute w-full h-full object-cover blur-lg"
        />

        <div className="">
          <Image
            src="/hero-slides1_1.png"
            alt="Hero image"
            width={1280}
            height={720}
            className="absolute w-full h-full object-cover"
          />
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
}