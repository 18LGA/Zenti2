(function(){
  var root=document.documentElement,btn=document.getElementById('themeToggle');
  if(!btn)return;
  function sync(){var d=root.getAttribute('data-theme')==='dark';btn.setAttribute('aria-pressed',d?'true':'false');btn.setAttribute('aria-label',d?'Cambiar a modo día':'Cambiar a modo noche');}
  sync();
  btn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches){root.classList.add('theme-anim');setTimeout(function(){root.classList.remove('theme-anim');},300);}
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('zenti-theme',next);}catch(e){}
    sync();
  });
  try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){
    var saved=null;try{saved=localStorage.getItem('zenti-theme');}catch(_){}
    if(!saved){root.setAttribute('data-theme',e.matches?'dark':'light');sync();}
  });}catch(e){}
})();
