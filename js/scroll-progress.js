// Barra de progreso: se pinta con el scroll y el punto marca el avance
    (function(){
      var fill=document.getElementById('scrollFill'),dot=document.getElementById('scrollDot'),ticking=false;
      if(!fill||!dot){return;}
      function update(){
        var max=document.documentElement.scrollHeight-window.innerHeight;
        var p=max>0?Math.min(Math.max(window.scrollY/max,0),1):0;
        fill.style.transform='scaleX('+p+')';
        // el punto se mantiene siempre dentro de la barra (sin salirse por la derecha al llegar al final)
        dot.style.left='calc('+(p*100)+'% + '+(5.5-11*p).toFixed(2)+'px)';
        dot.classList.toggle('on',p>0.003&&p<0.997);
        ticking=false;
      }
      function req(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
      window.addEventListener('scroll',req,{passive:true});
      window.addEventListener('resize',req);
      window.addEventListener('load',update);
      update();
    })();
