import GithubIcon from '@/icons/GithubIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import MaltIcon from '@/icons/MaltIcon';
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="max-w-screen-lg mx-auto md:flex hidden h-[60px] items-center justify-between bg-white/25 dark:bg-onyx/30 p-[16px] rounded-[12px] border dark:border-0 border-white/25 mt-5 "
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <nav>
        <ul className="flex items-center gap-[40px] font-medium dark:text-light-gray">
          <li>
            <Link href={'/'} aria-label="Home">
              <Image src="/img/logo.webp" alt="Logo" width={40} height={40} />
            </Link>
          </li>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/projects">Projets</Link>
          </li>
          <li>
            <Link href="/skills">Compétences</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-[24px]">
        <a
          href="https://www.malt.fr/profile/paularthuraime"
          target="_blank"
          aria-label="Malt"
        >
          <MaltIcon />
        </a>
        <a href="https://github.com/paaime" target="_blank" aria-label="Github">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-arthur-aimé-a081b9252"
          target="_blank"
          aria-label="Linkedin"
        >
          <LinkedinIcon />
        </a>
        <div className="h-[24px] w-[1px] bg-light-gray" />
        <ThemeSwitch isMobile={false} />
      </div>
    </header>
  );
}
