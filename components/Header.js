import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../images/gus.jpg'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
      <Image src={profilePic} width={384} height={512} alt="Picture of Gus"/> <br />
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
