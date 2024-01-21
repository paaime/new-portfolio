'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function MailIcon({ className }: { className?: string }) {
  className = clsx(className);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
      className={className}
    >
      <path
        d="M2.04688 7.28564V17.5001C2.04688 18.4473 2.42315 19.3557 3.09294 20.0255C3.76272 20.6953 4.67114 21.0715 5.61835 21.0715H23.4757C24.4229 21.0715 25.3314 20.6953 26.0011 20.0255C26.6709 19.3557 27.0472 18.4473 27.0472 17.5001V7.28564L16.4185 13.825C15.8557 14.1713 15.2078 14.3546 14.547 14.3546C13.8862 14.3546 13.2384 14.1713 12.6756 13.825L2.04688 7.28564Z"
        style={{
          fill: resolvedTheme === 'light' ? '#5C5650' : 'white',
        }}
      />
      <path
        d="M27.0472 5.18804V4.99994C27.0472 4.05273 26.6709 3.14431 26.0011 2.47453C25.3314 1.80475 24.4229 1.42847 23.4757 1.42847H5.61835C4.67114 1.42847 3.76272 1.80475 3.09294 2.47453C2.42315 3.14431 2.04688 4.05273 2.04688 4.99994V5.18804L13.6113 12.3048C13.8927 12.4779 14.2166 12.5696 14.547 12.5696C14.8774 12.5696 15.2014 12.4779 15.4828 12.3048L27.0472 5.18804Z"
        style={{
          fill: resolvedTheme === 'light' ? '#5C5650' : 'white',
        }}
      />
    </svg>
  );
}
