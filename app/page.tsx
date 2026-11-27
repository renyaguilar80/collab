'use client';

import { useEffect } from 'react';
import { i18n } from '@/i18n-config';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const target = `${basePath}/${i18n.defaultLocale}/`;

export default function RootPage() {
  useEffect(() => {
    // Redireciona de "/" para o idioma padrão (ex.: /en/)
    window.location.replace(target);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* Fallback sem JavaScript */}
      <meta httpEquiv='refresh' content={`0; url=${target}`} />
      <p>
        Redirecting... <a href={target}>Click here</a>
      </p>
    </div>
  );
}
