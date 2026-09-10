import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (matching screenshot: "Questions? We're here to assist!") */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#D4FF00] mb-3">
            <span>06</span>
            <span className="text-zinc-500">/</span>
            <span>QUESTIONS & ANSWERS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            협업 방식, 채용 가능 여부 및 개발 가치관에 대한 질문과 답변입니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B0F1D] border-[#D4FF00]/40 shadow-xl'
                    : 'bg-[#080B14]/80 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#D4FF00] text-black border-[#D4FF00] rotate-180'
                        : 'bg-white/[0.05] text-zinc-400 border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.05]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
