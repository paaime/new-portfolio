'use client';

import { useTheme } from 'next-themes';
import SunIcon from '@/icons/SunIcon';
import MoonIcon from '@/icons/MoonIcon';

export default function ThemeSwitch({ isMobile }: { isMobile: boolean }) {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === 'light')
    return <MoonIcon isMobile={isMobile} onClick={() => setTheme('dark')} />;
  else return <SunIcon onClick={() => setTheme('light')} />;
}
