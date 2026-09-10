import React from 'react';
import { ArrowRight, Mail, Copy, Check, MapPin, Play, ExternalLink } from 'lucide-react';
import { PersonalInfo } from '../types';
import { LIVE_DEMO_URL, GITHUB_RAW_IMAGE_URL } from '../data/portfolioData';

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
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Top Status Capsule Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111422]/90 border border-white/[0.12] text-xs font-medium text-zinc-300 shadow-xl mb-6 backdrop-blur-md hover:border-[#D4FF00]/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
              <span className="text-zinc-200">홍익대학교 컴퓨터공학과</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 font-mono">학점 4.0 / 4.5</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#D4FF00] font-mono">2027 졸업예정</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
              문제를 집요하게 파고들어 <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
                직관적이고 견고한 소프트웨어로
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal max-w-2xl">
              안녕하세요, 풀스택 소프트웨어 엔지니어를 지향하는 <strong className="text-white font-semibold">{personalInfo.name}</strong>입니다.
              탄탄한 컴퓨터공학 이론과 최신 웹 생태계(React, TypeScript, Node.js, Python)를 바탕으로
              안정적인 아키텍처와 사용자 중심의 완성도 높은 프로덕트를 만듭니다.
            </p>

            {/* Action Buttons (Electric Lime Pill + Dark Glass Pill) */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-[#D4FF00] hover:bg-[#bbf000] text-black transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(212,255,0,0.3)] group"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-[#141A29] hover:bg-[#1C253B] text-white border border-[#D4FF00]/60 hover:border-[#D4FF00] transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(212,255,0,0.2)] group"
                id="hero-cta-livedemo"
                title={`실습2 Live Demo: ${LIVE_DEMO_URL}`}
              >
                <Play className="w-4 h-4 text-[#D4FF00] fill-[#D4FF00]" />
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4FF00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium bg-[#101422]/90 border border-white/15 hover:border-white/35 text-zinc-200 hover:text-white transition-all backdrop-blur-md shadow-lg"
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
            <div className="mt-8 pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs text-zinc-400">
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

          {/* Right Column: 상단 오른쪽 3x4 사진 카드 */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full order-1 lg:order-2">
            <div className="relative group">
              {/* Backlight / Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4FF00]/30 via-indigo-600/25 to-cyan-400/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
              
              {/* 3x4 Card Frame */}
              <div 
                className="relative w-48 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden bg-[#0A0D18] border-2 border-white/20 group-hover:border-[#D4FF00]/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col"
                id="container-profile-3x4"
              >
                
                {/* 3x4 Spec Badge (Top Right of image) */}
                <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-white shadow-lg">
                  <span className="text-[#D4FF00]">3 × 4</span>
                  <span className="text-zinc-400">Photo</span>
                </div>

                {/* Status Indicator (Top Left of image) */}
                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0A0D18]/85 backdrop-blur-md border border-[#D4FF00]/40 text-[10px] font-mono text-[#D4FF00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-ping" />
                  <span>CS.dev</span>
                </div>

                {/* 3x4 Portrait Image */}
                <img
                  src={personalInfo.profileImageUrl || '/profile.jpg'}
                  alt="성지훈 3x4 프로필 사진"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = GITHUB_RAW_IMAGE_URL;
                  }}
                  id="hero-profile-3x4-image"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-3.5 bg-gradient-to-t from-black/95 via-black/75 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                        <span>{personalInfo.name}</span>
                        <span className="text-[10px] font-normal text-zinc-400 font-mono">({personalInfo.nameEn})</span>
                      </div>
                      <p className="text-[11px] text-[#D4FF00] font-mono mt-0.5">Computer Engineering</p>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>재학중</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
