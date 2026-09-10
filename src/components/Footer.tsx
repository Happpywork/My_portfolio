import React from 'react';
import { ArrowUp, Heart, Github, Mail, Phone, MapPin, Terminal } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030408] border-t border-white/[0.08] text-zinc-400 text-xs relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D4FF00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111624] border border-white/10 flex items-center justify-center text-[#D4FF00] font-bold">
                ✦
              </div>
              <span className="text-white text-base font-bold tracking-tight">
                {personalInfo.name} ({personalInfo.nameEn})
              </span>
              <span className="px-2 py-0.5 rounded bg-white/[0.08] text-[10px] font-mono text-zinc-300">
                Portfolio
              </span>
            </div>
            <p className="mt-2 text-xs text-zinc-400 max-w-md">
              홍익대학교 컴퓨터공학과 전공 (학점 4.0/4.5) • 사용자 경험과 시스템 안정성을 동시에 추구하는 소프트웨어 엔지니어 성지훈의 포트폴리오입니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span className="font-mono">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span className="font-mono">{personalInfo.phone}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white transition-colors flex items-center gap-1.5"
              title="맨 위로 스크롤"
              id="btn-scroll-top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-medium hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} 성지훈 (Jihoon Seong). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>서울특별시 성북구 정릉로 388</span>
            <span>•</span>
            <span className="text-zinc-400 font-mono">React 19 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
