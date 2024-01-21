import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/Projects/Card';
import Spotlight from '@/components/Spotlight';
import { projects } from '@/data/Projects';
import SendIcon from '@/icons/SendIcon';
import StarIcon from '@/icons/StarIcon';

export const metadata = {
  title: 'Paul-Arthur Aimé | Projets',
  description:
    'Découvrez les différents projets que j’ai réalisé, de la conception à la mise en production.',
};

export default function Projects() {
  return (
    <main>
      <PageHeader
        title="Projets"
        description="Les différents projets que j'ai réalisé."
      />
      <Spotlight className="flex flex-col gap-4 max-w-screen-lg mx-auto pb-16 lg:pb-48  items-center group">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <div
          className="flex flex-col w-full bg-light-card-bg dark:bg-onyx dark:border-[#383737] rounded-[32px] py-[42px] px-[18px] md:px-[42px] md:py-[84px] items-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='32' ry='32' stroke='%2380808080' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`,
          }}
        >
          <StarIcon />
          <h4 className="text-black dark:text-white font-extrabold text-xl md:text-3xl my-4 uppercase">
            Votre projet ici ?
          </h4>
          <p className="text-[15px] md:text-base text-dark-gray">
            Transformons votre idée en réalité.
          </p>
          <Button tag="a" href="/contact" className="mt-20" type="primary">
            <SendIcon />
            Contact
          </Button>
        </div>
      </Spotlight>
    </main>
  );
}
