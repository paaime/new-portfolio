'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        // type: 'spring',
        // stiffness: 260,
        // damping: 20,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
