'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Reads ?service= from the URL and pre-selects the matching option in the
 * service dropdown. Matches the behaviour of the original contact.html.
 */
export default function ContactServicePrefill() {
  const params = useSearchParams();
  useEffect(() => {
    const svc = params.get('service');
    if (!svc) return;
    const sel = document.getElementById('service') as HTMLSelectElement | null;
    if (!sel) return;
    const match = Array.from(sel.options).find((o) => o.value === svc);
    if (match) sel.value = svc;
  }, [params]);
  return null;
}
