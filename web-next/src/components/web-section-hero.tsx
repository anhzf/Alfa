import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';
import Link from 'next/link';

export default function WebSectionHero() {
  const title = 'Solusi Pengadaan Terpercaya\nuntuk Kebutuhan Bisnis Anda';

  return (
    <header className="self-center relative h-[80svh] w-full text-white overflow-hidden">
      <Image
        src={heroImg}
        alt=""
        objectFit='cover'
        className="absolute w-full max-w-screen h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-transparent" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(196,196,196,0)_20.51%,rgba(39,39,42,0.7)_64.84%,#171717_100%)]" />

      <div className="relative flex flex-col container h-full mx-auto">
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 p-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-4xl lg:text-6xl text-center font-semibold overflow-hidden">
              {title.split('\n').map((line, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={50 * i}
                  data-aos-mirror
                >
                  {line}
                </div>
              ))}
            </h3>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={title.split('\n').length * 50}
            data-aos-mirror
            className="max-w-prose"
          >
            <p className="lg:text-lg text-center">
              Kami menyediakan layanan pengadaan barang dan jasa untuk berbagai kebutuhan bisnis Anda secara profesional, efisien, dan terpercaya.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={title.split('\n').length * 50 + 50}
            data-aos-mirror
            className="py-2 flex gap-2">
            <Link
              href="#why-us"
              className="btn btn--filled !bg-white hover:!bg-zinc-200 active:!bg-zinc-300 px-3 py-1.5 !text-zinc-900">
              Mengapa Kami
            </Link>
            <Link
              href="/katalog"
              className="btn text-white"
            >
              Lihat Katalog →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}