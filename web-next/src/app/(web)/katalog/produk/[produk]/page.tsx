import { MdiWhatsapp } from '@/components/icons/mdi-whatsapp';
import ProductCard from '@/components/product-card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Separator from '@/components/ui/separator';
import { CONTACTS } from '@/contents';
import type { Category, Media } from '@/payload-types';
import { toNextError } from '@/utils/error';
import { StarIcon } from '@heroicons/react/24/solid';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import Link from 'next/link';


export default async function ProdukPage({ params }: { params: { produk: string } }) {
  const payload = await getPayloadHMR({ config });
  const product = await payload.findByID({
    collection: 'products',
    id: params.produk,
  }).catch(toNextError);

  return (
    <main className="flex-[1_0] flex flex-col items-center [--container-width:theme(screens.2xl)]">
      <div className="container flex px-2 pt-8 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Beranda</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/katalog">
                  Katalog
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/katalog?category=${(product.category as Category).id}`}>
                {((product.category as Category)).title}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Link href={`/katalog/produk/${product.id}`}>
                  {product.title}
                </Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="container flex flex-col lg:flex-row gap-4 px-2 py-8">
        <div className="flex-[1_0] lg:sticky top-5 h-min grid grid-cols-3 auto-rows-[20vh] gap-x-3 gap-y-4">
          <div className="col-span-3 row-span-2">
            <img src="https://placehold.co/500x500" alt="" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="https://placehold.co/500x500" alt="" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="https://placehold.co/500x500" alt="" className="size-full object-cover" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="grow flex gap-1">
              <button type="button" aria-label="Gambar sebelumnya" className="grow bg-gray-100 hover:bg-gray-200/75 active:bg-gray-200 text-gray-500 disabled:text-gray-300 flex flex-col justify-center items-center">
                <ChevronLeftIcon className="size-6" />
              </button>
              <button type="button" aria-label="Gambar selanjutnya" className="grow bg-gray-100 hover:bg-gray-200/75 active:bg-gray-200 text-gray-500 disabled:text-gray-300 flex flex-col justify-center items-center">
                <ChevronRightIcon className="size-6" />
              </button>
            </div>

            <div className="text-gray-300">
              +6 gambar lainnya
            </div>
          </div>
        </div>

        <div className="flex-[1_0] flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl text-gray-900 font-bold">
              {product?.title}
            </h1>

            <div className="flex justify-between lg:justify-start gap-8">
              <div className="flex items-end gap-2">
                <span className="text-gray-500 text-xs lg:text-sm mb-0.5">
                  terjual
                </span>
                <span className="text-gray-700 lg:text-xl font-medium">
                  10.000+
                </span>
              </div>

              <div className="flex gap-2">
                <StarIcon className="self-center size-4 lg:size-5 text-amber-400" />
                <span className="text-xl text-gray-700">4.9</span>
                <span className="text-sm text-gray-500">201 Ulasan</span>
              </div>
            </div>

            <a
              href={CONTACTS.whatsapp.href}
              target="_blank"
              className="btn btn--filled !bg-[#0cc143] hover:!bg-[#0cc143]/80 active:!bg-[#0cc143]/90"
            >
              <MdiWhatsapp className="size-6" />
              Pesan Sekarang
            </a>
          </div>

          <Separator className="h-px" />

          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-4">
              <h2 className="lg:text-base text-gray-700 font-medium">
                Deskripsi
              </h2>

              <div className="text-gray-600 prose prose-gray lg:prose-lg">
                {JSON.stringify(product.description)}
                {/* <p>Meja keren diimpor langsung dari desa Konoha, Kutub Utara. Didesain langsung oleh CEO dari perusahaan raksasa microsoft menjadikan anda tercengang sampai terbahak-bahak.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus cursus tincidunt mi eu sapien fringilla purus ultrices. Faucibus volutpat adipiscing amet commodo faucibus sit. Velit adipiscing placerat morbi quis consequat dictum nisl enim, consequat. Id et vel, ipsum blandit libero eleifend. Quis lectus dapibus sit facilisi consequat, tortor, ipsum.</p> */}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 pb-8">
              <h2 className="lg:text-base text-gray-700 font-medium">
                Spesifikasi
              </h2>

              <div className="lg:text-lg text-gray-600">
                <table className="[&_th]:w-[12ch] [&_th]:text-gray-500 [&_th]:text-left [&_th]:font-normal [&_td]:text-gray-600">
                  <tbody>
                    {(product.specs || []).map(({ id, name, value }) => (
                      <tr key={id}>
                        <th>{name}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <ul className="flex gap-4">
              {[
                'Mebel',
                'Mewah',
                'Ergonomis',
              ].map((tag) => (
                <li key={tag}>
                  <Link href={`/katalog?tag=${tag}`} className="rounded-full bg-gray-100 hover:bg-gray-200/75 active:bg-gray-200 text-gray-600 px-3 py-0.5">
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-3 px-2 py-8 bg-zinc-50">
        <h2 className="text-lg text-zinc-900 font-bold leading-7">
          Produk Terkait
        </h2>

        <hr className="w-20 h-[3px] bg-zinc-900" />

        <ul className="grid grid-cols-[repeat(auto-fit,theme(size.40))] justify-center gap-4 w-full overflow-hidden p-2 max-w-screen-2xl">
          {Array.from({ length: 5 }, (_, i) => (
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
                dense
                className="shrink-0 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${i * 25}ms` }}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 p-2">
          <Link href="/katalog" className="btn">
            ←  Kembali ke katalog
          </Link>
        </div>
      </section>
    </main>
  )
}