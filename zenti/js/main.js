document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) { lucide.createIcons(); }
      new Swiper('.testimonial-swiper', { slidesPerView: 1.12, spaceBetween: 16, rewind: true, pagination: { el: '.swiper-pagination', clickable: true }, breakpoints: { 801: { slidesPerView: 2, spaceBetween: 18 }, 1024: { slidesPerView: 3, spaceBetween: 16 } } });

      // Acordeón FAQ con deslizamiento suave
      document.querySelectorAll('.accordion-toggle').forEach(function (button) {
        button.addEventListener('click', function () {
          var item = this.closest('.faq-item');
          var panel = document.getElementById(this.getAttribute('aria-controls'));
          var open = item.classList.toggle('open');
          this.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (panel) { panel.removeAttribute('hidden'); }
        });
      });

      // Botón Contáctanos: no redirige a ningún sitio, muestra un aviso en línea
      var contactBtn = document.getElementById('faq-contact');
      var contactNote = document.getElementById('faq-contact-note');
      if (contactBtn && contactNote) {
        contactBtn.addEventListener('click', function () {
          contactNote.textContent = 'Escríbenos por WhatsApp y te ayudamos a conectar Zenti con tu catálogo. Te respondemos el mismo día.';
          contactNote.classList.add('show');
        });
      }

      gsap.registerPlugin(ScrollTrigger);
      var mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', function () {
        gsap.from('.hero-copy > *', { y: 18, autoAlpha: 0, duration: .45, stagger: .09, ease: 'power2.out' });
        gsap.from('.visual-wrap', { y: 18, autoAlpha: 0, duration: .5, delay: .15, ease: 'power2.out' });
        gsap.utils.toArray('.reveal').forEach(function (el) { gsap.from(el, { y: 18, autoAlpha: 0, duration: .38, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' } }); });
      });
    });
