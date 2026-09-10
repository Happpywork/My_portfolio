import React from 'react';
import { User, Calendar, Phone, Mail, MapPin, Copy, Check, ExternalLink, Shield, Sparkles, Send } from 'lucide-react';
import { PersonalInfo } from '../types';

interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
  onCopy: (text: string, label: string) => void;
  copiedField: string | null;
  onContactClick: () => void;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  personalInfo,
  onCopy,
  copiedField,
  onContactClick,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
            <span>01</span>
            <span className="text-zinc-500">/</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            인적사항 & 소개
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            소프트웨어 엔지니어로서의 정체성과 기본 인적사항입니다.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Profile Info Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B0F1C]/80 border border-white/[0.09] p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#182038] to-[#0A0D18] border border-white/15 flex items-center justify-center text-2xl font-black text-[#D4FF00] shadow-inner">
                    지훈
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {personalInfo.name}
                      </h3>
                      <span className="text-xs text-zinc-400 font-mono font-medium">
                        {personalInfo.nameEn}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D4FF00] font-medium mt-0.5">
                      {personalInfo.role}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  구직 중 / 인턴십 가능
                </span>
              </div>

              {/* Information Detail Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Name & Age */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                    <User className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-mono">이름 및 나이</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {personalInfo.name} <span className="text-xs text-zinc-400 font-normal">(만 {personalInfo.age}세)</span>
                    </div>
                  </div>
                </div>

                {/* BirthDate */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                    <Calendar className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-mono">생년월일</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {personalInfo.birthDate}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start justify-between group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                      <Phone className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">연락처</div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-white hover:text-[#D4FF00] transition-colors block mt-0.5"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopy(personalInfo.phone, 'phone')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="전화번호 복사"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start justify-between group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                      <Mail className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">이메일</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-[#D4FF00] transition-colors block mt-0.5 font-mono text-xs sm:text-sm truncate max-w-[160px] sm:max-w-none"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopy(personalInfo.email, 'email')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="이메일 복사"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Address Full Width */}
                <div className="sm:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                      <MapPin className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">주소지</div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {personalInfo.address}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopy(personalInfo.address, 'address')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="주소 복사"
                  >
                    {copiedField === 'address' ? (
                      <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="text-xs text-zinc-400">
                추가 이메일:{' '}
                <a
                  href={`mailto:${personalInfo.secondaryEmail}`}
                  className="text-zinc-300 hover:text-white font-mono underline ml-1"
                >
                  {personalInfo.secondaryEmail}
                </a>
              </div>
              <button
                onClick={onContactClick}
                className="text-xs font-semibold text-[#D4FF00] hover:underline flex items-center gap-1"
              >
                <span>직접 메시지 보내기</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Narrative Card (Growth & Core Values) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B0F1C]/80 border border-white/[0.09] p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-[#D4FF00]/10 text-[#D4FF00]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">
                  개발자로서의 목표와 지향점
                </h4>
              </div>

              <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed">
                {personalInfo.aboutStory.map((paragraph, idx) => (
                  <p key={idx} className="border-l-2 border-white/10 pl-3.5 py-0.5">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] bg-white/[0.02] -mx-6 -mb-6 p-6 rounded-b-2xl">
              <div className="text-xs text-zinc-400 font-mono mb-2">KEY ATTRIBUTES</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.06] text-zinc-300 text-xs font-medium">
                  # 끈기 있는 디버깅
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.06] text-zinc-300 text-xs font-medium">
                  # 명확한 커뮤니케이션
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.06] text-zinc-300 text-xs font-medium">
                  # 성능 및 아키텍처 중심
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.06] text-[#D4FF00]/90 text-xs font-medium border border-[#D4FF00]/20">
                  # 학점 4.0 전공자
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
