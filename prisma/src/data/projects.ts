import linkhomeVideo from '../assets/videos/LinkHome链家装.mp4';
import droneVideo from '../assets/videos/黄河流域无人机智能巡检系统.mp4';
import slamVideo from '../assets/videos/基于A-LOAM的塌陷区域高精度三维建模.mp4';
import agentVideo from '../assets/videos/基于千问大模型的水利智能体.mp4';

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  honor?: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
  video: string;
  responsibilities: string[];
  highlights_detail: string[];
  tech_stack: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'linkhome',
    title: 'LinkHome 链家装',
    role: '开发者',
    period: '2026.05 - 2026.06',
    honor: '2026 年「挑战杯」河北省大学生创业竞赛 省级奖项',
    description:
      '基于 AI 大模型的智能家装微信小程序，通过上传毛坯房照片和风格需求自动生成带家具标注的效果图，并支持一键跳转电商购买，结合"AI 设计 + 电商导购 + 用户社区"模式。',
    highlights: [
      '从 0 到 1 独立完成，覆盖需求分析、技术选型、前后端开发、AI 接入、路演答辩全流程',
      '实现"拍照→AI 生成→商品购买"的商业闭环，具备实际变现能力',
      '2026 年「挑战杯」河北省大学生创业竞赛 省级奖项',
    ],
    tags: ['AI 大模型', '小程序', '全栈开发', '电商导购', '用户画像'],
    gradient: 'from-amber-900/30 to-orange-900/20',
    video: linkhomeVideo,
    responsibilities: [
      '独立完成产品规划、技术选型与全栈开发，采用微信云开发架构实现前后端一体化，零服务器成本支撑完整业务闭环。',
      '封装大模型图生图 API 与对话接口，通过云函数安全中转；设计 Prompt 工程方案，将用户偏好标签拼接为结构化提示词，生成效果图还原度高。',
      '基于 cover-view 组件实现效果图家具热点标注，调用 wx.navigateToMiniProgram 打通"设计即购买"的跳转链路，形成可落地的商业模式——该模式为核心加分项。',
      '基于收藏与对话记录，构建风格、色系、材质等偏好标签体系，实现 AI 个性化推荐，形成"越用越懂你"的数据飞轮。',
      '作为项目代表完成挑战杯路演答辩，负责商业计划书撰写与商业模式阐述。',
    ],
    highlights_detail: [
      '从 0 到 1 独立完成，覆盖需求分析、技术选型、前后端开发、AI 接入、路演答辩全流程',
      '实现"拍照→AI 生成→商品购买"的商业闭环，具备实际变现能力',
      '2026 年「挑战杯」河北省大学生创业竞赛省级奖项，获评委对技术创新性和商业可行性的高度认可',
    ],
    tech_stack:
      '微信小程序原生 + 微前端架构 | CloudBase Serverless(Node.js+MongoDB+CDN) | 多模态大模型 API + Prompt Engineering | WebSocket | RESTful API 网关 + 安全中转层 | SDK(wx.navigateToMiniProgram+web-view) | Git Flow + CI/CD',
  },
  {
    id: 'drone-inspection',
    title: '黄河流域坝岸无人机智能巡检系统',
    role: '模型训练员',
    period: '2026.04 - 2026.10',
    description:
      '基于 YOLOv5 目标检测算法，结合无人机与 RTSP 实时视频流技术，构建黄河流域坝岸智能巡检系统，实现对坝坡表面裂缝、渗漏点、塌陷沉降、植被异常等 4 类隐患的自动化识别与预警。',
    highlights: [
      '参与完成数据采集标注、模型训练优化、GPU 环境搭建、视频流接入到系统部署全流程',
      'mAP 90%+，推理速度 52ms/帧，支持 4 类坝岸隐患实时检测',
      '已在黄河流域水利工程完成试点，巡检效率提升 6-8 倍，具备实际推广价值',
    ],
    tags: ['YOLOv5', 'PyTorch', '目标检测', '无人机', 'RTSP'],
    gradient: 'from-emerald-900/30 to-teal-900/20',
    video: droneVideo,
    responsibilities: [
      '参与完成 5000+ 张黄河流域坝岸图像的采集、标注与预处理。最终模型 mAP 达到 90% 以上，推理速度 52ms/帧，满足实时巡检需求。',
      '独立完成从零开始的开发环境配置，CUDA 11.8 + cuDNN，PyTorch 2.0 + YOLOv5 GPU 加速训练，将单次训练周期缩短约 70%。对比不同权重尺寸（YOLOv5s/m/l）选定最优，实现检测精度与推理速度的最佳平衡。',
      '基于 RTSP 协议实现无人机实时视频流接入，打通"采集 → 检测 → 输出"完整数据链路。支持实时显示检测框、类别标签及置信度，自动生成结构化巡检报告。',
      '采用 Mosaic、MixUp 等数据增强策略提升模型泛化能力。系统已在黄河流域水利工程完成试点验证。',
    ],
    highlights_detail: [
      'mAP 90%+ 检测精度，推理速度 52ms/帧，满足实时巡检需求',
      '巡检效率提升 6-8 倍，单次覆盖面积相当于人工 3 天工作量',
      '已成功在黄河流域水利工程试点，具备实际推广价值',
    ],
    tech_stack: 'PyTorch 2.0 + YOLOv5 | CUDA 11.8 + cuDNN | OpenCV + RTSP | Python 3.9',
  },
  {
    id: 'slam-3d',
    title: '基于 A-LOAM 的塌陷区域高精度三维建模',
    role: '三维建模工程师',
    period: '2025.11 - 2026.02',
    description:
      '利用 A-LOAM 激光 SLAM 算法实现高精度三维建模与体积测算，解决传统人工巡检的滞后、规模难判和精度不足等问题，为抢险决策提供精准数据支持。',
    highlights: [
      '从 0 到 1 独立完成算法研究、环境部署、数据处理、模型优化到体积测算全流程',
      '厘米级三维重建，体积测算误差 ≤5%，全流程 15 分钟快速响应',
      '已在黄河坝岸完成技术验证',
    ],
    tags: ['A-LOAM', 'SLAM', '三维建模', '点云处理', '体积测算'],
    gradient: 'from-blue-900/30 to-indigo-900/20',
    video: slamVideo,
    responsibilities: [
      '基于 Ubuntu 20.04 + ROS Noetic 部署 A-LOAM 算法，掌握 scanRegistration（特征提取）、laserOdometry（帧间匹配）、laserMapping（全局优化）三个并行节点。通过调整参数将无 GPS 环境下三维重建精度提升至厘米级。',
      '编写 Python 脚本将 .bin 格式原始点云数据转换为 ROS Bag 文件，单帧点云处理量达 12 万点。',
      '运行 A-LOAM 完成实时建图，实现 1:1 真实场景三维还原。使用 pcl_ros 保存全局点云地图。',
      '将点云地图导入 CloudCompare，采用 2.5D 体积计算方法，优化网格步长（0.05m）与插值策略后，测算误差控制在 5% 以内。',
      '独立搭建"数据集→格式转换→SLAM 建图→体积测算"完整链路，全流程 15 分钟内完成。',
    ],
    highlights_detail: [
      '厘米级三维重建精度',
      '体积测算误差控制在 5% 以内（准确率 98.7%）',
      '独立完成从数据采集到体积测算的完整技术链路',
      '全流程响应时间缩短至 15 分钟，已在黄河坝岸实际应用中验证有效',
    ],
    tech_stack: 'A-LOAM / ROS Noetic | Python 3.8 | CloudCompare | PCL | Ceres Solver | Ubuntu 20.04',
  },
  {
    id: 'water-agent',
    title: '基于千问大模型的水利智能体',
    role: '项目负责人',
    period: '2026.05 - 2026.10',
    description:
      '基于千问大模型训练的面向黄河流域基层巡检人员的水利智能体，解决巡检人员以村民为主、操作门槛高及险情处置缺乏即时指导的问题。',
    highlights: [
      '从 0 到 1 独立完成需求分析、知识库构建、RAG 搭建、多端开发、试点验证全流程',
      '采用"大模型+RAG+水利垂直知识库"智能巡检辅助模式',
      '已在某河务局完成试点测试',
    ],
    tags: ['千问大模型', 'LangChain', 'RAG', '知识图谱', '智能体'],
    gradient: 'from-purple-900/30 to-violet-900/20',
    video: agentVideo,
    responsibilities: [
      '独立完成需求分析、技术选型与系统开发，基于 LangChain 搭建 RAG 流水线，实现向量检索与千问大模型的深度融合。',
      '整理结构化黄河流域巡检核心场景数据，覆盖堤防巡查、水位监测、渗漏抢险、设备维护等场景。内置 5000+ 条险情应急方案、10000+ 条设备操作说明、30000+ 条水利专业知识。',
      '完成 Web 管理后台与移动端 H5 原型，支持语音输入与离线缓存，适配黄河沿岸网络不稳定环境。',
      '已在某河务局进行试点测试，获得一线巡检人员与基层管理部门的积极反馈。',
    ],
    highlights_detail: [
      '基于 LangChain 搭建 RAG 流水线，实现向量检索与大模型深度融合',
      '构建含 5000+ 条险情方案的专业水利知识库',
      '支持 Web 管理后台 + 移动端 H5 多端交互',
      '成功完成试点测试，获一线巡检人员与基层管理部门认可',
    ],
    tech_stack:
      '通义千问 + LoRA 微调 | LangChain + Chroma/FAISS 向量数据库 | RAG + Prompt Engineering | Flask + Vue3 + H5 | ASR 语音识别 + IndexedDB 离线缓存 | Docker 容器化部署',
  },
];

export const getProjectById = (id: string): Project | undefined =>
  PROJECTS.find((p) => p.id === id);
