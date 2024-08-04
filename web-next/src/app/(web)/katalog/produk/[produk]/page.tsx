import { MdiWhatsapp } from '@/components/icons/mdi-whatsapp';
import ProductGrid from '@/components/product-grid';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Separator from '@/components/ui/separator';
import { SITE_NAME } from '@/constants';
import { CONTACTS } from '@/contents';
import { getCms } from '@/lib';
import type { Category, Product } from '@/payload-types';
import { toNextError } from '@/utils/error';
import escapeHTML from 'escape-html';
import Link from 'next/link';
import { Fragment } from 'react';
import { Text } from 'slate';
import ProductCarousel from './product-carousel';

interface Props {
  params: {
    produk: string;
  };
}

const cache = new Map<string, string>();

const getProduct = async (id: string): Promise<Product> => {
  if (cache.has(id)) {
    return JSON.parse(cache.get(id) as string);
  }

  const cms = await getCms();
  const result = await cms.findByID({
    collection: 'products',
    id,
  }).catch(toNextError);

  cache.set(id, JSON.stringify(result));

  return result;
};

// https://payloadcms.com/docs/beta/rich-text/slate#generating-html
const serialize = (content: Record<string, any>[]) => {
  return content.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if ((node as any).bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if ((node as any).code) {
        text = <code key={i}>{text}</code>;
      }

      if ((node as any).italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return <h1 key={i}>{serialize(node.children)}</h1>;
      // Iterate through all headings here...
      case 'h6':
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case 'blockquote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>;
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.produk);

  return {
    title: `${product.title} | ${SITE_NAME}`,
    description: product.description,
    image: product.images?.[0]?.image,
  };
}

export default async function ProdukPage({ params }: Props) {
  const product = await getProduct(params.produk);

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
        <ProductCarousel
          items={product.images?.map((el) => el.image) as { id: number, url: string, alt: string }[]}
          className="flex-[1_0] lg:sticky top-24 h-min"
        />

        <div className="flex-[1_0] flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl text-gray-900 font-bold">
              {product?.title}
            </h1>

            {/* TODO: Ensure feature wether to add stats or not */}
            {/* <div className="flex justify-between lg:justify-start gap-8">
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
            </div> */}

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
                {serialize(product.description as any[])}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 pb-8">
              <h2 className="lg:text-base text-gray-700 font-medium">
                Spesifikasi
              </h2>

              <div className="lg:text-lg text-gray-600">
                <table className="[&_th]:w-[16ch] [&_th]:text-gray-500 [&_th]:text-left [&_th]:font-normal [&_td]:text-gray-600">
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
              {/* TODO: Decide to wether add tag property or not */}
              {[(product.category as Category).title].map((tag) => (
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

        <ProductGrid
          where={{
            // TODO: Add related tags filter when tag feature is added
            and: [
              { category: { equals: (product.category as Category).id } },
              { id: { not_equals: product.id } },
            ]
          }}
          limit={5}
        />

        <div className="flex flex-col items-center gap-2 p-2">
          <Link href="/katalog" className="btn">
            ←  Kembali ke katalog
          </Link>
        </div>
      </section>
    </main>
  )
}