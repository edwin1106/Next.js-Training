import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import NavLink from './navLink';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href={'/'}>
        <Image src={logoImg} alt={'A plate with food on it'} priority />
        {'NextLevel Food'}
      </Link>
      <nav className={classes.nav}>
        <NavLink href="/meals"> Browse Meals</NavLink>
        <NavLink href="/community"> Foodies Community</NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
