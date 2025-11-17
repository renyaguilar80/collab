import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n-config';

interface LogoProps {
  className?: string;
  lang: Locale;
}

export default function Logo({ className = '', lang }: LogoProps) {
  return (
    <Link
      href={`/${lang}`}
      className={`navbar-brand text-primary-orange fw-bold ${className}`}
      style={{ lineHeight: 0 }}
    >
      <Image
        src='/collab/layout/logo.svg'
        alt='CollabTranslation Logo'
        width={220}
        height={60}
        style={{ display: 'block' }}
      />
    </Link>
  );
}
