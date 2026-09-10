import React from 'react';
import { ArrowRight, Mail, Copy, Check, Terminal, Sparkles, MapPin, Award, Play, ExternalLink } from 'lucide-react';
import { PersonalInfo } from '../types';
import { LIVE_DEMO_URL } from '../data/portfolioData';

interface HeroProps {
  personalInfo: PersonalInfo;
  onCopyEmail: () => void;
  copiedEmail: boolean;
  onContactClick: () => void;
  onLiveDemoClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  personalInfo,
  onCopyEmail,
  copiedEmail,
  onContactClick,
  onLiveDemoClick,
}) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Cosmic Starfield & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-blue-900/15 via-indigo-900/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#D4FF00]/5 rounded-full blur-[120px]" />

        {/* Subtle Cosmic Star Dots */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Planet Horizon Arch (Inspired by the reference image curved globe) */}
        <div className="absolute top-[480px] sm:top-[440px] left-1/2 -translate-x-1/2 w-[1100px] sm:w-[1600px] h-[700px] rounded-[100%] border-t border-white/20 bg-gradient-to-b from-blue-950/30 via-[#060810] to-[#05060A] shadow-[0_-20px_90px_rgba(79,120,255,0.18)] pointer-events-none" />
        {/* Horizon Glow line */}
        <div className="absolute top-[479px] sm:top-[439px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[3px] bg-gradient-to-r from-transparent via-cyan-400/40 via-[#D4FF00]/40 to-transparent blur-[1px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Capsule Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111422]/90 border border-white/[0.12] text-xs font-medium text-zinc-300 shadow-xl mb-6 sm:mb-8 backdrop-blur-md hover:border-[#D4FF00]/40 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
          <span className="text-zinc-200">홍익대학교 컴퓨터공학과</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400 font-mono">학점 4.0 / 4.5</span>
          <span className="text-zinc-500">•</span>
          <span className="text-[#D4FF00] font-mono">2027 졸업예정</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.18] sm:leading-[1.15]">
          문제를 집요하게 파고들어 <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
            직관적이고 견고한 소프트웨어로
          </span>
        </h1>

        {/* Subtitle / Intro */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
          안녕하세요, 풀스택 소프트웨어 엔지니어를 지향하는 <strong className="text-white font-semibold">{personalInfo.name}</strong>입니다.
          탄탄한 컴퓨터공학 이론과 최신 웹 생태계(React, TypeScript, Node.js, Python)를 바탕으로
          안정적인 아키텍처와 사용자 중심의 완성도 높은 프로덕트를 만듭니다.
        </p>

        {/* Action Buttons (Electric Lime Pill + Dark Glass Pill) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#D4FF00] hover:bg-[#bbf000] text-black transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(212,255,0,0.3)] group"
            id="hero-cta-projects"
          >
            <span>프로젝트 살펴보기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Live Demo Button (Opens in New Tab) */}
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#141A29] hover:bg-[#1C253B] text-white border border-[#D4FF00]/60 hover:border-[#D4FF00] transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(212,255,0,0.2)] group"
            id="hero-cta-livedemo"
            title={`실습2 Live Demo: ${LIVE_DEMO_URL}`}
          >
            <Play className="w-4 h-4 text-[#D4FF00] fill-[#D4FF00]" />
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 text-[#D4FF00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium bg-[#101422]/90 border border-white/15 hover:border-white/35 text-zinc-200 hover:text-white transition-all backdrop-blur-md shadow-lg"
            title="이메일 복사"
            id="hero-cta-email"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span className="text-[#D4FF00] font-medium">이메일 복사됨!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-zinc-400" />
                <span className="font-mono text-xs sm:text-sm">{personalInfo.email}</span>
                <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1" />
              </>
            )}
          </button>
        </div>

        {/* Quick Identity Tags */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/[0.08] max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium text-zinc-300">풀스택 엔지니어링</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-medium text-zinc-300">CS 전공 평점 4.0 / 4.5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
            <span className="font-medium text-zinc-300">신입 / 인턴십 채용 가능</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-300">서울 성북구 정릉로</span>
          </div>
        </div>
      </div>
    </section>
  );
};
