import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Save, Award } from 'lucide-react';
import { AwardCertification } from '../types';

interface EditAwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: AwardCertification[];
  onSave: (updated: AwardCertification[]) => void;
}

export const EditAwardsModal: React.FC<EditAwardsModalProps> = ({
  isOpen,
  onClose,
  items,
  onSave,
}) => {
  const [awardList, setAwardList] = useState<AwardCertification[]>([]);

  useEffect(() => {
    if (isOpen) {
      setAwardList(JSON.parse(JSON.stringify(items)));
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  const handleChange = (id: string, field: keyof AwardCertification, value: string) => {
    setAwardList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddNew = () => {
    const newItem: AwardCertification = {
      id: `award-${Date.now()}`,
      date: '2024.01',
      title: '신규 수상/자격증명 입력',
      organization: '발급기관/주최협회',
      type: 'award',
      badge: '수상/인증',
      description: '상세 설명 및 성과',
    };
    setAwardList([...awardList, newItem]);
  };

  const handleDelete = (id: string) => {
    setAwardList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(awardList);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#0B0F1C] border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/15 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-1">
          <Award className="w-5 h-5 text-[#D4FF00]" />
          <h3 className="text-xl font-bold text-white">
            수상 및 자격증 정보 편집
          </h3>
        </div>
        <p className="text-xs text-zinc-400 mb-6">
          &apos;0000 대상&apos;, &apos;0000 자격증&apos; 등 플레이스홀더를 실제 취득하신 공인 명칭으로 수정하세요.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {awardList.map((item, idx) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#060810] border border-white/10 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D4FF00]">
                    #{idx + 1} {item.type === 'award' ? '수상 내역' : '자격증'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      취득/수상 일자
                    </label>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => handleChange(item.id, 'date', e.target.value)}
                      placeholder="2019.01"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E121E] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      수상/자격증 명칭
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleChange(item.id, 'title', e.target.value)}
                      placeholder="0000 대상 또는 정보처리기능사"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E121E] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      주최 / 발급 기관
                    </label>
                    <input
                      type="text"
                      value={item.organization}
                      onChange={(e) => handleChange(item.id, 'organization', e.target.value)}
                      placeholder="○○○○협회"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E121E] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      구분 (타입)
                    </label>
                    <select
                      value={item.type}
                      onChange={(e) => handleChange(item.id, 'type', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0E121E] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                    >
                      <option value="award">수상 (Award)</option>
                      <option value="certification">자격증 (Certification)</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={handleAddNew}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4FF00] hover:underline"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>새 항목 추가</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-zinc-300 text-xs font-medium"
              >
                취소
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#D4FF00] hover:bg-[#bbf000] text-black text-xs font-bold shadow-lg"
              >
                <Save className="w-3.5 h-3.5" />
                <span>저장 완료</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
