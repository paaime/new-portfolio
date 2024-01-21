import Image from 'next/image';
import { SpotlightCard } from '../Spotlight';

export default function SkillCard({
  name,
  type,
  image,
}: {
  name: string;
  type: string;
  image: string;
}) {
  return (
    <SpotlightCard className="rounded-[16px] md:rounded-[32px]">
      <div className="cursor-pointer z-10 relative overflow-hidden flex items-center md:flex-col w-full bg-light-card-bg dark:bg-onyx rounded-[16px] md:rounded-[32px] p-[14px] md:p-[24px] md:pt-[92px]">
        <Image
          src={`/img/skills/${image}`}
          width={114}
          height={114}
          alt={name}
          className=" h-[60px] w-[60px] md:h-[114px] md:w-[114px] md:mb-[40px] mr-[16px] md:mr-0 object-contain"
        />
        <div className="flex justify-between w-full items-center">
          <h4 className="text-black dark:text-white font-semibold text-base md:text-xl">
            {name}
          </h4>
          <p
            className="text-[11px] md:text-sm text-dark-gray text-center bg-white/70 dark:bg-onyx px-[12px] py-[6px] rounded-[26px] border border-white/25 dark:border-[#272525]"
            style={{
              letterSpacing: '-0.084px',
            }}
          >
            {type}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}
