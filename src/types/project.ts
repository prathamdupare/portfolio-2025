export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'desktop';
  image: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ProjectInteractionState {
  hoveredProject: string | null;
  pinnedProject: string | null;
  isPreviewVisible: boolean;
}

export type ProjectViewType = 'desktop' | 'mobile';

export interface PreviewPanelProps {
  project: Project | null;
  isVisible: boolean;
  isPinned: boolean;
  onClose: () => void;
}

export interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  isPinned: boolean;
  onHover: (projectId: string | null) => void;
  onPin: (projectId: string) => void;
} 