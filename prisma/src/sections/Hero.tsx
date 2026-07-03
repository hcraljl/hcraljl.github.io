import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Opening timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title: clip reveal from center
      const titleSpans = titleRef.current?.querySelectorAll('span');
      if (titleSpans) {
        tl.fromTo(
          titleSpans,
          { y: 80, opacity: 0, rotateX: 15 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.4, stagger: 0.08, ease: 'power4.out' },
          0.6,
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        1.4,
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        2.2,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 text-center px-4 max-w-5xl bottom-28 md:bottom-36">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary leading-[0.9] tracking-tight mb-6 md:mb-8"
        >
          <span className="inline-block">AI</span>
          <span className="inline-block ml-[0.15em]">驱</span>
          <span className="inline-block">动</span>
          <span className="inline-block">的</span>
          <span className="inline-block">创</span>
          <span className="inline-block">新</span>
          <span className="inline-block">者</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          专注于人工智能与大模型应用开发，
          <br className="hidden md:block" />
          将前沿 AI 技术转化为可落地的产品解决方案
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        ref={scrollRef}
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
