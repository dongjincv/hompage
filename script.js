// CADSHIN website interactions
const pathname=location.pathname;const cleanPath=pathname.endsWith('/index.html')?pathname.slice(0,-'index.html'.length):pathname.endsWith('.html')?pathname.slice(0,-'.html'.length):pathname;if(cleanPath!==pathname)history.replaceState(history.state,'',`${cleanPath}${location.search}${location.hash}`);
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'닫기':'메뉴'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='메뉴'}));}
document.querySelectorAll('.portfolio-gallery-item').forEach(item=>{
 const image=item.querySelector('img');
 const caption=document.createElement('figcaption');
 caption.className='portfolio-gallery-caption';
 caption.textContent=image.alt;
 item.append(caption);
 item.setAttribute('role','button');
 item.setAttribute('tabindex','0');
 item.setAttribute('aria-label',`이미지 확대: ${image.alt}`);
 item.setAttribute('aria-pressed','false');
 const toggleSize=()=>{
  const wasEnlarged=item.classList.contains('is-enlarged');
  document.querySelectorAll('.portfolio-gallery-item.is-enlarged').forEach(openItem=>{
   openItem.classList.remove('is-enlarged');
   openItem.setAttribute('aria-pressed','false');
  });
  if(!wasEnlarged){
   item.classList.add('is-enlarged');
   item.setAttribute('aria-pressed','true');
  }
 };
 item.addEventListener('click',toggleSize);
 item.addEventListener('keydown',event=>{
  if(event.key==='Enter'||event.key===' '){
   event.preventDefault();
   toggleSize();
  }
 });
});
// Current-page navigation state
const page=(location.pathname.split('/').pop()||'index').replace(/\.html$/,'');const hash=location.hash;document.querySelectorAll('.nav a').forEach(a=>{const target=new URL(a.href);const targetPage=(target.pathname.split('/').pop()||'index').replace(/\.html$/,'');if(targetPage===page&&(!target.hash||target.hash===hash))a.classList.add('active')});
