import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Plus, Edit2, Trash2, Sparkles, Calendar, Layers, Play } from 'lucide-react';
import { Project } from '../types';
import { LIVE_DEMO_URL } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onAddNewProject: () => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  onLiveDemoClick?: (url?: string) => void;
  onCopyDemoUrl?: (url?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  onAddNewProject,
  onEditProject,
  onDeleteProject,
}) => {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Fullstack', 'Frontend', 'System & AI'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => {
          if (filter === 'System & AI') return p.category === 'System & AI' || p.category === 'Backend';
          return p.category === filter;
        });

  return (
    <section id="projects" className="py-16 sm:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
              <span>04</span>
              <span className="text-zinc-500">/</span>
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              주요 프로젝트 경험
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              실제 동작하는 가치를 만들어낸 대표 소프트웨어 프로젝트 목록입니다.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-bold bg-[#141C0F] border border-[#D4FF00]/50 text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(212,255,0,0.15)]"
              id="btn-projects-header-demo"
              title="실습2 Live Demo 새 탭에서 열기"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onAddNewProject}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/[0.08] hover:bg-white/15 text-white border border-white/15 transition-all transform hover:scale-[1.02]"
              id="btn-add-project"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>프로젝트 추가</span>
            </button>
          </div>
        </div>

        {/* Live Demo Quick Action Spotlight Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0C1222]/90 via-[#0B1520]/80 to-[#101F12]/90 border border-[#D4FF00]/30 backdrop-blur-md shadow-[0_0_30px_rgba(212,255,0,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#D4FF00]/15 border border-[#D4FF00]/40 flex items-center justify-center shrink-0 text-[#D4FF00] shadow-inner">
              <Play className="w-5 h-5 fill-[#D4FF00]" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  실습2 웹 프로젝트 Live Demo
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D4FF00] text-black">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono break-all line-clamp-1">
                {LIVE_DEMO_URL}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <a
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4FF00] hover:bg-[#bbf000] text-black text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(212,255,0,0.3)] transition-all transform hover:scale-[1.03] active:scale-[0.98]"
              id="btn-spotlight-livedemo"
              title={`새 탭에서 열기: ${LIVE_DEMO_URL}`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>새 탭에서 열기</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === opt
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-[#0E1322] text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {opt === 'All' ? '전체 프로젝트' : opt}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0B0F1C]/85 border border-white/[0.09] hover:border-white/20 transition-all duration-300 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between group relative overflow-hidden shadow-xl hover:shadow-2xl"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4FF00]/0 to-transparent group-hover:via-[#D4FF00]/60 transition-all duration-500" />

              <div>
                {/* Meta Top: Category, Period, Actions */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/25">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      {project.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onEditProject(project)}
                      className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                      title="프로젝트 수정"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    {projects.length > 1 && (
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        className="p-1.5 rounded-md hover:bg-red-500/10 text-zinc-500 hover:text-red-400 transition-colors"
                        title="프로젝트 삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4FF00] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4FF00]" />
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 font-normal leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Metrics Highlight Pills if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono flex items-center gap-1.5"
                      >
                        <span className="text-zinc-400">{m.label}:</span>
                        <span className="text-[#D4FF00] font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Features Bullet Summary */}
                <div className="mt-4 space-y-1.5 text-xs text-zinc-300">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="text-[#D4FF00] font-bold leading-none mt-1">•</span>
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                  {project.keyFeatures.length > 3 && (
                    <div className="text-[11px] text-zinc-500 pl-3">
                      외 {project.keyFeatures.length - 3}개 주요 기능 구현
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Tech Stack Badges & Links */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-white hover:text-[#D4FF00] transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>상세 내용 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                        title="GitHub 저장소"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#D4FF00]/15 hover:bg-[#D4FF00] text-[#D4FF00] hover:text-black transition-all text-xs font-bold border border-[#D4FF00]/30 shadow-sm"
                        title="새 탭에서 Live Demo 열기"
                        id={`btn-demo-${project.id}`}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
