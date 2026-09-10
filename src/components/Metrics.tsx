import React from 'react';
import { Quote, Sparkles, GraduationCap, CheckCircle2, Award } from 'lucide-react';

export const Metrics: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Philosophy / Statement Card (Like CEO's Words in screenshot) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0C101C]/80 border border-white/[0.09] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4FF00]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-semibold tracking-wide text-[#D4FF00] uppercase font-mono mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Developer Statement</span>
              </div>

              <blockquote className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal">
                &ldquo;이론과 실무 사이의 간극을 줄이고, 단 하나의 성능 병목과 잠재적인 버그도 결코 타협하지 않는 집요함이 진정으로 신뢰받는 소프트웨어를 만듭니다.&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-600 border border-white/20 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  JH
                </div>
                <div>
                  <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                    <span>성지훈</span>
                    <span className="text-xs text-zinc-400 font-normal font-mono">(Jihoon Seong)</span>
                  </div>
                  <div className="text-xs text-zinc-400">
                    홍익대학교 컴퓨터공학과 • 풀스택 개발자
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <span className="text-[#D4FF00]">●</span> Hongik Univ CE
              </div>
            </div>
          </div>

          {/* Metric Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Stat 1: GPA */}
            <div className="rounded-2xl bg-[#0C101C]/80 border border-white/[0.09] p-6 backdrop-blur-md hover:border-[#D4FF00]/30 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-1">
                    <span>4.0</span>
                    <span className="text-lg text-zinc-500 font-normal">/ 4.5</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">
                    컴퓨터공학과 전공 평점 (GPA)
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                자료구조(A+), 알고리즘(A+), 컴퓨터시스템(A+), DB(A+) 등 핵심 교과목 우수 이수
              </p>
            </div>

            {/* Stat 2: Problem Solving & Stack */}
            <div className="rounded-2xl bg-[#0C101C]/80 border border-white/[0.09] p-6 backdrop-blur-md hover:border-[#D4FF00]/30 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#D4FF00] font-mono tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">
                    완성도 및 클린 코드 지향
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center text-[#D4FF00]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                사용자 경험 직관성과 백엔드 데이터 파이프라인의 견고함을 동시에 검증
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
