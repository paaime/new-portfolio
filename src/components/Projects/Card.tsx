import RightArrowIcon from '@/icons/RightArrowIcon';
import Image from 'next/image';
import { SpotlightCard } from '../Spotlight';

export default function ProjectCard({
  title,
  description,
  logo,
  illustration,
}: {
  title: string;
  description: string;
  logo: string;
  illustration: string;
}) {
  return (
    <SpotlightCard className="rounded-[32px]">
      <div className="cursor-pointer z-10 relative overflow-hidden flex w-full bg-light-card-bg dark:bg-onyx rounded-[32px] px-[24px] py-[32px] md:p-[60px] md:pr-0">
        <div className="flex flex-col mr-4 md:mr-10">
          <Image
            src={`/img/projects/icons/${logo}`}
            width={70}
            height={70}
            alt={title}
            className="object-contain h-[70px] w-[70px]"
          />
          <h4 className="text-black dark:text-white font-extrabold text-xl md:text-3xl my-4">
            {title}
          </h4>
          <p className="text-[15px] md:text-base text-dark-gray">
            {description}
          </p>
          <div className="mt-[16px] md:mt-auto flex items-center gap-2 cursor-pointer hover:underline group/link">
            <p className="text-base md:text-lg font-medium dark:text-white group-hover/link:-mr-1 transition-all">
              Voir plus
            </p>
            <RightArrowIcon />
          </div>
        </div>
        <Image
          src={`/img/projects/illustration/${illustration}`}
          width={457}
          height={565}
          alt={title}
          className="hidden md:block rounded-xl -my-[60px] mr-0 h-full w-[300px] lg:w-[457px] self-center"
        />
      </div>
    </SpotlightCard>
  );
}
