import React, { useState, useEffect } from 'react';
import { X, Plus, Save } from 'lucide-react';
import { Project } from '../types';

interface AddEditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  initialProject?: Project | null;
}

export const AddEditProjectModal: React.FC<AddEditProjectModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProject,
}) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    subtitle: '',
    period: '2024.01 ~ 2024.06',
    category: 'Fullstack',
    description: '',
    keyFeatures: [''],
    roleAndAchievements: [''],
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/',
    liveDemoUrl: '',
    architectureNote: '',
  });

  const [techInput, setTechInput] = useState('React, Node.js, PostgreSQL');

  useEffect(() => {
    if (initialProject) {
      setFormData(initialProject);
      setTechInput(initialProject.techStack.join(', '));
    } else {
      setFormData({
        title: '',
        subtitle: '',
        period: '2024.01 ~ 2024.06',
        category: 'Fullstack',
        description: '',
        keyFeatures: ['기능 1 설명', '기능 2 설명'],
        roleAndAchievements: ['역할 및 구현 내용'],
        techStack: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/',
        liveDemoUrl: '',
        architectureNote: '',
      });
      setTechInput('React, Node.js, PostgreSQL');
    }
  }, [initialProject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title?.trim()) return;

    const parsedTech = techInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const projectToSave: Project = {
      id: initialProject?.id || `proj-${Date.now()}`,
      title: formData.title || '신규 프로젝트',
      subtitle: formData.subtitle || '',
      period: formData.period || '2024.01 ~ 2024.06',
      category: (formData.category as any) || 'Fullstack',
      description: formData.description || '',
      keyFeatures: (formData.keyFeatures || []).filter((f) => f.trim().length > 0),
      roleAndAchievements: (formData.roleAndAchievements || []).filter((r) => r.trim().length > 0),
      techStack: parsedTech.length > 0 ? parsedTech : ['React', 'Node.js'],
      githubUrl: formData.githubUrl || undefined,
      liveDemoUrl: formData.liveDemoUrl || undefined,
      architectureNote: formData.architectureNote || undefined,
      isFeatured: initialProject?.isFeatured ?? false,
    };

    onSave(projectToSave);
    onClose();
  };

  const handleFeatureChange = (index: number, val: string) => {
    const list = [...(formData.keyFeatures || [])];
    list[index] = val;
    setFormData({ ...formData, keyFeatures: list });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      keyFeatures: [...(formData.keyFeatures || []), ''],
    });
  };

  const removeFeature = (index: number) => {
    const list = (formData.keyFeatures || []).filter((_, i) => i !== index);
    setFormData({ ...formData, keyFeatures: list });
  };

  const handleRoleChange = (index: number, val: string) => {
    const list = [...(formData.roleAndAchievements || [])];
    list[index] = val;
    setFormData({ ...formData, roleAndAchievements: list });
  };

  const addRole = () => {
    setFormData({
      ...formData,
      roleAndAchievements: [...(formData.roleAndAchievements || []), ''],
    });
  };

  const removeRole = (index: number) => {
    const list = (formData.roleAndAchievements || []).filter((_, i) => i !== index);
    setFormData({ ...formData, roleAndAchievements: list });
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

        <h3 className="text-xl font-bold text-white mb-1">
          {initialProject ? '프로젝트 수정' : '새 프로젝트 등록'}
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          포트폴리오에 반영될 프로젝트 세부 정보를 입력하세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1">
              프로젝트명 (Title) *
            </label>
            <input
              type="text"
              required
              placeholder="예: DevPulse - 실시간 협업 에디터"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#060810] border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                기간 (Period)
              </label>
              <input
                type="text"
                placeholder="2024.03 ~ 2024.08"
                value={formData.period || ''}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                카테고리 (Category)
              </label>
              <select
                value={formData.category || 'Fullstack'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
              >
                <option value="Fullstack">Fullstack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="System & AI">System & AI</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1">
              한 줄 소개 (Subtitle)
            </label>
            <input
              type="text"
              placeholder="프로젝트에 대한 간단한 설명"
              value={formData.subtitle || ''}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1">
              기술 스택 (Tech Stack, 쉼표로 구분)
            </label>
            <input
              type="text"
              placeholder="React, TypeScript, Node.js, PostgreSQL"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1">
              상세 설명 (Description)
            </label>
            <textarea
              rows={3}
              placeholder="프로젝트의 배경과 목표를 기술해주세요."
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
            />
          </div>

          {/* Key Features input list */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-mono text-zinc-300">주요 기능 (Key Features)</label>
              <button
                type="button"
                onClick={addFeature}
                className="text-xs text-[#D4FF00] hover:underline flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> 항목 추가
              </button>
            </div>
            <div className="space-y-2">
              {(formData.keyFeatures || []).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={feat}
                    onChange={(e) => handleFeatureChange(idx, e.target.value)}
                    placeholder={`기능 ${idx + 1} 설명`}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-[#060810] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                  />
                  {(formData.keyFeatures?.length || 0) > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(idx)}
                      className="p-1.5 text-zinc-500 hover:text-red-400"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Role & Achievements input list */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-mono text-zinc-300">
                담당 역할 및 성과 (Role & Achievements)
              </label>
              <button
                type="button"
                onClick={addRole}
                className="text-xs text-[#D4FF00] hover:underline flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> 항목 추가
              </button>
            </div>
            <div className="space-y-2">
              {(formData.roleAndAchievements || []).map((role, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => handleRoleChange(idx, e.target.value)}
                    placeholder="역할 및 구현 내용, 정량적 성과"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-[#060810] border border-white/15 text-xs text-white focus:outline-none focus:border-[#D4FF00]"
                  />
                  {(formData.roleAndAchievements?.length || 0) > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRole(idx)}
                      className="p-1.5 text-zinc-500 hover:text-red-400"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                GitHub URL
              </label>
              <input
                type="text"
                placeholder="https://github.com/..."
                value={formData.githubUrl || ''}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                Live Demo URL
              </label>
              <input
                type="text"
                placeholder="https://..."
                value={formData.liveDemoUrl || ''}
                onChange={(e) => setFormData({ ...formData, liveDemoUrl: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#060810] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4FF00]"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-zinc-300 text-xs font-medium"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#D4FF00] hover:bg-[#bbf000] text-black text-xs font-bold shadow-lg"
            >
              <Save className="w-3.5 h-3.5" />
              <span>저장하기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
