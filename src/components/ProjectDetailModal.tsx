import React from 'react';
import { X, ExternalLink, Github, Calendar, CheckCircle, Sparkles, Layers, Cpu, Server, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onLiveDemoClick?: (url?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onLiveDemoClick }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0B0F1C] border border-white/15 p-6 sm:p-8 shadow-2xl text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.period}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[#D4FF00]/90 font-medium">
          {project.subtitle}
        </p>

        {/* Metrics Highlights if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 my-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-base sm:text-lg font-bold font-mono text-white">
                  {m.value}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview Description */}
        <div className="mt-5">
          <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">
            프로젝트 개요 (Overview)
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2.5">
            주요 구현 기능 (Key Features)
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role & Achievements */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2.5">
            담당 역할 및 기술적 성과 (Role & Achievements)
          </h4>
          <div className="space-y-2 text-sm text-zinc-300">
            {project.roleAndAchievements.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border-l-2 border-[#D4FF00] pl-3">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Note if available */}
        {project.architectureNote && (
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">
              시스템 아키텍처 흐름 (Architecture Flow)
            </h4>
            <div className="p-3.5 rounded-lg bg-[#070911] border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto">
              <code>{project.architectureNote}</code>
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2.5">
            사용 기술 스택 (Tech Stack)
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4FF00] hover:bg-[#bbf000] text-black text-xs font-bold transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(212,255,0,0.2)]"
                id="btn-modal-livedemo"
                title={`새 탭에서 열기: ${project.liveDemoUrl}`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Live Demo (새 탭 열기)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-zinc-300 text-xs font-medium transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
