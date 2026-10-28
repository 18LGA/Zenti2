// Red de seguridad: si la pestaña permanece en segundo plano, GSAP pausa su ticker
    // y los elementos con autoAlpha pueden quedar invisibles. Los liberamos tras 2s.
    window.addEventListener('load', function () {
      setTimeout(function () {
        if (document.visibilityState === 'hidden') {
          var hidden = document.querySelectorAll('.reveal, .hero-copy > *, .visual-wrap');
          for (var i = 0; i < hidden.length; i++) {
            hidden[i].style.opacity = '';
            hidden[i].style.visibility = '';
            hidden[i].style.transform = '';
          }
        }
      }, 2000);
    });
