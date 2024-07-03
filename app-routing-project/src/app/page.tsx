import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={'/about'}>Navigate to About Page</Link>
        </li>
        <li>
          <Link href={'/blog'}>Navigate to Blog Page</Link>
        </li>
      </ul>
    </>
  );
}
