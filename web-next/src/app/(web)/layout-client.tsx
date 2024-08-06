'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function RootLayoutClient() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (<></>);
}