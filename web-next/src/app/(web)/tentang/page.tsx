import Image from 'next/image';
import imgBusinessSuccess from '@/assets/united-business-team-celebrating-success.jpg';
import { getCms } from '@/lib';
import { contentAsset } from '@/utils/cms';

export default async function TentangPage() {
  const cms = await getCms();
  const [
    { docs: [setting] },
  ] = await Promise.all([
    cms.find({
      collection: 'settings',
      where: {
        key: { equals: 'PageHome' },
      },
      limit: 1,
    }),
  ]);
  const page = setting.value as {
    clients: Record<string, { img: string, url?: string }>,
    services: Record<string, { url: string, desc: string, icon: string }>,
    popular: string[],
  };

  return (
    <main className="flex-[1_0] flex flex-col">
      <div className="flex h-60 justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900/95 via-10% to-gray-950 overflow-hidden">
        <h1
          data-aos="fade-up"
          className="text-5xl text-blue-400 font-bold italic animate-bounce [animation-duration:1400ms]"
        >
          CV Alfa Cipta Mukti
        </h1>
      </div>

      <div className="flex container flex-col gap-12 px-8 py-12">
        <section className="flex justify-center items-center gap-6">
          <div data-aos="fade-right" className="grow max-w-xl">
            <Image
              src={imgBusinessSuccess}
              alt="Image by katemangostar on Freepik"
              title="Image by katemangostar on Freepik"
              objectFit="cover"
              className="w-full max-w-md h-96 mx-auto rounded-xl object-cover"
            />
          </div>

          <div data-aos="fade-up" className="text-lg prose">
            <p>
              <strong>CV ALFA CIPTA MUKTI</strong> merupakan perusahaan supplier yang berdomisili di Jakarta
              yang didirikan pada 17 September 2014 dengan VISI dan MISI serta jangkauan layanan
              bersifat global yang berorientasikan pada kepuasan pelanggan.
            </p>
            <p>
              Badan usaha atau Perusahaan yang kami layani mencakup segala bentuk perusahaan
              mulai dari usaha kecil, mikro dan menengah (UMKM) hingga perusahaan sedang
              dan besar dalam skala nasional dan multinasional baik dalam lingkup perusahaan
              yang menjalankan berbagai kegiatan bisnis dan industri perdagangan, jasa,
              pertambangan, perdagangan, dll
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-gray-200" />

        <section className="flex justify-center gap-8 flex-wrap p-4">
          <div className="relative flex flex-col gap-4">
            <div data-aos="zoom-in" className="absolute size-12 bg-blue-300 -top-1 -left-6 rounded-full" />

            <h2 data-aos="fade-up" className="relative text-4xl text-gray-900 font-extrabold">
              Visi
            </h2>

            <ol data-aos="fade-up" className="list-decimal text-lg prose">
              {[
                'Menjadi professional partner yang mampu memberikan kepuasan dan kenyamanan bagi pelanggan.',
                'Menjadi perusahaan besar dalam bidang Jasa, Perdagangan yang dikenal dalam skala Nasional.',
              ].map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative flex flex-col gap-4">
            <div data-aos="zoom-in" className="absolute size-12 bg-orange-300 -top-1 -left-6 rounded-full" />

            <h2 data-aos="fade-up" className="relative text-4xl text-gray-900 font-extrabold">
              Misi
            </h2>

            <ol data-aos="fade-up" className="list-decimal text-lg prose">
              {[
                'Membangun kerjasama/kemitraan usaha secara profesional dengan badan, institusi/instansi, lembaga yang terkait, guna berperan dalam program pembangunan nasional.',
                'Berperan aktif menjalankan roda bisnis dengan mendukung program pemerintah untuk dapat meningkatkan perekonomian bangsa.',
                'Berperan serta dalam menciptakan lapangan pekerjaan dan turut serta membangun budaya kerja yang berkualitas dan professional.'
              ].map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <hr className="w-full h-px bg-gray-200" />

        <section className="flex flex-col">
          <h2 data-aos="fade-down" className="text-4xl text-gray-700 text-center font-semibold">
            Klien kami
          </h2>

          <ul className="grid justify-center gap-4 grid-cols-[repeat(auto-fit,10rem)]">
            {Object.entries(page.clients).map(([title, { img, url }], i) => (
              <li key={title}>
                <a
                  href={url || '#'}
                  target="_blank"
                  title={title}
                  className="shrink-0 size-[7.5rem] lg:size-40 hover:bg-zinc-300/25 active:bg-zinc-300/50 flex flex-col justify-center items-center"
                >
                  <Image
                    src={contentAsset(img)}
                    alt={title}
                    width={120}
                    height={120}
                    loading="lazy"
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 50}
                    className="object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="h-[20vh]" />
      </div>
    </main>
  );
}