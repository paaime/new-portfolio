import clsx from 'clsx';
import Link from 'next/link';

export default function Button({
  children,
  type,
  className,
  tag = 'button',
  href = '#',
}: {
  children: React.ReactNode;
  type: string;
  className?: string;
  tag?: 'button' | 'a';
  href?: string;
}) {
  className = clsx(
    className,
    'flex h-fit justify-center gap-3 px-[32px] py-[16px] font-medium rounded-lg',
    type === 'primary'
      ? 'light-shadow-button dark:dark-shadow-button dark-gradient text-white'
      : 'bg-faint-white dark:bg-onyx text-black dark:text-dark-gray'
  );

  if (tag === 'a')
    if (type === 'primary')
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    else
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
  else if (type === 'primary')
    return <button className={className}>{children}</button>;
  else return <button className={className}>{children}</button>;
}
