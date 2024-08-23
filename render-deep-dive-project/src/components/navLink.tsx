'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? 'active' : undefined} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
