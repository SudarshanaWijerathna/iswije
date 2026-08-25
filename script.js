/**
 * Portfolio Mode Switcher
 * Handles toggling between "Build" and "Design" modes with 0.5s morph transition
 */
function initModeSwitcher() {
  const buildBtn = document.getElementById('buildModeBtn');
  const designBtn = document.getElementById('designModeBtn');
  const canvasInner = document.getElementById('canvasInner');
  const switcher = document.getElementById('modeSwitchTab');

  const worksBadgeText = document.getElementById('worksBadgeText');
  const worksSubtitle = document.getElementById('worksSubtitle');

  function setMode(mode) {
    document.body.setAttribute('data-mode', mode);

    if (mode === 'build') {
      if (switcher) {
        switcher.classList.remove('design-active');
        switcher.classList.add('build-active');
      }
      if (buildBtn) {
        buildBtn.classList.add('active');
        buildBtn.setAttribute('aria-selected', 'true');
        buildBtn.setAttribute('tabindex', '0');
      }
      if (designBtn) {
        designBtn.classList.remove('active');
        designBtn.setAttribute('aria-selected', 'false');
        designBtn.setAttribute('tabindex', '-1');
      }
      if (canvasInner) {
        canvasInner.setAttribute('data-mode', 'build');
      }
      if (worksBadgeText) {
        worksBadgeText.textContent = 'ENGINEERING / BUILDS';
      }
      if (worksSubtitle) {
        worksSubtitle.textContent = 'A curated selection of full-stack web applications, interactive 3D experiences, and developer tools built with modern web technologies.';
      }
    } else if (mode === 'design') {
      if (switcher) {
        switcher.classList.remove('build-active');
        switcher.classList.add('design-active');
      }
      if (designBtn) {
        designBtn.classList.add('active');
        designBtn.setAttribute('aria-selected', 'true');
        designBtn.setAttribute('tabindex', '0');
      }
      if (buildBtn) {
        buildBtn.classList.remove('active');
        buildBtn.setAttribute('aria-selected', 'false');
        buildBtn.setAttribute('tabindex', '-1');
      }
      if (canvasInner) {
        canvasInner.setAttribute('data-mode', 'design');
      }
      if (worksBadgeText) {
        worksBadgeText.textContent = 'UI & PRODUCT DESIGN';
      }
      if (worksSubtitle) {
        worksSubtitle.textContent = 'Design systems, interaction prototypes, and spatial user experiences crafted with micro-precision.';
      }
    }
  }

  // Expose globally so onclick handlers also work seamlessly
  window.setPortfolioMode = setMode;

  if (buildBtn) {
    buildBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMode('build');
    });
  }

  if (designBtn) {
    designBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMode('design');
    });
  }

  // Keyboard navigation support for accessibility (Arrow Left / Right)
  if (switcher) {
    switcher.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const isBuildActive = buildBtn && buildBtn.classList.contains('active');
        if (isBuildActive) {
          setMode('design');
          if (designBtn) designBtn.focus();
        } else {
          setMode('build');
          if (buildBtn) buildBtn.focus();
        }
      }
    });
  }
}

/**
 * Portrait Parallax Controller
 * Makes portrait001.png scroll at a slower rate than the rest of the page,
 * creating an immersive 3D depth and dynamic parallax effect.
 */
function initPortraitParallax() {
  const portrait = document.getElementById('portraitImg');
  if (!portrait) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    // Parallax rate: 0.20 (makes the portrait more responsive and scrollable with the page)
    const parallaxOffset = scrollY * 0.20;

    document.documentElement.style.setProperty('--portrait-scroll-y', `${parallaxOffset.toFixed(1)}px`);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial calculation
  updateParallax();
}

// Run immediately or on DOMContentLoaded (handles all script loading timings)
function initApp() {
  initModeSwitcher();
  initPortraitParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
