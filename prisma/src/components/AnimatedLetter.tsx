import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
}

export default function AnimatedLetter({ char, index, totalChars }: AnimatedLetterProps) {
  if (char === ' ') {
    return <span>&nbsp;</span>;
  }

  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const charProgress = index / totalChars;
  const opacityRange: [number, number] = [
    Math.max(0, charProgress - 0.1),
    Math.min(1, charProgress + 0.05),
  ];

  const opacity = useTransform(scrollYProgress, opacityRange, [0.2, 1]);

  return (
    <motion.span ref={ref} style={{ opacity }}>
      {char}
    </motion.span>
  );
}
