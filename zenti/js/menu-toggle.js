// Menú hamburguesa: abre/cierra el menú del encabezado en pantallas pequeñas
(function(){
  var header=document.querySelector('.site-header'),btn=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
  if(!header||!btn||!nav)return;
  function setOpen(open){
    header.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  }
  btn.addEventListener('click',function(e){e.stopPropagation();setOpen(!header.classList.contains('menu-open'));});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false);});
  document.addEventListener('click',function(e){if(!header.contains(e.target))setOpen(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);btn.focus();}});
  window.addEventListener('resize',function(){if(window.innerWidth>800)setOpen(false);});
})();
