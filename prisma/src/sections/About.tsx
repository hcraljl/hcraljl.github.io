import { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import GalaxyBg from '../components/GalaxyBg';
import avatarImg from '../assets/avatar.png';

const STATS = [
  { value: '4+', label: '项目经验' },
  { value: '5000+', label: '标注图像' },
  { value: '90%', label: '模型精度 (mAP)' },
  { value: '省一', label: '技能大赛' },
];

const CONTACT_INFO = [
  { icon: Mail, label: '邮箱', value: '2774743173@qq.com' },
  { icon: Phone, label: '电话', value: '17825524646' },
  { icon: MapPin, label: '地点', value: '深圳' },
];

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="relative bg-black overflow-hidden scroll-mt-24" data-animate-section>
      <GalaxyBg hueShift={200} density={1.2} glowIntensity={0.5} rotation={[0.8, 0.2]} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none z-[1]" />

      <div className="container-max relative z-10 py-32 md:py-48">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center"
        >
          {/* Left: Avatar / Photo area */}
          <div className="flex justify-center lg:justify-end" data-animate-card>
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative">
                <div className="absolute -inset-5 border border-accent/15 rounded-2xl" />
                <div className="absolute -inset-3 border border-white/5 rounded-2xl" />
                <div className="absolute inset-0 bg-surface rounded-2xl overflow-hidden">
                  <img src={avatarImg} alt="黄楚荣" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-accent/40 rounded-tr-xl" />
              </div>
            </div>
          </div>

          {/* Right: Bio content */}
          <div className="flex flex-col gap-10" data-animate-content>
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase">About Me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight" data-animate-heading>
              黄楚荣
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
              21 岁在读学生，AI 全栈独立开发者。可独立完成从需求分析到部署上线的项目全流程，
              覆盖 AI 大模型应用、服务器运维与物联网多领域技术栈。
              拥有商业化上线应用 + 大型项目落地的经验，学习动手能力突出，
              做事踏实负责，期望以技术能力助力团队项目高效落地。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-white/40 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-surface rounded-xl p-6 md:p-8 max-w-md border border-white/[0.04]">
              <h3 className="text-accent text-xs tracking-wider uppercase mb-4">教育经历</h3>
              <div className="space-y-3">
                <p className="text-primary text-base font-medium">广东轻工职业技术大学 · 大专</p>
                <p className="text-white/50 text-xs">工业互联网（TCL 学徒班）· 2024.09 - 至今</p>
                <p className="text-white/40 text-xs">人工智能微专业</p>
                <div className="pt-2 space-y-1.5 border-t border-white/[0.06]">
                  <p className="text-white/30 text-xs">
                    · 大一下入选「广轻大+TCL 集团」联合培养工业互联网技术专业，获 TCL 实习资格
                  </p>
                  <p className="text-white/30 text-xs">
                    · 大二上入选「广轻大+广州易方科技」人工智能技术应用专业
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-2.5 text-white/50 text-sm">
                    <Icon className="w-4 h-4 text-accent/60" />
                    <span>
                      {info.label}: {info.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
