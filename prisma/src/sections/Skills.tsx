import { Brain, Code, Server, Rocket, Database, Sparkles } from 'lucide-react';
import GalaxyBg from '../components/GalaxyBg';
import BorderGlow from '../components/BorderGlow';

interface SkillCard {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  gradient: string;
}

const SKILL_CARDS: SkillCard[] = [
  {
    icon: Brain,
    title: 'AI 开发与 Vibe Coding',
    description: '熟练使用 CodeX、Claude Code、WorkBuddy、COZE 等 AI 开发工具，可独立完成全栈项目从需求分析到部署上线的全流程开发。',
    items: ['CodeX / Claude Code / COZE','全栈项目全流程','AI 辅助提效'],
    gradient: 'from-violet-900/40 to-purple-900/20',
  },
  {
    icon: Sparkles,
    title: 'LLM 基座与 AI Agent 开发',
    description: '基于国内开源 LLM 基座完成部署训练专业智能体、独立训练 YOLO 模型进行目标检测、熟悉COZE工作流完成 AI 应用前后端全链路对接。',
    items: ['模型训练','LLM基座部署','COZE工作流'],
    gradient: 'from-amber-900/40 to-orange-900/20',
  },
    {
    icon: Database,
    title: 'RAG 检索增强与大模型落地',
    description: '能使用 LangChain 搭建 RAG 检索增强链路，了解提示词工程、思维链 Prompt 优化，基于 Qwen/GLM 轻量化微调，通过 FastAPI 封装 LLM 推理服务',
    items: ['LangChain','提示词工程','混合检索RAG', 'LoRA轻量化微调','FastAPI推理接口'],
    gradient: 'from-rose-900/40 to-pink-900/20',
  },
  {
    icon: Code,
    title: 'AI 工程化部署运维',
    description: '熟练使用 Linux 系统，掌握 Docker 容器化和虚拟环境conda/Anaconda，用于 AI 训练 / 推理环境隔离、模型打包私有化部署，适配 LLM 与 AIGC 项目线上运维。',
    items: ['Linux / Docker','conda/Anaconda','GPU推理部署','AI项目运维'],
    gradient: 'from-emerald-900/40 to-teal-900/20',
  },
  {
    icon: Server,
    title: '图像数据处理与深度学习训练',
    description: '具备图像数据采集、标注与预处理能力，熟悉 PyTorch 深度学习框架，能够搭建 GPU 加速训练环境,支撑 LLM 微调。',
    items: ['图像标注与预处理','PyTorch 2.0','GPU 加速训练','模型训练调参'],
    gradient: 'from-blue-900/40 to-cyan-900/20',
  },
  {
    icon: Rocket,
    title: '全栈开发',
    description: '一定程度掌握 HTML/CSS/JS、Python、C 语言等前端与后端开发技术，熟练使用 VSCode、PyCharm、微信开发者工具等开发工具。',
    items: ['HTML/CSS/JS','Python / C 语言','多端开发工具'],
    gradient: 'from-indigo-900/40 to-blue-900/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black overflow-hidden" data-animate-section>
      <GalaxyBg hueShift={260} density={1.3} glowIntensity={0.5} rotation={[0.6, 0.4]} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none z-[1]" />

      <div className="container-max relative z-10 py-32 md:py-48">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            Capabilities
          </span>
          <h2 data-animate-heading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            个人优势
          </h2>
          <p className="text-white/40 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            多维度技术栈，覆盖 AI 开发、全栈工程、运维部署与产品管理
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} data-animate-card>
                <BorderGlow
                  backgroundColor="#1a1a1a"
                  borderRadius={16}
                  glowRadius={25}
                  glowIntensity={0.7}
                  edgeSensitivity={25}
                  coneSpread={20}
                  colors={['#c9a96e', '#dfc08a', '#c9a96e']}
                >
                  <div className="p-8 md:p-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-white/90 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/50 transition-colors duration-300">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.items.map((item) => (
                          <span key={item} className="text-xs text-accent/60 bg-accent/10 px-3 py-1.5 rounded-full group-hover:bg-accent/15 transition-colors duration-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
