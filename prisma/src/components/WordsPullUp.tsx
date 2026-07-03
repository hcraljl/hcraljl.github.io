import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  words: string;
  className?: string;
  showAsterisk?: boolean;
}

export default function WordsPullUp({
  words,
  className = '',
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Split into words (spaces) — for Chinese text, treat each char as a word
  const wordArray = words.includes(' ')
    ? words.split(/\s+/)
    : words.split('');

  return (
    <span
      ref={ref}
      className={`inline-flex flex-nowrap justify-center ${className}`}
    >
      {wordArray.map((word, wi) => {
        const isLastWord = wi === wordArray.length - 1;
        const isLastCharAsterisk = showAsterisk && isLastWord;
        const chars = word.split('');

        return (
          <span key={wi} className="inline-flex mr-[0.25em]">
            {chars.map((ch, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                initial={isInView ? undefined : { y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: wi * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            {isLastCharAsterisk && (
              <motion.sup
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: wordArray.length * 0.08 + 0.3 }}
                className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
              >
                *
              </motion.sup>
            )}
          </span>
        );
      })}
    </span>
  );
}
