document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('mouseenter',()=>a.style.opacity='0.8');
a.addEventListener('mouseleave',()=>a.style.opacity='1');
});