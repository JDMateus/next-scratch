import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>This is the home page</h1>
      <nav className='m-10'>
        <ul>
          <li>
            <Link href='contact'>Contact us</Link>
          </li>
          <li>
            <Link href='about'>About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
