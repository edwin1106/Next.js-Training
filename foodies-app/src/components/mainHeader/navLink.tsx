'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './navLink.module.css';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <>
      <Link
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
