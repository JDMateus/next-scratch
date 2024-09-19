import Link from 'next/link';

export default function RootPage() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='contact'>Contact us</Link>
        </li>
        <li>
          <Link href='home'>Home</Link>
        </li>
        <li>
          <Link href='about'>About us</Link>
        </li>
      </ul>
    </nav>
  );
}
