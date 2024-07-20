'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';

export default function NavbarSearch() {
  const router = useRouter();

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const target = ev.target as HTMLFormElement;
    const q = target.q.value;

    if (q) {
      router.push(`/search?q=${q}`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-1">
      <div className="px-3 py-1.5 flex items-center gap-1 rounded-full hover:bg-zinc-200/60 focus-within:bg-zinc-200/40 ring-0 focus-within:ring-2 ring-offset-1 ring-transparent focus-within:ring-zinc-500 transition">
        <input
          type="search"
          name="q"
          placeholder="Cari sesuatu disini..."
          className="hidden lg:inline-block text-sm text-zinc-700 bg-transparent border-b border-zinc-300 outline-none"
        />
      </div>
      <button aria-label="search" type="submit" className="btn btn--round text-zinc-500">
        <MagnifyingGlassIcon className="size-6 lg:size-5" />
      </button>
    </form>
  );
}