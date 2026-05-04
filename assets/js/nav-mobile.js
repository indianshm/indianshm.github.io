(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var wrap = document.querySelector('.layout-mount--header');
    if (!wrap) return;

    var headerEl = wrap.querySelector('header.site-header');
    var toggle = wrap.querySelector('.nav-toggle');
    var backdrop = wrap.querySelector('.nav-backdrop');
    if (!headerEl || !toggle) return;

    var mqNavSheet = window.matchMedia('(max-width: 820px)');

    function setOpen(open) {
      headerEl.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-scroll-lock', open);
      if (backdrop) {
        backdrop.hidden = !open;
        backdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
    }

    toggle.addEventListener('click', function () {
      setOpen(!headerEl.classList.contains('nav-open'));
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        setOpen(false);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    wrap.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (mqNavSheet.matches) setOpen(false);
      });
    });
  });
})();
