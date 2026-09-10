import React, { useState, useEffect } from 'react';
import { Terminal, Send, Printer, Menu, X, Sparkles, Play, ExternalLink } from 'lucide-react';
import { LIVE_DEMO_URL } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
  onPrintClick: () => void;
  onLiveDemoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onPrintClick, onLiveDemoClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '학력', href: '#education' },
    { label: '기술 스택', href: '#skills' },
    { label: '프로젝트', href: '#projects' },
    { label: '수상·자격증', href: '#awards' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05060A]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group text-white hover:text-[#D4FF00] transition-colors"
          id="navbar-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-[#141824] border border-white/10 flex items-center justify-center group-hover:border-[#D4FF00]/50 transition-colors shadow-inner">
            <span className="text-[#D4FF00] font-bold text-sm">✦</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-base sm:text-lg">성지훈</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-400 font-mono">
                CS.dev
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block">
              Hongik Univ. Computer Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0E121E]/80 border border-white/[0.08] backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Live Demo Action Button (Opens in New Tab) */}
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-[#141C0F] border border-[#D4FF00]/50 text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_15px_rgba(212,255,0,0.2)]"
            title={`실습2 Live Demo: ${LIVE_DEMO_URL}`}
            id="btn-nav-livedemo"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Live Demo</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          <button
            onClick={onPrintClick}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-zinc-300 bg-[#121624] border border-white/10 hover:border-white/30 hover:text-white transition-colors"
            title="이력서 인쇄 및 PDF 저장"
            id="btn-print-resume"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>이력서 인쇄</span>
          </button>

          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#D4FF00] hover:bg-[#bbf000] text-black transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(212,255,0,0.25)]"
            id="btn-nav-contact"
          >
            <Send className="w-3.5 h-3.5" />
            <span>연락하기</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#141824] border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
          id="btn-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D17]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-200 hover:text-[#D4FF00] hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={LIVE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                onLiveDemoClick?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold bg-[#141C0F] text-[#D4FF00] border border-[#D4FF00]/50 shadow-md"
              id="btn-mobile-livedemo"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Live Demo (새 탭 열기)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPrintClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-zinc-300 bg-[#121624] border border-white/10"
            >
              <Printer className="w-4 h-4" />
              <span>이력서 인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-[#D4FF00] text-black"
            >
              <Send className="w-4 h-4" />
              <span>성지훈에게 연락하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
