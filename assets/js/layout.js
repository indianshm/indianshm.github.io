(function () {
  /** Canonical site URL (path on bhumikamittal.in hosting). Change if the deploy path changes. */
  var SITE_HOME = 'https://bhumikamittal.in/ishm-template/';
  var ASSETS = 'assets';

  var L = {
    about: 'about.html',
    history: 'about.html',
    governing: 'governing-body.html',
    membership: 'membership.html',
    contact: '#',
    journal: 'ganita-bharati.html',
    issues: 'ganita-bharati.html#issues',
    submit: 'ganita-bharati.html#submit',
    authors: 'ganita-bharati.html#template',
    events: '#',
    ichim: 'ichim-2026.html',
    annual: '#',
    workshops: '#',
    past: '#'
  };

  function headerHtml() {
    return `
<header class="site-header">
  <div class="container header-toolbar">
    <a class="site-logo" href="${SITE_HOME}" aria-label="ISHM home">
      <img src="${ASSETS}/img/logo.svg" alt="ISHM emblem">
      <div class="logo-label">
        <span class="abbr">ISHM</span>
        <span class="full">Indian Society for History of Mathematics</span>
      </div>
    </a>

    <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <span class="nav-toggle-line" aria-hidden="true"></span>
      <span class="nav-toggle-line" aria-hidden="true"></span>
      <span class="nav-toggle-line" aria-hidden="true"></span>
    </button>

    <nav class="main-nav js-primary-nav" aria-label="Main navigation">
      <ul>
        <li>
          <a href="${L.about}">About</a>
          <ul class="dropdown">
            <li><a href="${L.history}">History &amp; Mission</a></li>
            <li><a href="${L.governing}">Governing Body</a></li>
            <li><a href="${L.membership}">Membership</a></li>
            <li><a href="${L.contact}">Contact</a></li>
          </ul>
        </li>
        <li>
          <a href="${L.journal}">Gaṇita Bhāratī</a>
          <ul class="dropdown">
            <li><a href="${L.issues}">Browse Issues</a></li>
            <li><a href="${L.submit}">Submit a Paper</a></li>
            <li><a href="${L.authors}">Instructions for Authors</a></li>
          </ul>
        </li>
        <li>
          <a href="${L.events}">Events</a>
          <ul class="dropdown">
            <li><a href="${L.ichim}">ICHIM 2026</a></li>
            <li><a href="${L.annual}">Annual Conferences</a></li>
            <li><a href="${L.workshops}">Workshops &amp; Seminars</a></li>
            <li><a href="${L.past}">Past Events</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div class="nav-backdrop" hidden aria-hidden="true"></div>
</header>`;
  }

  function footerHtml() {
    return `
<footer>
  <div class="container">
    <div class="footer-main">
      <div class="footer-brand">
        <div class="footer-brand-logo">
          <img src="${ASSETS}/img/logo.svg" alt="">
          <span class="fl-abbr">ISHM</span>
        </div>
        <p>Promoting research and education in the history of mathematics, with special emphasis on the rich mathematical traditions of India. Established 1978.</p>
      </div>

      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="${L.history}">History &amp; Mission</a></li>
          <li><a href="${L.governing}">Governing Body</a></li>
          <li><a href="${L.membership}">Membership</a></li>
          <li><a href="${L.contact}">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Gaṇita Bhāratī</h4>
        <ul>
          <li><a href="${L.issues}">Browse Issues</a></li>
          <li><a href="${L.submit}">Submit a Paper</a></li>
          <li><a href="${L.authors}">Instructions for Authors</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Events</h4>
        <ul>
          <li><a href="${L.ichim}">ICHIM 2026</a></li>
          <li><a href="${L.annual}">Annual Conferences</a></li>
          <li><a href="${L.workshops}">Workshops &amp; Seminars</a></li>
          <li><a href="${L.past}">Past Events</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>&copy; 2026 Indian Society for History of Mathematics</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var mountHeader = document.querySelector('.layout-mount--header');
    var mountFooter = document.querySelector('.layout-mount--footer');
    if (mountHeader) mountHeader.innerHTML = headerHtml().trim();
    if (mountFooter) mountFooter.innerHTML = footerHtml().trim();
  });
})();
