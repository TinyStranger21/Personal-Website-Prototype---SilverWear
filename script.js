(function() {
  const SPEED = 0.65; // pixels per frame - constant linear speed
  const DIAGONAL_ANGLES = [45, 135, 225, 315]; // degrees for diagonal movement

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Cycling binary labels
  const BINARY_VALUES = ['01010010', '01101001', '01101110', '01100111'];
  const labels = document.querySelectorAll('.ring-label');
  let labelIndex = 0;
  setInterval(function() {
    const value = BINARY_VALUES[labelIndex % BINARY_VALUES.length];
    labels.forEach(function(label) {
      label.textContent = value;
    });
    labelIndex++;
  }, 600);

  // Bouncing rings animation
  const container = document.getElementById('rings-container');
  const holders = document.querySelectorAll('.ring-holder');

  const rings = [];
  holders.forEach(function(holder, i) {
    const containerRect = container.getBoundingClientRect();
    const width = 200;
    const height = 140;
    
    // Start at random positions within bounds
    const maxX = Math.max(0, containerRect.width - width);
    const maxY = Math.max(0, containerRect.height - height);
    const startX = maxX > 0 ? Math.random() * maxX : 0;
    const startY = maxY > 0 ? Math.random() * maxY : 0;

    // Diagonal velocity - pick an angle, alternate directions for variety
    const angle = DIAGONAL_ANGLES[i % DIAGONAL_ANGLES.length] * (Math.PI / 180);
    const vx = Math.cos(angle) * SPEED * (i % 2 === 0 ? 1 : -1);
    const vy = Math.sin(angle) * SPEED * (i % 2 === 0 ? 1 : -1);

    rings.push({
      el: holder,
      x: startX,
      y: startY,
      vx: vx,
      vy: vy
    });

    holder.addEventListener('click', function() {
      const img = holder.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  function resolveCollision(a, b, w1, h1, w2, h2) {
    const overlapX = Math.min(a.x + w1, b.x + w2) - Math.max(a.x, b.x);
    const overlapY = Math.min(a.y + h1, b.y + h2) - Math.max(a.y, b.y);
    if (overlapX <= 0 || overlapY <= 0) return false;

    const pushX = overlapX / 2;
    const pushY = overlapY / 2;

    if (overlapX < overlapY) {
      if (a.x < b.x) {
        a.x -= pushX;
        b.x += pushX;
      } else {
        a.x += pushX;
        b.x -= pushX;
      }
      a.vx = -a.vx;
      b.vx = -b.vx;
    } else {
      if (a.y < b.y) {
        a.y -= pushY;
        b.y += pushY;
      } else {
        a.y += pushY;
        b.y -= pushY;
      }
      a.vy = -a.vy;
      b.vy = -b.vy;
    }
    return true;
  }

  function animate() {
    const rect = container.getBoundingClientRect();
    const bounds = { w: rect.width, h: rect.height };
    if (bounds.w <= 0 || bounds.h <= 0) {
      requestAnimationFrame(animate);
      return;
    }

    rings.forEach(function(ring) {
      ring.w = ring.el.offsetWidth || 200;
      ring.h = ring.el.offsetHeight || 140;
      ring.x += ring.vx;
      ring.y += ring.vy;
    });

    // Wall collisions
    rings.forEach(function(ring) {
      if (ring.x <= 0) { ring.x = 0; ring.vx = Math.abs(ring.vx); }
      if (ring.x >= bounds.w - ring.w) { ring.x = bounds.w - ring.w; ring.vx = -Math.abs(ring.vx); }
      if (ring.y <= 0) { ring.y = 0; ring.vy = Math.abs(ring.vy); }
      if (ring.y >= bounds.h - ring.h) { ring.y = bounds.h - ring.h; ring.vy = -Math.abs(ring.vy); }
    });

    // Box-to-box collisions (multiple passes for chain reactions)
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < rings.length; i++) {
        for (let j = i + 1; j < rings.length; j++) {
          resolveCollision(rings[i], rings[j], rings[i].w, rings[i].h, rings[j].w, rings[j].h);
        }
      }
    }

    rings.forEach(function(ring) {
      ring.el.style.left = ring.x + 'px';
      ring.el.style.top = ring.y + 'px';
    });

    requestAnimationFrame(animate);
  }

  // Initialize positions
  rings.forEach(function(ring) {
    ring.el.style.left = ring.x + 'px';
    ring.el.style.top = ring.y + 'px';
  });

  requestAnimationFrame(animate);
})();
