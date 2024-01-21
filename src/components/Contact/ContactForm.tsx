'use client';

import { useRef } from 'react';
import Button from '../Button';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_3rs5h2q',
        'template_9m3dpb5',
        form.current,
        'ku9J1F3V7UmgJonl3'
      )
      .then(
        (result) => {
          toast.success('Message envoyé !');
        },
        (error) => {
          toast.error('Une erreur est survenue, veuillez réessayer.');
        }
      );
  };
  return (
    <div
      className="w-full bg-light-card-bg dark:bg-onyx rounded-xl border border-light-card-border dark:border-dark-card-border"
      style={{
        boxShadow: '0px 12px 30px 0px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Header */}
      <div className="flex p-4 items-center border-b border-light-card-border dark:border-dark-card-border">
        <div className="flex gap-2">
          <div className="h-[12px] w-[12px] bg-[#F63636] border border-[#D62929] rounded-full" />
          <div className="h-[12px] w-[12px] bg-[#F6C136] border border-[#CEA435] rounded-full" />
          <div className="h-[12px] w-[12px] bg-[#68F636] border border-[#53CC28] rounded-full" />
        </div>
        <p className="text-onyx dark:text-white font-medium mx-auto">
          Nouveau message
        </p>
      </div>
      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col px-[16px] md:px-[32px] py-[10px]"
      >
        <div className="flex">
          <label
            htmlFor="email"
            className="text-sm md:text-base font-medium text-onyx dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Entrer votre email"
            className="w-full text-sm md:text-base ml-3 bg-transparent placeholder:text-dark-gray placeholder:dark:text-gray focus:outline-none"
          />
        </div>
        <div className="w-full h-[1px] bg-light-gray dark:bg-dark-white my-4" />
        <div className="flex">
          <label
            htmlFor="name"
            className="text-sm md:text-base font-medium text-onyx dark:text-white"
          >
            Nom:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Entrer votre nom"
            className="w-full text-sm md:text-base ml-3 bg-transparent placeholder:text-dark-gray placeholder:dark:text-gray focus:outline-none"
          />
        </div>
        <div className="w-full h-[1px] bg-light-gray dark:bg-dark-white my-4" />
        <div className="flex">
          <label
            htmlFor="subject"
            className="text-sm md:text-base font-medium text-onyx dark:text-white"
          >
            Sujet:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Entrer le sujet"
            className="w-full text-sm md:text-base ml-3 bg-transparent placeholder:text-dark-gray placeholder:dark:text-gray focus:outline-none"
          />
        </div>
        <div className="w-auto md:w-full h-[1px] bg-light-black dark:bg-dark-white mx-[-16px] md:mx-0 my-8" />
        <textarea
          placeholder="Écrivez votre message ici..."
          name="message"
          id="message"
          className="w-full h-[200px] text-sm md:text-base bg-faint-white dark:bg-black placeholder:text-dark-gray placeholder:dark:text-gray p-5 rounded-xl focus:outline-none"
        />
        <Button type="primary" className="mt-7 mb-3 md:self-end">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
