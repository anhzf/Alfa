import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import Link from 'next/link';

export default async function KatalogPage() {
  const payload = await getPayloadHMR({ config });
  const result = await payload.find({ collection: 'products' });

  return (
    <ul>
      {result.docs.map((product) => (
        <li key={product.id}>
          <h1>{product.title}</h1>
          <p>{String(product.description)}</p>
          <p>{product.price}</p>
          <Link href={`/katalog/produk/${product.id}`}>Lihat detail</Link>
        </li>
      ))}
    </ul>
  );
}