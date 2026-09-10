import React from 'react';
import { Award, CheckCircle2, Shield, Calendar, Edit3 } from 'lucide-react';
import { AwardCertification } from '../types';

interface AwardsSectionProps {
  items: AwardCertification[];
  onOpenEditModal: () => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ items, onOpenEditModal }) => {
  return (
    <section id="awards" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
              <span>05</span>
              <span className="text-zinc-500">/</span>
              <span>AWARDS & CERTIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              수상 및 자격증
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              검증된 개발 역량과 대외 수상 및 공인 자격증 목록입니다.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenEditModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-zinc-300 bg-[#121624] border border-white/10 hover:border-white/30 hover:text-white transition-colors shadow-sm"
              title="수상/자격증 내역 편집"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>수상·자격증 편집</span>
            </button>
          </div>
        </div>

        {/* Awards & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0B0F1C]/80 border border-white/[0.09] hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-start gap-4 group shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  item.type === 'award'
                    ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00]'
                    : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                }`}
              >
                {item.type === 'award' ? <Award className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      item.type === 'award'
                        ? 'bg-[#D4FF00]/10 text-[#D4FF00] border-[#D4FF00]/30 font-medium'
                        : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    {item.badge || (item.type === 'award' ? '수상' : '자격증')}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#D4FF00] transition-colors truncate">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-0.5 font-medium">
                  {item.organization}
                </p>

                {item.description && (
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
