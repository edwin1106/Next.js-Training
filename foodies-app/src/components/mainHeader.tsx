import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';

const MainHeader = () => {
  return (
    <header>
      <Link href={'/'}>
        <Image
          src={logoImg.src}
          alt={'A plate with food on it'}
          width={200}
          height={200}
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/meals'}>Browse Meals</Link>
          </li>
          <li>
            <Link href={'/community'}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
