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
  let currentMode = 'build';

  function playLogoTransition() {
    const video = document.getElementById('logoTransitionVideo');
    if (video) {
      video.classList.add('playing');
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      const onEnded = () => {
        video.classList.remove('playing');
      };
      video.addEventListener('ended', onEnded, { once: true });
      setTimeout(() => {
        video.classList.remove('playing');
      }, 1050);
    }
  }

  function setMode(mode) {
    if (mode !== currentMode) {
      const heroLogo = document.getElementById('heroLogo');
      if (heroLogo) {
        if (mode === 'design') {
          heroLogo.classList.remove('transition-to-build');
          heroLogo.classList.add('transition-to-design');
        } else {
          heroLogo.classList.remove('transition-to-design');
          heroLogo.classList.add('transition-to-build');
        }
        setTimeout(() => {
          heroLogo.classList.remove('transition-to-design', 'transition-to-build');
        }, 1050);
      }

      if (mode === 'design') {
        document.body.classList.remove('animating-to-build');
        document.body.classList.add('animating-to-design');
      } else {
        document.body.classList.remove('animating-to-design');
        document.body.classList.add('animating-to-build');
      }
      setTimeout(() => {
        document.body.classList.remove('animating-to-design', 'animating-to-build');
      }, 550);

      playLogoTransition();
      currentMode = mode;
    }
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

    // Update Favicon based on active mode
    const faviconHref = mode === 'design' ? 'logo-designmode.svg' : 'logo-buildmode.svg';
    const favicons = document.querySelectorAll("link[rel*='icon']");
    favicons.forEach((fav) => {
      fav.href = faviconHref;
    });
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

/**
 * About Timeline Progression Slider
 * Handles smooth card transitions, step counting, stage badge updates,
 * breadcrumbs, and swipe gestures.
 */
function initAboutSlider() {
  const card = document.getElementById('aboutTimelineCard');
  if (!card) return;

  const slides = card.querySelectorAll('.timeline-slide');
  const prevBtn = document.getElementById('timelinePrevBtn');
  const nextBtn = document.getElementById('timelineNextBtn');
  const counterCurr = document.getElementById('counterCurrent');
  const stageName = document.getElementById('timelineStageName');
  const stageBadge = document.getElementById('timelineStageBadge');
  const segments = document.querySelectorAll('.progress-segment');

  const STAGES = ['CREATE', 'CREATE', 'BUILD', 'COMBINE'];
  let currentStep = 0;
  let animating = false;

  function updateSlider(newStep, direction = 'next') {
    if (newStep === currentStep || animating) return;
    animating = true;

    const oldSlide = slides[currentStep];
    const newSlide = slides[newStep];

    slides.forEach((s) => {
      s.classList.remove('active', 'slide-enter-next', 'slide-enter-prev', 'slide-exit-next', 'slide-exit-prev');
    });

    if (oldSlide && newSlide) {
      if (direction === 'next') {
        oldSlide.classList.add('slide-exit-next');
        newSlide.classList.add('active', 'slide-enter-next');
      } else {
        oldSlide.classList.add('slide-exit-prev');
        newSlide.classList.add('active', 'slide-enter-prev');
      }
    }

    currentStep = newStep;

    if (counterCurr) {
      counterCurr.textContent = `0${currentStep + 1}`;
    }

    const stage = STAGES[currentStep];
    if (stageName) stageName.textContent = stage;
    if (stageBadge) {
      stageBadge.className = `timeline-stage-badge stage-${stage.toLowerCase()}`;
    }

    segments.forEach((seg, idx) => {
      if (idx <= currentStep) {
        seg.classList.add('active');
      } else {
        seg.classList.remove('active');
      }
    });

    if (prevBtn) {
      prevBtn.disabled = currentStep === 0;
    }

    setTimeout(() => {
      if (oldSlide) oldSlide.classList.remove('slide-exit-next', 'slide-exit-prev');
      animating = false;
    }, 400);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        updateSlider(currentStep - 1, 'prev');
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < slides.length - 1) {
        updateSlider(currentStep + 1, 'next');
      } else {
        updateSlider(0, 'next');
      }
    });
  }

  segments.forEach((seg, idx) => {
    seg.addEventListener('click', () => {
      const dir = idx > currentStep ? 'next' : 'prev';
      updateSlider(idx, dir);
    });
  });

  let touchStartX = null;
  card.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        if (currentStep < slides.length - 1) {
          updateSlider(currentStep + 1, 'next');
        } else {
          updateSlider(0, 'next');
        }
      } else {
        if (currentStep > 0) {
          updateSlider(currentStep - 1, 'prev');
        }
      }
    }
    touchStartX = null;
  }, { passive: true });
}

// Run immediately or on DOMContentLoaded (handles all script loading timings)
function initApp() {
  initModeSwitcher();
  initPortraitParallax();
  initAboutSlider();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
