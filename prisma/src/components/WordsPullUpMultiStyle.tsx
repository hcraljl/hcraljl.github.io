import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  type WordItem = { word: string; cls?: string };
  const allWords: WordItem[] = [];

  for (const seg of segments) {
    const wordSplit = seg.text.includes(' ')
      ? seg.text.split(/\s+/)
      : seg.text.split('');
    for (let wi = 0; wi < wordSplit.length; wi++) {
      allWords.push({ word: wordSplit[wi], cls: seg.className });
      if (wi < wordSplit.length - 1) {
        allWords.push({ word: ' ', cls: '' });
      }
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, i) => {
        if (item.word === ' ') {
          return <span key={i} className="mr-[0.25em]" />;
        }
        return (
          <span key={i} className="mr-[0.25em]">
            {item.word.split('').map((ch, ci) => (
              <motion.span
                key={`${i}-${ci}`}
                className={item.cls}
                initial={isInView ? undefined : { y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
