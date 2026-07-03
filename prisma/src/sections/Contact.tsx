import { Mail, Phone, MapPin, Send, ArrowUpRight, GitFork, Link2 } from 'lucide-react';
import GalaxyBg from '../components/GalaxyBg';

export default function Contact() {
  const contactItems = [
    { icon: Mail, label: 'Email', value: '2774743173@qq.com', href: 'mailto:2774743173@qq.com' },
    { icon: Phone, label: 'Phone', value: '17825524646', href: 'tel:17825524646' },
    { icon: MapPin, label: 'Location', value: '深圳', href: '#' },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden" data-animate-section>
      <GalaxyBg hueShift={180} density={1.5} glowIntensity={0.6} rotation={[0.5, 0.5]} speed={0.6} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none z-[1]" />

      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-bold text-white tracking-tighter">
          CONTACT
        </span>
      </div>

      <div className="container-max relative z-10 w-full py-32 md:py-40">
        <div className="text-center">
          {/* Opening */}
          <p className="text-accent text-sm md:text-base tracking-wider mb-6">
            GET IN TOUCH
          </p>

          {/* Big heading */}
          <h2
            data-animate-heading
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary leading-[0.9] tracking-tight"
          >
            让我们一起创造
          </h2>

          {/* Spacer */}
          <div className="h-20 md:h-28" />

          {/* Contact Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-animate-card
                  className="group flex items-center gap-3 bg-surface hover:bg-surface-light border border-white/[0.06] hover:border-accent/20 rounded-xl px-6 py-5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                  <div className="text-left">
                    <div className="text-white/30 text-[10px] uppercase tracking-wider">{item.label}</div>
                    <div className="text-primary text-sm md:text-base">{item.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social + CTA */}
          <div data-animate-content className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:2774743173@qq.com"
              className="group inline-flex items-center gap-3 bg-accent hover:bg-[#d4b57a] text-black font-medium px-10 py-4 rounded-full transition-all duration-300 text-sm md:text-base shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:brightness-110"
            >
              <Send className="w-4 h-4" />
              发送邮件
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-3">
              {[{ icon: GitFork, label: 'GitHub' }, { icon: Link2, label: 'LinkedIn' }].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/10 hover:border-accent/40 flex items-center justify-center text-white/40 hover:text-accent transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-28 md:mt-40 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; 2026 · AI 应用工程师作品集 · 黄楚荣
          </p>
          <p className="text-white/15 text-xs">
            Built with React · Vite · Framer Motion · OGL
          </p>
        </div>
      </div>
    </section>
  );
}
