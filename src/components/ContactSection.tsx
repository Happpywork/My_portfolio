import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, Sparkles, User, Building } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  onCopy: (text: string, label: string) => void;
  copiedField: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  personalInfo,
  onCopy,
  copiedField,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[포트폴리오 문의] ${senderCompany ? `${senderCompany} ` : ''}${senderName}님의 연락`
    );
    const body = encodeURIComponent(
      `보낸 사람: ${senderName} (${senderEmail})\n소속/기업: ${senderCompany || '미기재'}\n\n내용:\n${message}\n\n--\n성지훈 포트폴리오 웹사이트를 통해 전송됨`
    );

    // Open mailto
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
            <span>07</span>
            <span className="text-zinc-500">/</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            연락처 & 메시지 보내기
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-lg mx-auto">
            신입/인턴십 채용 제안, 프로젝트 협업 및 커피챗은 언제든 편하게 연락 부탁드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B0F1C]/90 border border-white/[0.09] p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div>
              <div className="text-xs font-mono text-[#D4FF00] mb-1 uppercase tracking-wider">
                Direct Contact
              </div>
              <h3 className="text-xl font-bold text-white">
                성지훈 (Jihoon Seong)
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                홍익대학교 컴퓨터공학과 • 풀스택 엔지니어
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Phone item */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                    <Phone className="w-4 h-4 text-[#D4FF00]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 font-mono">전화번호</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-[#D4FF00] transition-colors block mt-0.5"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => onCopy(personalInfo.phone, 'contact-phone')}
                  className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white"
                  title="전화번호 복사"
                >
                  {copiedField === 'contact-phone' ? (
                    <Check className="w-4 h-4 text-[#D4FF00]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email item */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                    <Mail className="w-4 h-4 text-[#D4FF00]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 font-mono">주 이메일 (Naver)</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-[#D4FF00] transition-colors block mt-0.5 font-mono text-xs sm:text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => onCopy(personalInfo.email, 'contact-email')}
                  className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white"
                  title="이메일 복사"
                >
                  {copiedField === 'contact-email' ? (
                    <Check className="w-4 h-4 text-[#D4FF00]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Secondary Email item */}
              {personalInfo.secondaryEmail && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 font-mono">보조 이메일 (Gmail)</div>
                      <a
                        href={`mailto:${personalInfo.secondaryEmail}`}
                        className="text-sm font-semibold text-white hover:text-[#D4FF00] transition-colors block mt-0.5 font-mono text-xs sm:text-sm"
                      >
                        {personalInfo.secondaryEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopy(personalInfo.secondaryEmail!, 'contact-sec-email')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white"
                    title="보조 이메일 복사"
                  >
                    {copiedField === 'contact-sec-email' ? (
                      <Check className="w-4 h-4 text-[#D4FF00]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Address item */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.06] text-zinc-300">
                    <MapPin className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 font-mono">거주 주소지</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      {personalInfo.address}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onCopy(personalInfo.address, 'contact-address')}
                  className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white"
                  title="주소 복사"
                >
                  {copiedField === 'contact-address' ? (
                    <Check className="w-4 h-4 text-[#D4FF00]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#D4FF00]/5 border border-[#D4FF00]/20 text-xs text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#D4FF00]">평일/주말 상시 확인:</span> 이메일 또는 문자로 연락 주시면 24시간 이내에 확인 후 신속하게 회신드리겠습니다.
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B0F1C]/90 border border-white/[0.09] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-[#D4FF00]" />
              <h3 className="text-lg font-bold text-white">
                빠른 문의 메시지 작성
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              아래 양식을 작성하시면 기본 메일 앱으로 즉시 전송할 수 있는 이메일이 자동 완성됩니다.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    보내시는 분 성함 *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동 채용담당자"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#060810] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    회사 또는 소속 기관
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="예: ○○테크 인사팀"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#060810] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  회신받으실 이메일 주소 *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#060810] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  문의 내용 (채용 제안, 프로젝트 협업, 커피챗 등) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="안녕하세요 성지훈님, 귀하의 포트폴리오를 보고 ..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#060810] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                />
              </div>

              {sentSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>이메일 클라이언트가 실행되었습니다. 창에서 전송을 완료해 주세요!</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#D4FF00] hover:bg-[#bbf000] text-black font-bold text-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_25px_rgba(212,255,0,0.25)]"
                  id="btn-submit-contact"
                >
                  <Send className="w-4 h-4" />
                  <span>이메일 클라이언트로 보내기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
