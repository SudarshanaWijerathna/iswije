import React from 'react';

interface FeaturedProjectProps {
  project?: {
    title?: string;
    logoUrl?: string;
    thumbnailUrl?: string;
    link?: string;
  };
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const title = project?.title || 'Insightflow';
  const logoUrl = project?.logoUrl || '/project_logo_001.svg';
  const thumbnailUrl = project?.thumbnailUrl || '/project_thumbnail_001.png';

  return (
    <div className="featured-project" id="featuredProject">
      <div className="featured-project-header">
        <img src={logoUrl} alt={`${title} Logo`} className="featured-project-logo" />
        <h3 className="featured-project-title">{title}</h3>
      </div>
      <div className="featured-project-media">
        <img src={thumbnailUrl} alt={`${title} Project Thumbnail`} className="featured-project-img" />
      </div>
    </div>
  );
}
