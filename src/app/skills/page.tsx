import SkillCard from '@/components/Card/SkillCard';
import PageHeader from '@/components/PageHeader';
import Spotlight from '@/components/Spotlight';
import { skills } from '@/data/Skills';

export const metadata = {
  title: 'Paul-Arthur Aimé | Compétences',
  description: 'Découvrez les différentes compétences que j’ai acquises.',
};

export default function Skills() {
  return (
    <main>
      <PageHeader
        title="Compétences"
        description="Les différentes compétences que j'ai acquises."
      />
      <div className="flex flex-col gap-[50px] md:gap-[80px] max-w-screen-lg mx-auto pb-16 lg:pb-48">
        {skills.map((skill, index) => (
          <div className="flex flex-col gap-[16px] md:gap-[32px]" key={index}>
            <h2 className="text-[32px] md:text-5xl font-bold text-light-gray dark:text-[#808080]">
              {skill.title}
            </h2>
            <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center group">
              {skill.skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </Spotlight>
          </div>
        ))}
      </div>
    </main>
  );
}
