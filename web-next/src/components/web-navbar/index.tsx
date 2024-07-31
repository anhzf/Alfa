'use client';

import Brand from '@/components/brand';
import NavbarSearch from '@/components/web-navbar/search';
import { CONTACTS } from '@/contents';
import { cn } from '@/utils/ui';
import { Transition } from '@headlessui/react';
import { Bars3CenterLeftIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';

const menus = [
  { title: 'Beranda', href: '/' },
  { title: 'Tentang', href: '/tentang' },
  { title: 'Katalog', href: '/katalog' },
];

export default function WebNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [highlightedDrawerMenuText, setHighlightedDrawerMenuText] = useState('Home');

  return (
    <nav className="sticky top-0 z-10 bg-white p-4 flex justify-between items-center border-b border-zinc-100 shadow-sm transition-shadow">
      <Transition show={isDrawerOpen}>
        <ul className="absolute h-[calc(100vh-100%)] top-full inset-x-0 bg-white overflow-hidden flex flex-col justify-center items-center gap-8 p-4 pb-18 origin-top data-[closed]:scale-y-0 transition-transform">
          {isDrawerOpen && (
            <div
              className="absolute font-bold pointer-events-none text-8xl text-zinc-500/10 tracking-0.5em uppercase animate-in zoom-in duration-700"
              onAnimationEnd={ev => (ev.target as HTMLDivElement).classList.remove('animate__zoomIn')}>
              {highlightedDrawerMenuText}
            </div>
          )}

          {menus.map(({ title, href }) => (
            <li key={title} className="text-zinc-700 text-lg uppercase tracking-[0.3em] transition-all">
              <Link href={href} className="btn" onClick={() => (setIsDrawerOpen(false), setHighlightedDrawerMenuText(title))}>
                {title}
              </Link>
            </li>
          ))}

          <li>
            <a
              href={CONTACTS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-zinc-700 text-lg uppercase tracking-[0.3em] transition-all"
            >
              Hubungi kami
            </a>
          </li>
        </ul>
      </Transition>

      <div className="flex lg:hidden">
        <button aria-label="Toggle Menu" className="btn btn--round text-zinc-900" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          {isDrawerOpen
            ? (<XMarkIcon className="size-6 lg:size-5" />)
            : (<Bars3CenterLeftIcon className="size-6 lg:size-5" />)}
        </button>
      </div>

      <div className="lg:px-4">
        <Brand className={cn('transition-transform duration-300 ease-[cubic-bezier(0.34,1.16,0.64,1)]', { 'translate-y-[calc(100vh-200%)]': isDrawerOpen })} />
      </div>

      <ul className="hidden lg:flex pl-6 pr-4 gap-4">
        {menus.map(({ title, href }) => (
          <li key={title}>
            <Link href={href} className="btn">
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex lg:px-4 gap-4">
        <NavbarSearch />

        <a
          href={CONTACTS.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex btn btn--filled"
        >
          <PhoneIcon className="size-4" />
          <span>Hubungi kami</span>
        </a>
      </div>
    </nav >
  );
}