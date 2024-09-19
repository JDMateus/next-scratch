import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <h1>This is the contact page</h1>
      <nav className='m-10'>
        <ul>
          <li>
            <Link href='home'>Home</Link>
          </li>
          <li>
            <Link href='about'>About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
