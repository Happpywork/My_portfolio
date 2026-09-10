import React from 'react';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121626] border border-[#D4FF00]/40 text-white text-xs font-medium shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="w-5 h-5 rounded-full bg-[#D4FF00] flex items-center justify-center text-black">
        <Check className="w-3.5 h-3.5 stroke-[3]" />
      </div>
      <span>{message}</span>
    </div>
  );
};
