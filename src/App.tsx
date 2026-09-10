import React, { useState, useEffect } from 'react';
import {
  initialPersonalInfo,
  initialEducationList,
  techStackData,
  initialProjects,
  initialAwardsCertifications,
  faqItems,
  LIVE_DEMO_URL,
} from './data/portfolioData';
import { Project, AwardCertification, PersonalInfo } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { PersonalInfoSection } from './components/PersonalInfoSection';
import { EducationSection } from './components/EducationSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AddEditProjectModal } from './components/AddEditProjectModal';
import { AwardsSection } from './components/AwardsSection';
import { EditAwardsModal } from './components/EditAwardsModal';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [personalInfo] = useState<PersonalInfo>(initialPersonalInfo);

  // Projects State with LocalStorage Persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('seong_jihoon_projects');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        // Ensure practice2-project is present so users with previous cached states get it immediately
        const hasPractice2 = parsed.some((p) => p.id === 'practice2-project');
        if (!hasPractice2 && initialProjects.length > 0) {
          return [initialProjects[0], ...parsed];
        }
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return initialProjects;
  });

  // Awards State with LocalStorage Persistence
  const [awards, setAwards] = useState<AwardCertification[]>(() => {
    try {
      const saved = localStorage.getItem('seong_jihoon_awards');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return initialAwardsCertifications;
  });

  // Modals & Selection States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isEditAwardsModalOpen, setIsEditAwardsModalOpen] = useState(false);

  // Copy Feedback State
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('seong_jihoon_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  // Sync awards to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('seong_jihoon_awards', JSON.stringify(awards));
    } catch (e) {
      console.error(e);
    }
  }, [awards]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(label);
      showToast(`'${text}' 클립보드에 복사되었습니다.`);
      setTimeout(() => {
        setCopiedField(null);
      }, 2500);
    });
  };

  const handleCopyEmail = () => {
    handleCopy(personalInfo.email, 'hero-email');
  };

  const handleLiveDemoClick = (url: string = LIVE_DEMO_URL) => {
    // Open the URL directly in a new tab
    try {
      const win = window.open(url, '_blank');
      if (win) {
        win.focus();
      }
    } catch (e) {
      console.warn('window.open error:', e);
    }
  };

  const handleCopyDemoUrl = (url: string = LIVE_DEMO_URL) => {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Live Demo 로컬 경로가 복사되었습니다.');
    });
  };

  const handleSaveProject = (savedProj: Project) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === savedProj.id);
      if (exists) {
        return prev.map((p) => (p.id === savedProj.id ? savedProj : p));
      }
      return [savedProj, ...prev];
    });
    showToast(`'${savedProj.title}' 프로젝트가 저장되었습니다.`);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
    showToast('프로젝트가 삭제되었습니다.');
  };

  const handleSaveAwards = (updatedAwards: AwardCertification[]) => {
    setAwards(updatedAwards);
    showToast('수상 및 자격증 정보가 업데이트되었습니다.');
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05060A] text-zinc-100 font-sans selection:bg-[#D4FF00] selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onContactClick={scrollToContact}
        onPrintClick={handlePrint}
        onLiveDemoClick={() => handleLiveDemoClick(LIVE_DEMO_URL)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Cosmic Horizon & CTA */}
        <Hero
          personalInfo={personalInfo}
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedField === 'hero-email'}
          onContactClick={scrollToContact}
          onLiveDemoClick={() => handleLiveDemoClick(LIVE_DEMO_URL)}
        />

        {/* 2. Key Metrics & Engineering Philosophy */}
        <Metrics />

        {/* 3. Personal Information & Core Attributes */}
        <PersonalInfoSection
          personalInfo={personalInfo}
          onCopy={handleCopy}
          copiedField={copiedField}
          onContactClick={scrollToContact}
        />

        {/* 4. Education & Academic Background */}
        <EducationSection educationList={initialEducationList} />

        {/* 5. Tech Stack & Engineering Competencies */}
        <TechStackSection techStackData={techStackData} />

        {/* 6. Projects Showcase */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onAddNewProject={() => {
            setEditingProject(null);
            setIsAddEditModalOpen(true);
          }}
          onEditProject={(project) => {
            setEditingProject(project);
            setIsAddEditModalOpen(true);
          }}
          onDeleteProject={handleDeleteProject}
          onLiveDemoClick={handleLiveDemoClick}
          onCopyDemoUrl={handleCopyDemoUrl}
        />

        {/* 7. Awards & Certifications */}
        <AwardsSection
          items={awards}
          onOpenEditModal={() => setIsEditAwardsModalOpen(true)}
        />

        {/* 8. FAQ Section */}
        <FAQSection faqItems={faqItems} />

        {/* 9. Contact Section with Email Composer */}
        <ContactSection
          personalInfo={personalInfo}
          onCopy={handleCopy}
          copiedField={copiedField}
        />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLiveDemoClick={handleLiveDemoClick}
      />

      {/* Add / Edit Project Modal */}
      <AddEditProjectModal
        isOpen={isAddEditModalOpen}
        onClose={() => {
          setIsAddEditModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        initialProject={editingProject}
      />

      {/* Edit Awards Modal */}
      <EditAwardsModal
        isOpen={isEditAwardsModalOpen}
        onClose={() => setIsEditAwardsModalOpen(false)}
        items={awards}
        onSave={handleSaveAwards}
      />

      {/* Action Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
