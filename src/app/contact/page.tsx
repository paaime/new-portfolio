import ContactForm from '@/components/Contact/ContactForm';
import PageHeader from '@/components/PageHeader';
import GithubIcon from '@/icons/GithubIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import MailIcon from '@/icons/MailIcon';
import MaltIcon from '@/icons/MaltIcon';

export const metadata = {
  title: 'Paul-Arthur Aimé | Contact',
  description:
    'Vous avez un projet ? Vous souhaitez collaborer avec moi ? N’hésitez pas à me contacter.',
};

export default function Contact() {
  return (
    <main>
      <PageHeader
        title="Contact"
        description="Construisons quelque chose ensemble."
      />
      <div className="flex flex-col gap-4 max-w-screen-lg mx-auto pb-16 lg:pb-48  items-center">
        <ContactForm />
        <div className="flex gap-8 items-center mt-20">
          <a href="mailto:aimepaularthur@gmail.com" aria-label="Mail">
            <MailIcon className="w-10 h-10" />
          </a>
          <a
            href="https://www.malt.fr/profile/paularthuraime"
            target="_blank"
            aria-label="Malt"
          >
            <MaltIcon className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-arthur-aimé-a081b9252"
            target="_blank"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/paaime"
            target="_blank"
            aria-label="Github"
          >
            <GithubIcon className="w-10 h-10" />
          </a>
        </div>
      </div>
    </main>
  );
}
