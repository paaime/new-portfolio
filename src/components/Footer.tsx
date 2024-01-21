import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-light-black dark:border-dark-white mx-[-20px] px-[20px]">
      <div className="flex flex-col-reverse md:flex-row justify-between py-11 max-w-screen-lg mx-auto">
        <div className="flex flex-col mt-7 md:mt-0">
          <Image
            src="/img/logo.webp"
            width={90}
            height={90}
            alt="logo"
            className="rounded-full"
          />
          <p className="text-sm text-black dark:text-gray font-medium mt-4">
            Merci d&apos;être descendu jusqu&apos;ici !
          </p>
          <p className="text-sm text-black dark:text-gray md:mt-auto mt-7">
            © 2024 Paul-Arthur Aimé. Tous droits réservés.
          </p>
        </div>
        <div className="flex gap-5 md:gap-28 flex-col md:flex-row">
          <div className="flex flex-col">
            <p className="text-black dark:text-white font-bold mb-6 md:mb-7">
              Liens
            </p>
            <Link
              href="/about"
              className="text-black dark:text-light-gray mb-2 md:mb-4"
            >
              À propos
            </Link>
            <Link
              href="/projects"
              className="text-black dark:text-light-gray mb-2 md:mb-4"
            >
              Projets
            </Link>
            <Link
              href="/skills"
              className="text-black dark:text-light-gray mb-2 md:mb-4"
            >
              Compétences
            </Link>
            <Link
              href="/contact"
              className="text-black dark:text-light-gray mb-2 md:mb-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
