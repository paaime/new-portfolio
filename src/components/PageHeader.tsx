export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-light-black dark:border-dark-white mx-[-20px] mb-12 px-[20px]">
      <div className="pt-16 md:pt-28 pb-12 mx-auto max-w-screen-lg">
        <h1 className="text-[48px] md:text-[80px] leading-[50px] md:leading-[90px] font-extrabold text-black dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-gray text-base md:text-2xl">{description}</p>
      </div>
    </div>
  );
}
