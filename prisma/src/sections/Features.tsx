import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';

const CARD_VARIANTS = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

interface FeatureCard {
  number: string;
  title: string;
  icon?: string;
  items: string[];
  isVideo?: boolean;
  videoUrl?: string;
  videoText?: string;
}

const CARDS: FeatureCard[] = [
  {
    number: '',
    title: '',
    isVideo: true,
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    videoText: 'Your creative canvas.',
    items: [],
  },
  {
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Interactive timelines to map scenes, shots, and edits.',
      'Drag-and-drop storyboarding for rapid iteration.',
      'Cloud sync across devices—your vision, everywhere.',
      'Collaborative annotations for seamless team feedback.',
    ],
  },
  {
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered analysis of pacing, composition, and mood.',
      'Actionable creative notes tailored to your style.',
      'Integrations with DaVinci Resolve, Premiere Pro, and more.',
    ],
  },
  {
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Notification silencing to protect deep focus.',
      'Ambient soundscapes synced to your scene mood.',
      'Calendar integration to guard creative time blocks.',
    ],
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const headerSegments = [
    { text: 'Studio-grade workflows for visionary creators.', className: 'text-[#DEDBC8]' },
    { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Noise background */}
      <div className="bg-noise" />

      <div className="relative z-10 py-16 md:py-24 px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
          />
        </div>

        {/* Card Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              ref={i === 0 ? ref : null}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={CARD_VARIANTS}
              custom={i}
              className={`bg-[#212121] rounded-xl overflow-hidden flex flex-col ${
                i === 0 ? 'lg:row-span-1' : ''
              }`}
            >
              {card.isVideo ? (
                /* Video Card */
                <>
                  <div className="relative flex-1">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.videoUrl!} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[#E1E0CC] text-sm sm:text-base font-medium">
                      {card.videoText}
                    </p>
                  </div>
                </>
              ) : (
                /* Feature Card */
                <>
                  {/* Icon */}
                  <div className="px-4 sm:px-5 pt-4 sm:pt-5">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded"
                    />
                  </div>

                  {/* Title */}
                  <div className="px-4 sm:px-5 pt-3 sm:pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-[10px] sm:text-xs font-medium tracking-wide">
                        {card.number}
                      </span>
                      <span className="text-[#DEDBC8] text-sm sm:text-base font-medium">
                        {card.title}
                      </span>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="px-4 sm:px-5 pt-3 sm:pt-4 flex-1">
                    <ul className="space-y-2.5 sm:space-y-3">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link */}
                  <div className="px-4 sm:px-5 py-3 sm:py-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
