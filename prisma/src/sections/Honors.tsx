import { useRef, useState, useEffect } from 'react';
import { Trophy, Award, Medal, Database } from 'lucide-react';
import GalaxyBg from '../components/GalaxyBg';
import BorderGlow from '../components/BorderGlow';

// 香港数码港照片
import cyberport1Img from '../assets/honors/cyberport1.jpg';
import cyberport2Img from '../assets/honors/cyberport2.jpg';

// 人大金仓 KCA / KCP 认证
import kcaImg from '../assets/honors/kca.jpg';
import kcpImg from '../assets/honors/kcp.jpg';

// 其他荣誉证书
import challengeCupImg from '../assets/honors/challenge_cup.jpg';
import xinchuangImg from '../assets/honors/xinchuang.jpg';
import worldSkillsImg from '../assets/honors/world_skills.jpg';

const LEVEL_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  national: { label: '国家级', bg: 'bg-red-500/20', text: 'text-red-400' },
  provincial: { label: '省级', bg: 'bg-amber-500/20', text: 'text-amber-400' },
  international: { label: '国际级', bg: 'bg-blue-500/20', text: 'text-blue-400' },
  certification: { label: '认证', bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
};

interface Honor {
  icon: React.ElementType;
  title: string;
  description: string;
  year: string;
  level: 'national' | 'provincial' | 'international' | 'certification';
  images: string[];
}

const ALL_CARDS: Honor[] = [
  {
    icon: Award,
    title: '香港数码港 大湾区青年创业计划',
    description: '优秀学员 · 团队项目获得 10 万港币资助',
    year: '2026',
    level: 'international',
    images: [cyberport1Img, cyberport2Img],
  },
  {
    icon: Database,
    title: '人大金仓数据库认证',
    description: 'KCA + KCP 数据库管理专业认证',
    year: '2025',
    level: 'certification',
    images: [kcaImg, kcpImg],
  },
  {
    icon: Trophy,
    title: '挑战杯 中国大学生创业竞赛',
    description: '省级奖项 — LinkHome 链家装项目获评委高度认可',
    year: '2026',
    level: 'provincial',
    images: [challengeCupImg],
  },
  {
    icon: Medal,
    title: '第四届广东信创大赛选拔赛',
    description: '数据库管理员组 三等奖',
    year: '2025',
    level: 'provincial',
    images: [xinchuangImg],
  },
  {
    icon: Trophy,
    title: '世界职业院校技能大赛',
    description: '工业互联网集成应用 省一等奖',
    year: '2025',
    level: 'provincial',
    images: [worldSkillsImg],
  },
];

function RotatingImage({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative rounded-lg overflow-hidden bg-surface-dark">
      <div className="aspect-[16/11]">
        {(() => {
          const currentImage = images[index];
          return (
            <img
              key={index}
              src={currentImage}
              alt={`${title} - 证书 ${index + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          );
        })()}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-accent w-4' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HonorCard({ honor }: { honor: Honor }) {
  const Icon = honor.icon;
  const level = LEVEL_CONFIG[honor.level];

  return (
    <div data-animate-card>
      <BorderGlow
        backgroundColor="#1a1a1a"
        borderRadius={16}
        glowRadius={25}
        glowIntensity={0.7}
        edgeSensitivity={25}
        coneSpread={20}
        colors={['#c9a96e', '#dfc08a', '#c9a96e']}
      >
        <div className="p-6 md:p-7">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon className="w-[18px] h-[18px] text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${level.bg} ${level.text} border border-current/20`}>
                  {level.label}
                </span>
                <span className="text-white/15 text-[10px]">{honor.year}</span>
              </div>
              <h3 className="text-sm md:text-[15px] font-bold text-primary group-hover:text-white/90 transition-colors duration-300 leading-snug">
                {honor.title}
              </h3>
              <p className="text-accent/60 text-xs mt-0.5">{honor.description}</p>
            </div>
          </div>

          {honor.images.length > 0 && (
            <RotatingImage images={honor.images} title={honor.title} />
          )}
        </div>
      </BorderGlow>
    </div>
  );
}

export default function Honors() {
  const ref = useRef(null);

  return (
    <section id="honors" className="relative bg-surface-dark overflow-hidden" data-animate-section>
      <GalaxyBg hueShift={45} density={0.8} glowIntensity={0.6} rotation={[1.2, 0.1]} />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/70 to-surface-dark/90 pointer-events-none z-[1]" />

      <div className="container-max relative z-10 py-32 md:py-48">
        {/* Section Header */}
        <div
          ref={ref}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            Honors & Awards
          </span>
          <h2 data-animate-heading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            荣誉证书
          </h2>
          <p className="text-white/40 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            在创新创业与专业技能领域获得的多项认可
          </p>
        </div>

        <div className="mx-auto px-4">
          <div className="grid grid-cols-5 gap-8">
            {ALL_CARDS.map((honor) => (
              <HonorCard key={honor.title} honor={honor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
