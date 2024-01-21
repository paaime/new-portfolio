import Image from 'next/image';
import Link from 'next/link';
import { SpotlightCard } from '../Spotlight';

export default function KnowMeCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <SpotlightCard className="rounded-[32px]">
      <Link
        href={link}
        className="z-10 relative overflow-hidden flex items-center flex-col w-full bg-light-card-bg dark:bg-onyx rounded-[32px] px-[24px] pt-[32px] md:px-[24px] md:pt-[60px]"
      >
        <h4 className="text-black dark:text-white font-extrabold text-2xl md:text-3xl mb-4">
          {title}
        </h4>
        <p className="text-[15px] md:text-base text-dark-gray text-center">
          {description}
        </p>
        <Image
          src={`/img/know-me/${image}`}
          width={900}
          height={365}
          alt={title}
          className="rounded-b-[32px] h-auto"
          style={{
            maxWidth: 'calc(100% + 48px)',
            objectFit: 'cover',
          }}
        />
      </Link>
    </SpotlightCard>
  );
}
