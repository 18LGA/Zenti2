/* ZENTI · Dos maneras de empezar: selector + chat animado */
(function () {
  var sec = document.getElementById('para-quien');
  if (!sec) return;
  var sw = sec.querySelector('.seg-switch');
  var btns = [].slice.call(sec.querySelectorAll('.seg-btn'));
  var cards = [].slice.call(sec.querySelectorAll('.segment-card'));
  if (!sw || !btns.length || !cards.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timers = [], current = null, started = false;

  sec.classList.add('js-seg');

  btns.forEach(function (b) {
    var card = sec.querySelector('.segment-card.' + b.dataset.seg);
    b.id = 'seg-tab-' + b.dataset.seg;
    if (card) {
      card.setAttribute('role', 'tabpanel');
      card.setAttribute('aria-labelledby', b.id);
    }
  });

  cards.forEach(function (c) {
    [].forEach.call(c.children, function (el, i) { el.style.setProperty('--i', i); });
    var t = document.createElement('span');
    t.className = 'seg-typing';
    t.setAttribute('aria-hidden', 'true');
    t.innerHTML = '<i></i><i></i><i></i>';
    c.querySelector('.segment-chat').appendChild(t);
  });

  function play(card) {
    timers.forEach(clearTimeout);
    timers = [];
    var rows = [].slice.call(card.querySelectorAll('.chat-row'));
    var typing = card.querySelector('.seg-typing');
    typing.classList.remove('on');
    rows.forEach(function (r) { r.classList.toggle('is-shown', reduce); });
    if (reduce) return;
    var t = 700;
    rows.forEach(function (r) {
      if (r.querySelector('.out')) {
        timers.push(setTimeout(function () {
          typing.style.top = r.offsetTop + 'px';
          typing.classList.add('on');
        }, t));
        t += 1000;
      }
      timers.push(setTimeout(function () {
        typing.classList.remove('on');
        r.classList.add('is-shown');
      }, t));
      t += 700;
    });
  }

  function show(key, userAction) {
    if (key === current) return;
    current = key;
    sw.dataset.active = key;
    btns.forEach(function (b) {
      var on = b.dataset.seg === key;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
    });
    cards.forEach(function (c) { c.classList.toggle('is-active', c.classList.contains(key)); });
    if (started || userAction) {
      started = true;
      play(sec.querySelector('.segment-card.' + key));
    }
  }

  btns.forEach(function (b, i) {
    b.addEventListener('click', function () { show(b.dataset.seg, true); });
    b.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var n = btns[(i + (e.key === 'ArrowRight' ? 1 : btns.length - 1)) % btns.length];
      n.focus();
      show(n.dataset.seg, true);
      e.preventDefault();
    });
  });

  show('empresa', false);

  // Pausar las animaciones infinitas cuando la sección no se ve
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      sec.classList.toggle('seg-live', e[0].isIntersecting);
    }, { rootMargin: '120px 0px' }).observe(sec);
  } else {
    sec.classList.add('seg-live');
  }

  // La conversación arranca cuando la sección entra en pantalla
  function start() {
    started = true;
    play(sec.querySelector('.segment-card.' + current));
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) { start(); obs.disconnect(); }
    }, { threshold: 0.3 }).observe(sec.querySelector('.segment-grid'));
  } else {
    start();
  }
})();