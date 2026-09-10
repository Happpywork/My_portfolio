import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Layout,
  Palette,
  Server,
  ShieldCheck,
  Zap,
  GitBranch,
  Database,
  HardDrive,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TechStackCategory } from '../types';

interface TechStackSectionProps {
  techStackData: TechStackCategory[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ techStackData }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database & Tools'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-white" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-green-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-zinc-300" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-blue-500" />;
      default:
        return <Code2 className="w-5 h-5 text-zinc-300" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? techStackData
      : techStackData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
            <span>03</span>
            <span className="text-zinc-500">/</span>
            <span>TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            보유 기술 스택
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            시스템 프로그래밍 언어부터 최신 웹 프론트엔드, 백엔드 및 데이터베이스까지 능동적으로 활용합니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#D4FF00] text-black font-semibold shadow-[0_0_15px_rgba(212,255,0,0.25)]'
                  : 'bg-[#101422] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              {cat === 'All' ? '전체 보기' : cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="space-y-8">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4 rounded bg-[#D4FF00]" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.category}
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                  ({group.skills.length} skills)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-[#0B0F1C]/80 border border-white/[0.08] hover:border-white/20 hover:bg-[#0E1424] transition-all duration-200 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 group-hover:border-[#D4FF00]/40 transition-colors">
                          {getIcon(skill.iconName)}
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === 'Advanced'
                              ? 'bg-[#D4FF00]/10 text-[#D4FF00] border-[#D4FF00]/30 font-semibold'
                              : 'bg-white/[0.05] text-zinc-400 border-white/10'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                        {skill.name}
                      </h4>

                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                        {skill.description}
                      </p>
                    </div>

                    {skill.tags && (
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
