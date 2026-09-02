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
        aboutLead: 'I started creating long before I started coding.',
        aboutParagraphs: [
          { text: 'As a teenager, I ran a YouTube channel where I was the presenter, editor, and thumbnail designer. Later, that interest turned into freelance work — designing logos, flyers, animations and videos for people and businesses.' },
          { text: 'When I started studying Information Technology, my canvas changed. I moved from designing things people could see to building things people could use — exploring software engineering, AI, machine learning and data.' },
        ],
        aboutHighlight: "Today, I sit somewhere between the two. I build technical products with a designer's instinct for how they should look, communicate and feel.",
        contactPrompt: 'Have something worth building?',
        footerCopy: '© 2026 Sudarshana Wijerathna',
        footerRights: 'All rights reserved',
      },
    });
  } catch (e) {
    console.error('Error updating site-settings global:', e);
  }

  // 3. Seed Projects
  try {
    const existingProjects = await payload.find({ collection: 'projects' });
    if (existingProjects.totalDocs === 0) {
      // Project 1: Insightflow
      await payload.create({
        collection: 'projects',
        data: {
          title: 'Insightflow',
          isFeatured: false,
          category: 'build',
          previewType: 'image',
          description: 'Turn podcasts and audio conversations into actionable key takeaways with AI-powered semantic intelligence and structured transcript synthesis.',
          logoStaticUrl: '/project_logo_001.svg',
          thumbnailStaticUrl: '/project_thumbnail_001.png',
          liveDemoUrl: '#demo',
          liveDemoText: 'Live Demo',
          githubUrl: '#source',
          order: 1,
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

  // 6. Seed Certificates
  try {
    const existingCerts = await payload.find({ collection: 'certificates' as any, limit: 100 });
    // Remove old mock certificates if any exist
    if (existingCerts.docs && existingCerts.docs.length > 0) {
      for (const doc of existingCerts.docs) {
        try {
          await payload.delete({
            collection: 'certificates' as any,
            id: doc.id,
          });
        } catch (delErr) {
          // ignore
        }
      }
    }

    const realCertificates = [
      {
        title: 'Supervised Machine Learning: Regression and Classification',
        issuer: 'DeepLearning.AI & Stanford University (Coursera)',
        category: 'ai-ml',
        issueDate: 'Nov 2025',
        credentialId: 'STXINBTSDZZ7',
        credentialUrl: 'https://coursera.org/verify/STXINBTSDZZ7',
        description: 'Mastered core machine learning foundations, linear regression, logistic regression, gradient descent algorithms, cost functions, and regularization techniques under Andrew Ng.',
        imageStaticUrl: '/certificates/previews/supervised-learning-regression-classification.png',
        pdfUrl: '/certificates/docs/supervised-learning-regression-classification.pdf',
        skills: [
          { skill: 'Supervised Learning' },
          { skill: 'Linear Regression' },
          { skill: 'Logistic Regression' },
          { skill: 'Gradient Descent' },
          { skill: 'Regularization' },
          { skill: 'Python / NumPy' },
        ],
        isFeatured: true,
        order: 1,
      },
      {
        title: 'Advanced Learning Algorithms',
        issuer: 'DeepLearning.AI & Stanford University (Coursera)',
        category: 'ai-ml',
        issueDate: 'Dec 2025',
        credentialId: 'R9F4U59H09GZ',
        credentialUrl: 'https://coursera.org/verify/R9F4U59H09GZ',
        description: 'Built and trained multi-layer artificial neural networks with TensorFlow, implemented decision trees, random forests, XGBoost tree ensembles, and machine learning diagnostic methods.',
        imageStaticUrl: '/certificates/previews/advanced-learning-algorithms.png',
        pdfUrl: '/certificates/docs/advanced-learning-algorithms.pdf',
        skills: [
          { skill: 'Neural Networks' },
          { skill: 'TensorFlow' },
          { skill: 'Decision Trees' },
          { skill: 'Random Forests' },
          { skill: 'XGBoost' },
          { skill: 'Model Evaluation' },
        ],
        isFeatured: true,
        order: 2,
      },
      {
        title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        issuer: 'DeepLearning.AI & Stanford University (Coursera)',
        category: 'ai-ml',
        issueDate: 'Mar 2026',
        credentialId: 'II10SNZ662BG',
        credentialUrl: 'https://coursera.org/verify/II10SNZ662BG',
        description: 'Implemented K-means clustering, anomaly detection with Gaussian distribution models, collaborative filtering & content-based recommender systems, PCA dimensionality reduction, and deep Q-learning.',
        imageStaticUrl: '/certificates/previews/unsupervised-learning-recommenders-reinforcement-learning.png',
        pdfUrl: '/certificates/docs/unsupervised-learning-recommenders-reinforcement-learning.pdf',
        skills: [
          { skill: 'Unsupervised Learning' },
          { skill: 'K-Means Clustering' },
          { skill: 'Anomaly Detection' },
          { skill: 'Recommender Systems' },
          { skill: 'Reinforcement Learning' },
          { skill: 'PCA' },
        ],
        isFeatured: true,
        order: 3,
      },
      {
        title: 'Generative AI for Everyone',
        issuer: 'DeepLearning.AI (Coursera)',
        category: 'ai-ml',
        issueDate: 'Oct 2025',
        credentialId: '6SZH120EFAPU',
        credentialUrl: 'https://coursera.org/verify/6SZH120EFAPU',
        description: 'Explored generative AI capabilities, LLM architectures, prompt engineering, Retrieval-Augmented Generation (RAG), diffusion models, AI project lifecycle, and strategic enterprise operationalization.',
        imageStaticUrl: '/certificates/previews/generative-ai-for-everyone.png',
        pdfUrl: '/certificates/docs/generative-ai-for-everyone.pdf',
        skills: [
          { skill: 'Generative AI' },
          { skill: 'LLMs' },
          { skill: 'Prompt Engineering' },
          { skill: 'RAG' },
          { skill: 'AI Lifecycle' },
          { skill: 'Diffusion Models' },
        ],
        isFeatured: true,
        order: 4,
      },
      {
        title: 'Front-End Web Development',
        issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
        category: 'software-eng',
        issueDate: '2025',
        credentialId: 'cXpTJVIEEn',
        credentialUrl: 'https://open.uom.lk/verify',
        description: 'Comprehensive curriculum in modern responsive web development, semantic HTML5, CSS3 styling systems, client-side JavaScript architecture, and responsive UI engineering.',
        imageStaticUrl: '/certificates/previews/front-end-web-development-uom.png',
        pdfUrl: '/certificates/docs/front-end-web-development-uom.pdf',
        skills: [
          { skill: 'HTML5' },
          { skill: 'CSS3' },
          { skill: 'JavaScript' },
          { skill: 'Responsive Design' },
          { skill: 'DOM Manipulation' },
          { skill: 'Web Standards' },
        ],
        isFeatured: true,
        order: 5,
      },
      {
        title: 'PHP Bootcamp: The Complete Programming Course With MYSQL',
        issuer: 'Udemy (Knowledge Nest)',
        category: 'software-eng',
        issueDate: 'Jun 2025',
        credentialId: 'UC-3b46872d-69de-44ae-b083-c34dd65765c2',
        credentialUrl: 'https://ude.my/UC-3b46872d-69de-44ae-b083-c34dd65765c2',
        description: 'Full backend engineering course covering PHP syntax, Object-Oriented Programming (OOP), MySQL relational database design, PDO queries, session management, and authentication security.',
        imageStaticUrl: '/certificates/previews/udemy-certificate.png',
        pdfUrl: '/certificates/docs/udemy-certificate.pdf',
        skills: [
          { skill: 'PHP' },
          { skill: 'MySQL' },
          { skill: 'OOP' },
          { skill: 'PDO' },
          { skill: 'Backend Development' },
          { skill: 'Database Modeling' },
        ],
        isFeatured: false,
        order: 6,
      },
      {
        title: 'Web Design for Beginners',
        issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
        category: 'design',
        issueDate: '2025',
        credentialId: 'pkwKRmvG9q',
        credentialUrl: 'https://open.uom.lk/verify',
        description: 'Foundational web design principles covering layout structure, visual hierarchy, color theory, typography standards, UI wireframing, and user-centric web interface design.',
        imageStaticUrl: '/certificates/previews/web-design-for-beginners-uom.png',
        pdfUrl: '/certificates/docs/web-design-for-beginners-uom.pdf',
        skills: [
          { skill: 'Web Design' },
          { skill: 'UI Wireframing' },
          { skill: 'Visual Hierarchy' },
          { skill: 'Color Theory' },
          { skill: 'Typography' },
          { skill: 'Layout Systems' },
        ],
        isFeatured: false,
        order: 7,
      },
    ];

    for (const cert of realCertificates) {
      await payload.create({
        collection: 'certificates' as any,
        data: cert as any,
      });
    }
  } catch (e) {
    console.error('Error seeding certificates:', e);
  }

  console.log('Seeding process complete.');
}

