'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, type ChangeEvent } from 'react';

interface QueryBarSortProps {
  value?: string;
}

export default function QueryBarSort({ value }: QueryBarSortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', e.target.value);

    router.push(`${pathname}?${params}`);
  }, [router, pathname, searchParams]);

  return (
    <div className="w-full h-10 flex items-center gap-2 px-2 bg-white shadow-sm">
      <span className="text-xs text-zinc-700">Urut berdasarkan</span>
      <select
        value={value}
        name="sort"
        className="text-sm text-zinc-700 font-semibold bg-transparent"
        onChange={onChange}
      >
        <option value="popular">Paling laris</option>
        <option value="newer">Terbaru</option>
        <option value="cheapest">Termurah</option>
        <option value="expensive">Termahal</option>
      </select>
    </div>
  );
}