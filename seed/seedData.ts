import { getPayload } from 'payload';
import configPromise from '../payload.config';

export async function seed() {
  const payload = await getPayload({ config: configPromise });

  // 1. Update Profile Global
  try {
    await payload.updateGlobal({
      slug: 'profile',
      data: {
        heroHeading: 'Hey, I’m Isuru',
        heroBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin purus pretium fermentum imperdiet.',
        isAvailableForWork: true,
        statusText: 'AVAILABLE FOR WORK',
        linkedinUrl: 'https://www.linkedin.com/in/sudarshanawijerathna/',
        githubUrl: 'https://github.com/SudarshanaWijerathna',
        email: 'hello@example.com',
      },
    });
  } catch (e) {
    console.error('Error updating profile global:', e);
  }

  // 2. Update Site Settings
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        worksTitle: 'Selected Works',
        buildSubtitle: "A selection of products, systems, and experiments I've built across AI, software, and data.",
        designSubtitle: 'Design systems, interaction prototypes, and spatial user experiences crafted with micro-precision.',
        aboutLead: 'I started by making things people could see.',
        aboutParagraphs: [
          { text: 'Before university, I was making YouTube videos, editing footage, designing thumbnails and creating visual identities for clients.' },
          { text: 'Later, I started building software and became interested in AI and machine learning.' },
        ],
        aboutHighlight: "Today, I work somewhere between the two — building technical products while bringing a designer's perspective to how they look, communicate and feel.",
        contactPrompt: 'Have something worth building?',
        footerCopy: 'Crafted with precision & modern web standards.',
      },
    });
  } catch (e) {
    console.error('Error updating site-settings global:', e);
  }

  // 3. Seed Projects
  try {
    const existingProjects = await payload.find({ collection: 'projects' });
    if (existingProjects.totalDocs === 0) {
      // Featured: Insightflow
      await payload.create({
        collection: 'projects',
        data: {
          title: 'Insightflow',
          isFeatured: true,
          category: 'build',
          description: 'AI-driven workflow platform and visual data canvas.',
          logoStaticUrl: '/project_logo_001.svg',
          thumbnailStaticUrl: '/project_thumbnail_001.png',
          order: 0,
        },
      });

      // Project 1: Nexus AI
      await payload.create({
        collection: 'projects',
        data: {
          title: 'Nexus AI',
          category: 'build',
          previewType: 'nexus-code',
          description: 'Autonomous multi-agent orchestration engine with real-time streaming AST synthesis, visual DAG pipeline editor, and sub-millisecond state execution.',
          liveDemoUrl: '#demo',
          liveDemoText: 'Live Demo',
          githubUrl: '#source',
          order: 1,
        },
      });

      // Project 2: Aether 3D
      await payload.create({
        collection: 'projects',
        data: {
          title: 'Aether 3D',
          category: 'build',
          previewType: 'aether-3d',
          description: 'High-performance interactive 3D spatial canvas with raymarched volumetric noise, real-time audio FFT frequency analysis, and custom post-processing shaders.',
          liveDemoUrl: '#demo',
          liveDemoText: 'Launch Canvas',
          githubUrl: '#source',
          order: 2,
        },
      });

      // Project 3: HyperScale Vector DB
      await payload.create({
        collection: 'projects',
        data: {
          title: 'HyperScale Vector DB',
          category: 'build',
          previewType: 'hyperscale-chart',
          description: 'Client-side embedded vector database compiled to WebAssembly with SIMD acceleration, HNSW cosine indexing, and real-time CRDT peer synchronization.',
          liveDemoUrl: '#demo',
          liveDemoText: 'Benchmarks',
          githubUrl: '#source',
          order: 3,
        },
      });

      // Project 4: Pulse OS Workspace
      await payload.create({
        collection: 'projects',
        data: {
          title: 'Pulse OS Workspace',
          category: 'build',
          previewType: 'pulse-dash',
          description: 'Keyboard-driven modular desktop workspace uniting terminal execution, markdown knowledge graphs, and live telemetry in a distraction-free glassmorphic environment.',
          liveDemoUrl: '#demo',
          liveDemoText: 'View Release',
          githubUrl: '#source',
          order: 4,
        },
      });
    }
  } catch (e) {
    console.error('Error seeding projects:', e);
  }

  // 4. Seed Capabilities
  try {
    const existingCaps = await payload.find({ collection: 'capabilities' });
    if (existingCaps.totalDocs === 0) {
      await payload.create({
        collection: 'capabilities',
        data: {
          title: 'AI Products',
          iconType: 'ai',
          description: 'Building applications around LLMs, RAG, multimodal models and intelligent agents.',
          highlights: [{ name: 'InsightFlow' }, { name: 'Reva' }, { name: 'Atlasflow' }],
          order: 1,
        },
      });
      await payload.create({
        collection: 'capabilities',
        data: {
          title: 'Machine Learning',
          iconType: 'ml',
          description: 'Predictive modelling, time-series forecasting, feature engineering and model evaluation.',
          highlights: [{ name: 'LightGBM' }, { name: 'PyTorch' }, { name: 'TensorFlow' }, { name: 'Scikit-learn' }],
          order: 2,
        },
      });
      await payload.create({
        collection: 'capabilities',
        data: {
          title: 'Full-Stack',
          iconType: 'fs',
          description: 'Building complete products from frontend to backend, databases and deployment.',
          highlights: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'FastAPI' }, { name: 'PostgreSQL' }, { name: 'Docker' }],
          order: 3,
        },
      });
      await payload.create({
        collection: 'capabilities',
        data: {
          title: 'Data & Research',
          iconType: 'data',
          description: 'Exploring datasets, modelling approaches and experimental AI systems.',
          highlights: [{ name: 'Exploratory Analysis' }, { name: 'Hypothesis Testing' }, { name: 'Agentic Systems' }],
          order: 4,
        },
      });
    }
  } catch (e) {
    console.error('Error seeding capabilities:', e);
  }

  // 5. Seed Experiments
  try {
    const existingExps = await payload.find({ collection: 'experiments' });
    if (existingExps.totalDocs === 0) {
      await payload.create({
        collection: 'experiments',
        data: {
          title: 'N-BEATS Forecasting',
          tags: [{ tag: 'Time Series' }, { tag: 'PyTorch' }],
          order: 1,
        },
      });
      await payload.create({
        collection: 'experiments',
        data: {
          title: 'Sinhala Language Model',
          tags: [{ tag: 'NLP' }, { tag: 'SLM' }],
          order: 2,
        },
      });
      await payload.create({
        collection: 'experiments',
        data: {
          title: 'Land Price Prediction',
          tags: [{ tag: 'Regression' }, { tag: 'LightGBM' }],
          order: 3,
        },
      });
      await payload.create({
        collection: 'experiments',
        data: {
          title: 'RAG Experiments',
          tags: [{ tag: 'LLM' }, { tag: 'Retrieval' }],
          order: 4,
        },
      });
    }
  } catch (e) {
    console.error('Error seeding experiments:', e);
  }

  console.log('Seeding process complete.');
}
