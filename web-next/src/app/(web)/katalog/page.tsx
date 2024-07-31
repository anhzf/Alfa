import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import Link from 'next/link';

export default async function KatalogPage() {
  const payload = await getPayloadHMR({ config });
  const result = await payload.find({ collection: 'products' });

  return (
    <main className="flex-1">
      <ul className="container grid grid-cols-5 gap-4">
        {result.docs.map((product) => (
          <li key={product.id} className="border rounded flex flex-col overflow-hidden">
            <h1>{product.title}</h1>
            <pre>{JSON.stringify(product)}</pre>
            <Link href={`/katalog/produk/${product.id}`} className="btn">
              Lihat detail
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}