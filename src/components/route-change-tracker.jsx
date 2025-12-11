// components/RouteChangeTracker.jsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log('Navigated to:', url, '\nattempting to fetch');
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/counter/${encodeURIComponent(url)}`).then((res) => {
        if (res.ok) {
            console.log('fetch to counter update succesful.')
        } else {
            console.log('fetch to counter update failed.')
        }
    })
  }, [pathname, searchParams]); 

  return null;
}
