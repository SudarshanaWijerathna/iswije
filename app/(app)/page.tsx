import React from 'react';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

import { PortraitParallax } from '@/components/PortraitParallax';
import { CanvasFrame } from '@/components/CanvasFrame';
import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { ExperimentsSection } from '@/components/ExperimentsSection';
import { HowIBuildSection } from '@/components/HowIBuildSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let profileData: any = null;
  let siteSettings: any = null;
  let projectsList: any[] = [];
  let capabilitiesList: any[] = [];
  let experimentsList: any[] = [];

  try {
    const payload = await getPayload({ config: configPromise });

    // Fetch Profile
    try {
      profileData = await payload.findGlobal({ slug: 'profile' as any });
    } catch (e) {
      // fallback
    }

    // Fetch Site Settings
    try {
      siteSettings = await payload.findGlobal({ slug: 'site-settings' as any });
    } catch (e) {
      // fallback
    }

    // Fetch Projects
    try {
      const pRes = await payload.find({
        collection: 'projects',
        sort: 'order',
        limit: 100,
      });
      if (pRes.docs && pRes.docs.length > 0) {
        projectsList = pRes.docs.map((doc: any) => ({
          id: doc.id,
          title: doc.title,
          category: doc.category,
          isFeatured: doc.isFeatured,
          subtitle: doc.subtitle,
          description: doc.description,
          liveDemoUrl: doc.liveDemoUrl,
          liveDemoText: doc.liveDemoText,
          githubUrl: doc.githubUrl,
          previewType: doc.previewType,
          thumbnailUrl:
            typeof doc.thumbnail === 'object' && doc.thumbnail?.url
              ? doc.thumbnail.url
              : doc.thumbnailStaticUrl,
          logoUrl:
            typeof doc.logo === 'object' && doc.logo?.url
              ? doc.logo.url
              : doc.logoStaticUrl,
          tags: doc.tags,
        }));
      }
    } catch (e) {
      // fallback
    }

    // Fetch Capabilities
    try {
      const cRes = await payload.find({
        collection: 'capabilities',
        sort: 'order',
        limit: 100,
      });
      if (cRes.docs && cRes.docs.length > 0) {
        capabilitiesList = cRes.docs.map((doc: any) => ({
          id: doc.id,
          title: doc.title,
          iconType: doc.iconType,
          description: doc.description,
          highlights: doc.highlights,
        }));
      }
    } catch (e) {
      // fallback
    }

    // Fetch Experiments
    try {
      const eRes = await payload.find({
        collection: 'experiments',
        sort: 'order',
        limit: 100,
      });
      if (eRes.docs && eRes.docs.length > 0) {
        experimentsList = eRes.docs.map((doc: any) => ({
          id: doc.id,
          title: doc.title,
          link: doc.link,
          tags: doc.tags,
        }));
      }
    } catch (e) {
      // fallback
    }
  } catch (err) {
    // If database is not ready, graceful fallback with all original content
  }

  // Find featured project if any
  const featured = projectsList.find((p) => p.isFeatured) || {
    title: 'Insightflow',
    logoUrl: '/project_logo_001.svg',
    thumbnailUrl: '/project_thumbnail_001.png',
  };

  // Filter out featured from grid or show regular grid
  const gridProjects = projectsList.filter((p) => !p.isFeatured);

  const worksTitle = siteSettings?.worksTitle || 'Selected Works';
  const worksSubtitle =
    siteSettings?.buildSubtitle ||
    "A selection of products, systems, and experiments I've built across AI, software, and data.";

  const aboutParagraphs = siteSettings?.aboutParagraphs?.map((p: any) => p.text) || [];

  return (
    <>
      <PortraitParallax />

      {/* Top Mobile Frame Canvas (Watermark, Portrait, Overlays, Notch Tab, Mode Switcher) */}
      <CanvasFrame profile={profileData} />

      {/* Selected Works Section (Displayed when Build mode is on) */}
      <section className="selected-works-section" id="selectedWorks" aria-label="Selected Works">
        {/* Section Header */}
        <div className="works-header">
          <h2 className="works-title" id="worksTitle">{worksTitle}</h2>
          <p className="works-subtitle" id="worksSubtitle">{worksSubtitle}</p>
        </div>

        {/* Featured Project Showcase: Insightflow */}
        <FeaturedProject project={featured} />

        {/* Works Grid Container with Notch003 Top-Left Contour */}
        <ProjectsGrid
          projects={gridProjects.length > 0 ? gridProjects : undefined}
          githubUrl={profileData?.githubUrl}
          linkedinUrl={profileData?.linkedinUrl}
        />

        {/* What I Build Section (Capabilities & Domains) */}
        <CapabilitiesSection capabilities={capabilitiesList.length > 0 ? capabilitiesList : undefined} />

        {/* Experiments & Research */}
        <ExperimentsSection experiments={experimentsList.length > 0 ? experimentsList : undefined} />

        {/* How I Build */}
        <HowIBuildSection />

        {/* About */}
        <AboutSection
          lead={siteSettings?.aboutLead}
          paragraphs={aboutParagraphs.length > 0 ? aboutParagraphs : undefined}
          highlight={siteSettings?.aboutHighlight}
        />

        {/* Contact */}
        <ContactSection
          prompt={siteSettings?.contactPrompt}
          email={profileData?.email}
          linkedinUrl={profileData?.linkedinUrl}
          githubUrl={profileData?.githubUrl}
          cvUrl={profileData?.cvUrl}
        />
      </section>
    </>
  );
}
