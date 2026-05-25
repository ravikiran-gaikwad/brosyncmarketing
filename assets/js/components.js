// ===== BROSYNC SHARED COMPONENTS =====

const NAV_HTML = `
<div class="top-bar">
  <div class="container">
    <div>
      <i class="fa fa-phone"></i> &nbsp;
      <a href="tel:+918237431432">+91 8237431432</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="tel:+919822778001">+91 9822778001</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <i class="fa fa-envelope"></i> &nbsp;
      <a href="mailto:brosyncmarketing@gmail.com">brosyncmarketing@gmail.com</a>
    </div>
    <div class="top-bar-right">
      <a href="https://wa.me/918237431432" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
      <a href="contact.html" class="btn-primary" style="padding:5px 16px;font-size:0.78rem;border-radius:20px;">Free Consultation</a>
    </div>
  </div>
</div>
<nav class="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="logo">
      <img src="assets/images/brosync-logo-vertical.png" alt="Brosync Marketing Agency" class="logo-img">
    </a>
    <ul class="nav-menu">
      <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
      <li class="nav-item">
        <a href="services.html" class="nav-link">Services <i class="fa fa-chevron-down"></i></a>
        <div class="mega-dropdown">
          <div class="mega-col">
            <h6>Digital Marketing</h6>
            <a href="services.html#smm">Social Media Marketing</a>
            <a href="services.html#ppc">Performance Marketing</a>
            <a href="services.html#seo">SEO + AEO</a>
            <a href="services.html#content">Content Marketing</a>
            <a href="services.html#email">Email & WhatsApp Marketing</a>
            <a href="services.html#leads">Lead Generation</a>
          </div>
          <div class="mega-col">
            <h6>Website & Design</h6>
            <a href="services.html#web">Website Design & Dev</a>
            <a href="services.html#ecom">E-Commerce Development</a>
            <a href="services.html#wordpress">WordPress Development</a>
            <a href="services.html#shopify">Shopify Development</a>
            <a href="services.html#graphic">Graphic Design</a>
            <a href="services.html#reels">Reel Covers & Creatives</a>
          </div>
          <div class="mega-col">
            <h6>AI & Automation</h6>
            <a href="services.html#ai">AI Automation</a>
            <a href="services.html#chatbot">Chatbot Development</a>
            <a href="services.html#crm">CRM Workflows</a>
            <a href="services.html#metaads">Meta Ad Creatives</a>
            <a href="services.html#product">Product Marketing (AI)</a>
          </div>
        </div>
      </li>
      <li class="nav-item"><a href="case-studies.html" class="nav-link">Case Studies</a></li>
      <li class="nav-item"><a href="portfolio.html" class="nav-link">Portfolio</a></li>
      <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>
    </ul>
    <div class="nav-cta">
      <a href="https://wa.me/918237431432" target="_blank" class="btn-outline" style="padding:9px 18px;font-size:0.82rem;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
      <a href="contact.html" class="btn-primary" style="padding:9px 20px;font-size:0.82rem;">Get a Free Quote</a>
    </div>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo footer-logo">
    <img src="assets/images/brosync-logo.png" alt="Brosync Marketing Agency" class="footer-logo-img">
</a>
        <p style="margin-top:12px;">Your performance-led digital growth partner. Strategy. Creativity. Results.</p>
        <div style="margin-top:20px;">
          <h6 style="color:rgba(255,255,255,0.8);font-size:0.82rem;font-weight:600;margin-bottom:6px;">Pune Office</h6>
          <p style="font-size:0.82rem;color:rgba(255,255,255,0.5);">Shop No 40, Kakade Terrace, Ganpathi Matha, NDA Rd, Warje, Pune, Maharashtra, India 411058</p>
          <p style="font-size:0.82rem;color:rgba(255,255,255,0.5);margin-top:4px;"><a href="http://www.brosyncmarketing.in" target="_blank" style="color:rgba(255,69,0,0.8);">www.brosyncmarketing.in</a></p>
        </div>
        <div class="footer-socials">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://wa.me/918237431432" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Our Services</h5>
        <ul>
          <li><a href="services.html#smm">Social Media Marketing</a></li>
          <li><a href="services.html#ppc">Performance Marketing</a></li>
          <li><a href="services.html#seo">SEO + AEO</a></li>
          <li><a href="services.html#content">Content Marketing</a></li>
          <li><a href="services.html#email">Email & WhatsApp Marketing</a></li>
          <li><a href="services.html#leads">Lead Generation</a></li>
        </ul>
        <div class="footer-sub-heading">Web & Design</div>
        <ul>
          <li><a href="services.html#web">Website Design & Dev</a></li>
          <li><a href="services.html#ecom">E-Commerce Development</a></li>
          <li><a href="services.html#graphic">Graphic Design</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>AI & Automation</h5>
        <ul>
          <li><a href="services.html#ai">AI Automation</a></li>
          <li><a href="services.html#chatbot">Chatbot Development</a></li>
          <li><a href="services.html#crm">CRM Workflows</a></li>
          <li><a href="services.html#metaads">Meta Ad Creatives</a></li>
          <li><a href="services.html#product">AI Product Marketing</a></li>
        </ul>
        <div class="footer-sub-heading">Company</div>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Get In Touch</h5>
        <div class="footer-contact-item"><i class="fa fa-phone"></i><a href="tel:+918237431432">+91 8237431432</a></div>
        <div class="footer-contact-item"><i class="fa fa-phone"></i><a href="tel:+919822778001">+91 9822778001</a></div>
        <div class="footer-contact-item"><i class="fab fa-whatsapp"></i><a href="https://wa.me/918237431432" target="_blank">+91 8237431432</a></div>
        <div class="footer-contact-item"><i class="fa fa-envelope"></i><a href="mailto:brosyncmarketing@gmail.com">brosyncmarketing@gmail.com</a></div>
        <div class="footer-contact-item"><i class="fa fa-globe"></i><a href="http://www.brosyncmarketing.in" target="_blank">www.brosyncmarketing.in</a></div>
        <div class="footer-contact-item"><i class="fa fa-map-marker-alt"></i><span>Pune, Maharashtra, India</span></div>
        <div class="footer-contact-item"><i class="fa fa-clock"></i><span>Mon–Sat: 10AM – 7PM</span></div>
        <a href="contact.html" class="btn-primary" style="margin-top:20px;border-radius:8px;padding:11px 22px;font-size:0.84rem;">Schedule Free Call</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Brosync Marketing Agency. All Rights Reserved.</span>
      <div style="display:flex;gap:20px;">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/918237431432" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
`;

document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
