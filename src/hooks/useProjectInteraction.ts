import { useState, useCallback, useEffect } from 'react';
import type { ProjectInteractionState } from '@/types/project';

export const useProjectInteraction = () => {
  const [state, setState] = useState<ProjectInteractionState>({
    hoveredProject: null,
    pinnedProject: null,
    isPreviewVisible: false,
  });
  
  // Set 'about' as the default section
  const [currentSection, setCurrentSection] = useState('about');

  const handleHover = useCallback((projectId: string | null) => {
    setState(prev => {
      // If pinned, don't change hover state
      if (prev.pinnedProject) {
        return prev;
      }
      
      // If projectId is null (mouse left card), keep the previous hover state
      // Only change when actually hovering over a different card
      if (projectId === null) {
        return {
          ...prev,
          // Keep the current hovered project, don't clear it
          isPreviewVisible: !!prev.hoveredProject,
        };
      }
      
      // Only update if we're hovering over a different project
      if (projectId !== prev.hoveredProject) {
        return {
          ...prev,
          hoveredProject: projectId,
          isPreviewVisible: true,
        };
      }
      
      return prev;
    });
  }, []);

  const handlePin = useCallback((projectId: string) => {
    setState(prev => ({
      ...prev,
      pinnedProject: prev.pinnedProject === projectId ? null : projectId,
      isPreviewVisible: true,
      hoveredProject: null,
    }));
  }, []);

  const handleClose = useCallback(() => {
    setState(prev => ({
      ...prev,
      pinnedProject: null,
      isPreviewVisible: !!prev.hoveredProject,
    }));
  }, []);

  const handleClearHover = useCallback(() => {
    // Don't clear hover state at all - maintain it for section transitions
    // Only clear if user explicitly closes or clicks elsewhere
  }, []);

  const handleSectionChange = useCallback((section: string) => {
    setCurrentSection(section);
    
    // When switching to about, maintain preview state and ensure visibility
    if (section === 'about') {
      setState(prev => {
        const activeProject = prev.pinnedProject || prev.hoveredProject;
        return {
          ...prev,
          isPreviewVisible: !!activeProject,
        };
      });
    } else if (section === 'projects') {
      // When switching to projects, pre-select the first featured project if none is selected
      setState(prev => {
        const hasActiveProject = prev.pinnedProject || prev.hoveredProject;
        
        if (!hasActiveProject) {
          // Pre-select the first featured project (E-Commerce Platform with id '1')
          return {
            ...prev,
            hoveredProject: '1',
            isPreviewVisible: true,
          };
        }
        
        return {
          ...prev,
          isPreviewVisible: true,
        };
      });
    }
  }, []);

  const activeProject = state.pinnedProject || state.hoveredProject;

  // Handle outside clicks to unpin
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (state.pinnedProject) {
        const target = event.target as Element;
        const isPreviewPanel = target.closest('[data-preview-panel]');
        const isProjectCard = target.closest('[data-project-card]');
        const isDock = target.closest('[data-dock]');
        
        // Don't close on dock clicks (allow section navigation)
        if (!isPreviewPanel && !isProjectCard && !isDock) {
          handleClose();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [state.pinnedProject, handleClose]);

  return {
    state,
    activeProject,
    currentSection,
    handleHover,
    handlePin,
    handleClose,
    handleClearHover,
    handleSectionChange,
  };
}; 