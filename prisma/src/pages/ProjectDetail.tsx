import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getProjectById } from '../data/projects';
import GalaxyBg from '../components/GalaxyBg';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-lg mb-4">项目未找到</p>
          <Link to="/" className="text-accent hover:text-accent-light transition-colors">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20 rounded-b-2xl bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
            <button
              onClick={() => navigate('/?scrollTo=project-' + project.id)}
              className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              返回项目
            </button>
            <span className="text-xs text-white/30 tracking-wider">项目详情</span>
          </div>
        </div>
      </nav>

      {/* Hero Video Section — pure video, no text */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={project.video} type="video/mp4" />
          </video>
          <div className="noise-overlay" />
        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-surface-dark overflow-hidden">
        <GalaxyBg hueShift={30} density={0.6} glowIntensity={0.3} rotation={[1.0, 0.0]} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/70 to-surface-dark/90 pointer-events-none z-[1]" />

        <div className="container-max relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
            {/* 1. Project Overview */}
            <div>
              <h2 className="text-xs text-accent tracking-[0.3em] uppercase mb-6">项目概述</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 2. Responsibilities */}
            <div>
              <h2 className="text-xs text-accent tracking-[0.3em] uppercase mb-6">主要职责与成果</h2>
              <div className="space-y-6">
                {project.responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </span>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Highlights */}
            <div>
              <h2 className="text-xs text-accent tracking-[0.3em] uppercase mb-6">项目亮点</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {project.highlights_detail.map((item, i) => (
                  <div key={i} className="bg-surface rounded-xl p-5 md:p-6 border border-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-accent" />
                      </span>
                      <p className="text-white/50 text-sm leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tech Stack */}
            <div>
              <h2 className="text-xs text-accent tracking-[0.3em] uppercase mb-6">技术栈</h2>
              <div className="bg-surface rounded-xl p-6 md:p-8 border border-white/[0.04]">
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.split('|').map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-accent/70 bg-accent/10 px-3 py-1.5 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <div className="bg-surface-dark border-t border-white/[0.06]">
        <div className="container-max">
          <div className="py-8 md:py-12 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </button>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm"
            >
              查看更多项目
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container-max">
          <p className="text-white/20 text-xs text-center">
            © 2026 · AI 应用工程师作品集 · 黄楚荣
          </p>
        </div>
      </footer>
    </div>
  );
}
