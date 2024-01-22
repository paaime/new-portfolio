import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import SendIcon from '@/icons/SendIcon';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Paul-Arthur Aimé | À propos',
  description:
    'Apprenez en plus sur moi, mon parcours et mes envies en tant que développeur web.',
};

export default function About() {
  return (
    <main>
      <PageHeader
        title="À propos"
        description="Qui je suis et ce que je fais."
      />
      <div className="flex flex-col-reverse lg:flex-row gap-20 max-w-screen-lg mx-auto pb-16 lg:pb-48  items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold uppercase text-onyx dark:text-[#80808078]">
              Qui suis-je ?
            </h5>
            <p className="text-[#7D7D7D] dark:text-[#808080]">
              Je m&apos;appelle{' '}
              <span className="text-onyx dark:text-white">Paul-Arthur</span>, je
              suis passionné par le développement web et l&apos;informatique
              depuis tout petit. Je passe mon temps à apprendre de nouvelles
              technologies et à créer des projets.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold uppercase text-onyx dark:text-[#80808078]">
              Qu&apos;est-ce que je fais ?
            </h5>
            <p className="text-[#7D7D7D] dark:text-[#808080]">
              Je suis maintenant en{' '}
              <span className="text-onyx dark:text-white">
                freelance en tant que développeur web
              </span>
              , front-end et back-end. (React.js, Next.js, Node.js, TypeScript,
              WordPress). Je réalise aussi des projets personnels dans le but de
              toujours approfondir mes connaissances.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold uppercase text-onyx dark:text-[#80808078]">
              Qu&apos;est-ce que j&apos;ai fait ?
            </h5>
            <p className="text-[#7D7D7D] dark:text-[#808080]">
              Étant passionné depuis jeune par l&apos;informatique, j&apos;ai
              commencé à apprendre le développement web à l&apos;âge de 14 ans.
              J&apos;ai ensuite appris des frameworks comme React.js, Next.js
              ainsi que Node.js. Je suis ensuite entré à{' '}
              <span className="text-onyx dark:text-white">l&apos;École 42</span>{' '}
              qui a su m&apos;apprendre la rigueur, la constante remise en
              question et l&apos;entraide.
            </p>
          </div>
          <p className="text-[#7D7D7D] dark:text-[#808080] mt-10">
            N&apos;hésitez pas à me contacter par{' '}
            <a
              href="mailto:aimepaularthur@gmail.com"
              className="text-onyx dark:text-white underline underline-offset-2"
            >
              e-mail
            </a>
            , ou sur{' '}
            <a
              href="https://www.malt.fr/profile/paularthuraime"
              target="_blank"
              className="text-onyx dark:text-white underline underline-offset-2"
            >
              Malt.
            </a>{' '}
            Vous voulez voir les projets que j&apos;ai réalisé ? Consultez mes{' '}
            <Link
              href="/projects"
              className="text-onyx dark:text-white underline underline-offset-2"
            >
              projets
            </Link>
            , ou suivez moi sur{' '}
            <a
              href="https://www.linkedin.com/in/paul-arthur-aimé-a081b9252"
              target="_blank"
              className="text-onyx dark:text-white underline underline-offset-2"
            >
              LinkedIn.
            </a>
          </p>
          <Button
            className="w-full md:w-auto flex lg:hidden mt-24"
            type="primary"
            tag="a"
            href="/contact"
          >
            <SendIcon />
            Contact
          </Button>
        </div>
        <div className="flex flex-col self-start lg:items-center min-w-[300px] gap-24">
          <div className="bg-black border border-[#323232] rounded-xl w-3/4 lg:w-full py-[0px] lg:py-[28px]">
            <Image src="/img/logo.webp" width={500} height={500} alt="about" />
          </div>
          <Button
            tag="a"
            className="w-full md:w-auto hidden lg:flex"
            type="primary"
            href="/contact"
          >
            <SendIcon />
            Contact
          </Button>
        </div>
      </div>
    </main>
  );
}
