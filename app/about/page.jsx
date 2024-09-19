import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <h1>This is the about page</h1>
      <nav className='m-10'>
        <ul>
          <li>
            <Link href='home'>Home</Link>
          </li>
          <li>
            <Link href='contact'>Contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
