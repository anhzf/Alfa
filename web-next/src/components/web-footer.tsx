import Brand from '@/components/brand';
import Separator from '@/components/ui/separator';
import { CONTACTS, LOCATION } from '@/contents';
import Link from 'next/link';

const navigations = [
  { title: 'Beranda', href: '/' },
  { title: 'Tentang', href: '/tentang' },
  { title: 'Katalog', href: '/katalog' },
];

export default function WebFooter() {
  return (
    <footer className="bg-zinc-900">
      <div className="
      grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8 lg:p-4 px-4 py-8 lg:pb-6 max-w-screen-xl mx-auto
      [&_section]:flex [&_section]:flex-col [&_section]:px-2 [&_section]:py-4 [&_section]:gap-4
      ">
        <section className="p-0 lg:p-2 gap-2">
          <Brand expand className="data-[name]:*:text-white p-0 lg:px-2 lg:py-1 self-baseline" />
          <Separator className="text-white" />
        </section>

        <div className="row-span-2 col-span-3 flex flex-col lg:flex-row justify-end lg:gap-8">
          <section className="w-full lg:max-w-[24ch]">
            <h5 className="text-zinc-300 text-xs leading-4 font-bold">Navigasi</h5>

            <ul className="list-none text-white flex flex-col gap-2 [&_.btn]:-ml-2">
              {navigations.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="btn text-base lg:text-sm text-white leading-6 font-semibold">
                    ↗ {title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="w-full lg:max-w-24ch">
            <h5 className="text-zinc-300 text-xs leading-4 font-bold">
              Media Sosial
            </h5>

            <ul className="list-none text-white flex flex-col gap-2 [&_.btn]:-ml-2">
              {Object.entries(CONTACTS).map(([name, { title, href, icon: Icon }]) => (
                <li key={name}>
                  <a href={href} target="_blank" className="btn">
                    <Icon className="size-5 text-white mr-1.5" />

                    <span className="text-base lg:text-sm text-white leading-6 font-semibold">
                      {title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="w-full lg:max-w-24ch lg:p-2">
            <h5 className="text-zinc-300 text-xs leading-4 font-bold">
              Alamat
            </h5>

            <a href={LOCATION.url} target="_blank" className="btn tracking-normal text-base lg:text-sm text-white leading-6 font-semibold -ml-2">
              {LOCATION.address}
            </a>
          </section>
        </div>

        <section className="gap-2 justify-end">
          <hr className="bg-gray-700 h-px lg:hidden" />
          <p className="text-gray-300 text-xs leading-4 font-normal">
            &copy; 2024 ACM (CV. Alfa Cipta Mukti)
          </p>
        </section>
      </div>
    </footer>
  );
}