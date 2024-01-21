'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function RightArrowIcon() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        marginBottom: '-3px',
      }}
    >
      <path
        d="M15.1696 5C17.273 6.55556 19.1622 8.37278 20.7905 10.4057C20.9302 10.5801 21 10.79 21 11M15.1696 17C17.273 15.4444 19.1622 13.6272 20.7905 11.5943C20.9302 11.4199 21 11.21 21 11M21 11L3 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={resolvedTheme === 'light' ? 'black' : 'white'}
      />
    </svg>
  );
}
