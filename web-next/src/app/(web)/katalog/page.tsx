import ProductGrid from '@/components/product-grid';
import { getCms } from '@/lib';
import { cn } from '@/utils/ui';
import Link from 'next/link';
import { Suspense } from 'react';
import QueryBarSort from './query-bar-sort';

export default async function KatalogPage({ searchParams: search }: { searchParams: Record<string, string | string[]> }) {
  const cms = await getCms();
  const { docs: categories } = await cms.find({ collection: 'categories' });

  return (
    <main className="flex-[1_0] flex flex-col">
      <section className="bg-zinc-50 px-2 py-8 flex flex-col gap-3 overflow-hidden">
        <h3 className="text-lg text-zinc-900 text-left font-bold leading-7">
          Katalog Produk
        </h3>
        <hr className="w-20 h-[3px] bg-zinc-900" />

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <ul className="overflow-x-auto flex items-center gap-2 px-1">
              {categories.map((el) => (
                <li key={el.id}>
                  <Link
                    href={`/katalog?${new URLSearchParams({ ...search, kategori: el.id } as any)}`}
                    className={cn(
                      'text-xs text-zinc-700 font-semibold px-4 py-2 flex justify-center items-center gap-2.5 bg-white hover:bg-zinc-100 border border-zinc-200 whitespace-nowrap',
                      { 'bg-zinc-200 text-zinc-900 shadow-inner': search.kategori === String(el.id) },
                    )}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div v-if="query" className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">hasil pencarian:</span>
          <span className="text-sm text-zinc-700 font-medium">{{ query }}</span>
          <button className="btn btn--round" @click="query = ''">
            <XMarkIcon className="w-5 h-5 text-zinc-300" />
          </button>
        </div> */}

          <QueryBarSort value={search.sort as string} />
        </div>

        <Suspense
          fallback={<div className="flex flex-col justify-center h-40">Loading...</div>}
        >
          <ProductGrid where={{}} limit={12} />
        </Suspense>

        <div className="h-[25vh]" />
      </section>
    </main >
  );
}