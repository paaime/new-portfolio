import Button from '@/components/Button';
import Hero from '@/components/Home/Hero';
import { knowMeCards } from '@/data/KnowMe';
import ProjectCard from '@/components/Projects/Card';
import SendIcon from '@/icons/SendIcon';
import KnowMeCard from '@/components/KnowMe/Card';
import { projects } from '@/data/Projects';
import Spotlight from '@/components/Spotlight';

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <Hero />
      <h2 className="text-onyx dark:text-white font-bold text-[32px] md:text-5xl mb-10">
        Quelques projets
      </h2>
      <Spotlight className="flex flex-col gap-8 mb-24 group">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Spotlight>
      <h2 className="text-onyx dark:text-white font-bold text-[32px] md:text-5xl mb-10">
        Qui suis-je ?
      </h2>
      <Spotlight className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24 group">
        {knowMeCards.map((card, index) => (
          <KnowMeCard key={index} {...card} />
        ))}
      </Spotlight>
      <div className="flex justify-between items-center flex-col md:flex-row mb-24">
        <div className="flex flex-col gap-0 md:gap-4 w-full text-center md:text-left md:w-1/2 mb-5 md:mb-0">
          <h3 className="text-onyx dark:text-white font-bold text-[32px] md:text-5xl">
            Travaillons ensemble
          </h3>
          <p className="text-[15px] md:text-xl text-dark-gray">
            Vous avez un projet ? Vous souhaitez collaborer avec moi ?
            N&apos;hésitez pas à me contacter.
          </p>
        </div>
        <Button
          tag="a"
          href="/contact"
          className="w-full md:w-auto"
          type="primary"
        >
          <SendIcon />
          Contact
        </Button>
      </div>
    </main>
  );
}
