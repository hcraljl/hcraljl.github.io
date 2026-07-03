import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GalaxyBg from '../components/GalaxyBg';
import BorderGlow from '../components/BorderGlow';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-surface-dark overflow-hidden" data-animate-section>
      <GalaxyBg hueShift={30} density={1.0} glowIntensity={0.4} rotation={[1.0, 0.0]} />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/70 to-surface-dark/90 pointer-events-none z-[1]" />

      <div className="container-max relative z-10 py-32 md:py-48">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            Portfolio
          </span>
          <h2
            data-animate-heading
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight"
          >
            精选项目
          </h2>
          <p className="text-white/40 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            从 AI 应用到工程落地，每一个项目都是技术与创意的融合
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-20 md:gap-32">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              id={'project-' + project.id}
              data-animate-card
              className="group"
            >
              <Link to={`/project/${project.id}`} className="block">
                <BorderGlow
                  backgroundColor="#1a1a1a"
                  borderRadius={16}
                  glowRadius={30}
                  glowIntensity={0.8}
                  edgeSensitivity={25}
                  coneSpread={20}
                  colors={['#c9a96e', '#dfc08a', '#c9a96e']}
                >
                  {/* Video area */}
                  <div className="relative h-48 sm:h-64 md:h-[400px] bg-black overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    <div className="absolute bottom-5 left-6 md:bottom-6 md:left-8">
                      <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/30 text-xs mb-6">{project.period}</p>
                        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-accent/70 bg-accent/10 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-accent text-sm hover:text-accent-light transition-colors group/link">
                          了解更多
                          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </span>
                      </div>

                      <div className="lg:w-80">
                        <h4 className="text-xs text-white/30 tracking-wider uppercase mb-5">
                          成果亮点
                        </h4>
                        <ul className="space-y-4">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
