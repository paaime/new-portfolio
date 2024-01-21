'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function LinkedinIcon({ className }: { className?: string}) {
  className = clsx(className);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className={className}
      style={{
        fill: resolvedTheme === 'light' ? '#5C5650' : 'white',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.556 21.9979H2.44792C1.09813 21.9979 0.00390625 20.9037 0.00390625 19.5539V2.44584C0.00390625 1.09605 1.09813 0.00183105 2.44792 0.00183105H19.556C20.9058 0.00183105 22 1.09605 22 2.44584V19.5539C22 20.9037 20.9058 21.9979 19.556 21.9979ZM15.6797 18.9429H18.9438V12.2376C18.9438 9.40045 17.3355 8.02868 15.0891 8.02868C12.8417 8.02868 11.8959 9.7788 11.8959 9.7788V8.35224H8.75023V18.9429H11.8959V13.3835C11.8959 11.8938 12.5816 11.0074 13.8941 11.0074C15.1005 11.0074 15.6797 11.8592 15.6797 13.3835V18.9429ZM3.05773 5.01118C3.05773 6.0904 3.92598 6.96547 4.99746 6.96547C6.06894 6.96547 6.93668 6.0904 6.93668 5.01118C6.93668 3.93195 6.06894 3.05688 4.99746 3.05688C3.92598 3.05688 3.05773 3.93195 3.05773 5.01118ZM6.65329 18.9429H3.37317V8.35224H6.65329V18.9429Z"
      />
    </svg>
  );
}
