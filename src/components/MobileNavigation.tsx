'use client';

import ContactIcon from '@/icons/ContactIcon';
import HomeIcon from '@/icons/HomeIcon';
import ProjectsIcon from '@/icons/ProjectsIcon';
import UserIcon from '@/icons/UserIcon';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SkillsIcon from '@/icons/SkillsIcon';

export default function MobileNavigation() {
  const pathname = usePathname();
  const activeClass = 'bg-dark-black dark:bg-dark-white rounded-xl';
  return (
    <nav
      className="block md:hidden bg-blur-white dark:bg-blur-dark rounded-xl sticky bottom-4 z-10"
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <ul className="px-[16px] py-[10px] flex justify-between items-center">
        <li
          className={`${
            pathname === '/' && activeClass
          } w-full h-[40px] flex justify-center items-center transition-all duration-300`}
        >
          <Link href="/" aria-label='Home'>
            <HomeIcon />
          </Link>
        </li>
        <li
          className={`${
            pathname === '/about' && activeClass
          } w-full h-[40px] flex justify-center items-center transition-all duration-300`}
        >
          <Link href="/about" aria-label='About'>
            <UserIcon />
          </Link>
        </li>
        <li
          className={`${
            pathname === '/projects' && activeClass
          } w-full h-[40px] flex justify-center items-center transition-all duration-300`}
        >
          <Link href="/projects" aria-label='Projets'>
            <ProjectsIcon />
          </Link>
        </li>
        <li
          className={`${
            pathname === '/skills' && activeClass
          } w-full h-[40px] flex justify-center items-center transition-all duration-300`}
        >
          <Link href="/skills" aria-label='Compétences'>
            <SkillsIcon />
          </Link>
        </li>
        <li
          className={`${
            pathname === '/contact' && activeClass
          } w-full h-[40px] flex justify-center items-center transition-all duration-300`}
        >
          <Link href="/contact" aria-label='Contact'>
            <ContactIcon />
          </Link>
        </li>
        <li className="w-full h-[40px] flex justify-center items-center">
          <ThemeSwitch isMobile={true} />
        </li>
      </ul>
    </nav>
  );
}
