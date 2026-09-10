import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, School } from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  educationList: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ educationList }) => {
  return (
    <section id="education" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
            <span>02</span>
            <span className="text-zinc-500">/</span>
            <span>EDUCATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            학력사항
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            체계적인 컴퓨터공학 전공 지식과 기본기를 다져온 학력 여정입니다.
          </p>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 relative overflow-hidden shadow-xl ${
                idx === 0
                  ? 'bg-gradient-to-br from-[#0D1224] via-[#090D18] to-[#05070E] border-white/[0.12] hover:border-[#D4FF00]/40'
                  : 'bg-[#0B0E19]/80 border-white/[0.08] hover:border-white/20'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      idx === 0
                        ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00]'
                        : 'bg-white/[0.06] border border-white/10 text-zinc-300'
                    }`}
                  >
                    {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {edu.school}
                      </h3>
                      <span className="text-sm font-semibold text-zinc-300">
                        | {edu.major}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-zinc-400">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {edu.period}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {edu.gpa && (
                  <div className="shrink-0 flex items-center gap-3 self-start bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-xl">
                    <div>
                      <div className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                        전공 평점 (GPA)
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#D4FF00] font-mono leading-tight">
                        {edu.gpa} <span className="text-xs text-zinc-400 font-normal">/ {edu.maxGpa}</span>
                      </div>
                    </div>
                    <Award className="w-6 h-6 text-[#D4FF00]/70" />
                  </div>
                )}
              </div>

              {edu.description && (
                <p className="mt-5 text-sm text-zinc-300 leading-relaxed max-w-4xl">
                  {edu.description}
                </p>
              )}

              {/* Major Coursework Pills (for University) */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-xs font-semibold text-zinc-300 tracking-wide font-mono">
                      주요 이수 교과목
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300 font-mono hover:border-white/20 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-zinc-400">
                  {edu.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
