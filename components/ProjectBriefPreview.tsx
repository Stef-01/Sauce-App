// FIX: Replaced placeholder content with a skeleton implementation to resolve compilation errors.
import React from 'react';

interface ProjectBriefPreviewProps {
  title: string;
  description: string;
}

export const ProjectBriefPreview: React.FC<ProjectBriefPreviewProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
