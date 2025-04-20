'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  lang: string;
}

export default function Navigation({ lang }: NavigationProps) {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const isActive = (path: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    return currentPath === path || (path === '' && currentPath === '');
  };

  const navItems = [
    { key: 'home', path: '', label: t('nav.home') },
    { key: 'about', path: 'about', label: t('nav.about') },
    { key: 'blog', path: 'blog', label: t('nav.blog') },
  ];

  return (
    <nav className="flex items-center space-x-6">
      <div>Logo Here</div>

      {navItems.map((item) => (
        <Link
          key={item.key}
          href={`/${lang}/${item.path}`}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive(item.path)
              ? 'text-primary font-semibold'
              : 'text-muted-foreground'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
