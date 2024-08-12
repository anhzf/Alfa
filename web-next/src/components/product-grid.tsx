import ProductCard from '@/components/product-card';
import { getCms } from '@/lib';
import type { Media } from '@/payload-types';
import { contentAsset } from '@/utils/cms';
import type { Where } from 'payload';
import type { HTMLAttributes } from 'react';

export interface ProductGridProps extends HTMLAttributes<HTMLElement> {
  where: Where;
  limit?: number;
  sort?: string;
}

export default async function ProductGrid({ where, limit, sort }: ProductGridProps) {
  const cms = await getCms();
  const { docs } = await cms.find({
    collection: 'products',
    where,
    limit,
    sort,
  });

  return docs.length ? (
    // 16.625, 10 are inferred from ProductCard
    <ul className="grid justify-center gap-4 grid-cols-[repeat(auto-fit,10rem)] lg:grid-cols-[repeat(auto-fit,16.625rem)]">
      {docs.map((el, i) => (
        <li key={el.id}>
          <ProductCard
            data={{
              id: String(el.id),
              title: el.title,
              img: contentAsset((el.images![0]!.image as Media).url!),
            }}
            data-aos="fade-up"
            data-aos-delay={`${i * 25}`}
          />
        </li>
      ))}
    </ul>
  ) : (
    <div className="h-40 flex flex-col justify-center text-gray-400">
      Tidak ada data terkait
    </div>
  );
}