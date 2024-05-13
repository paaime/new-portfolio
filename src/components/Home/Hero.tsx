import Image from 'next/image';
import Button from '../Button';

export default function Hero() {
  return (
    <div className="hero justify-center max-h-[900px] !md:max-h-[650px] flex-col-reverse gap-12 md:gap-0 mb-20 md:mb-0  md:flex-row flex items-center">
      <div className="md:w-3/4">
        <h1 className="text-[48px] md:text-[80px] leading-[50px] md:leading-[90px] font-extrabold text-black dark:text-white">
          Paul-Arthur
          <span className="text-dark-gray"> Aimé</span>
        </h1>
        <p className="text-dark-gray font-medium mt-[20px] mb-[30px] md:mt-[40px] md:mb-[50px] md:text-2xl">
          Développeur web fullstack, étudiant de{' '}
          <span className="text-black dark:text-white">l&apos;École 42.</span>
          <br />
          Mon objectif est de donner vie aux idées à travers des applications
          web modernes.
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <Button type="primary" tag="a" href="/projects">
            Mes projets
          </Button>
          <Button type="secondary" tag="a" href="/contact">
            Contact
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/img/logo.webp"
          width={300}
          height={300}
          alt="logo"
          className="rounded-full h-[175px] w-auto md:h-full md:w-[300px]"
        />
      </div>
    </div>
  );
}
