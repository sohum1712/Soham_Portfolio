(function(){
var $=function(s){return document.querySelector(s)},rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#hpi').src=$('#ph img').src;

// code texture + cursor reveal
var snip=['const agent = createAgent({ model, tools, memory });','async def serve(report): return await pipeline.run(report)','@app.post("/analyze")  # FastAPI','await supabase.from("sessions").select("*");','socket.on("emotion", (frame) => classify(frame));','retry(() => llm.chat(prompt), { timeout: 2000 });','docker build -t hire-io . && docker push','test("resume score", async ({ page }) => {});','export default function Page() { return <Hero/> }','SELECT id, score FROM candidates ORDER BY score DESC;'];
var t='';for(var i=0;i<70;i++){t+=snip[i%10]+'      '+snip[(i*3+1)%10]+'      '+snip[(i*7+2)%10]+'      '+snip[(i*5+4)%10]+'\n'}
$('#c1').textContent=t;$('#c2').textContent=t;
var hero=$('#top');
hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();$('#c2').style.setProperty('--mx',(e.clientX-r.left)+'px');$('#c2').style.setProperty('--my',(e.clientY-r.top)+'px')});
hero.addEventListener('pointerleave',function(){$('#c2').style.setProperty('--mx','-999px')});

// hero portrait rises, tilts and hands off to the about photo
var hp=$('#hp');
function onScroll(){
  var vh=innerHeight,p=Math.min(scrollY/vh,1.3);
  if(!rm){hp.style.transform='perspective(900px) translateY('+(-p*vh*0.62)+'px) rotateY('+(-p*38)+'deg) rotateZ('+(p*5)+'deg) scale('+(1+p*0.25)+')';}
  hp.style.opacity=p>0.9?Math.max(0,1-(p-0.9)*4):1;
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

// nav name spin on scroll
var fl=$('#flip'),to;
addEventListener('scroll',function(){clearTimeout(to);to=setTimeout(function(){fl.classList.remove('spin');void fl.offsetWidth;fl.classList.add('spin')},120)},{passive:true});

// menu / theme
var mb=$('#mbtn'),mn=$('#menu');
mb.onclick=function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
mn.addEventListener('click',function(){mn.classList.remove('open');mb.setAttribute('aria-expanded',false)});
$('#theme').onclick=function(){var d=document.documentElement;var l=d.getAttribute('data-theme')==='light';d.setAttribute('data-theme',l?'dark':'light');this.textContent=l?'☀':'☾'};

// about photo reveal
new IntersectionObserver(function(e,o){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}})},{threshold:.25}).observe($('#ph'));

// experience wave
var tl=$('#tl'),wave=$('#wave'),drawn=false;
function build(){
  var dots=[].slice.call(tl.querySelectorAll('.dot'));if(innerWidth<=860||!dots.length)return;
  var b=tl.getBoundingClientRect(),pts=dots.map(function(d){var r=d.getBoundingClientRect();return[r.left-b.left+10,r.top-b.top+10]});
  var d='M'+pts[0][0]+' '+pts[0][1];
  for(var i=1;i<pts.length;i++){var a=pts[i-1],c=pts[i],mx=(a[0]+c[0])/2;d+=' C'+mx+' '+a[1]+' '+mx+' '+c[1]+' '+c[0]+' '+c[1]}
  wave.setAttribute('d',d);var L=wave.getTotalLength();wave.style.strokeDasharray=L;wave.style.strokeDashoffset=drawn?0:L;wave.dataset.l=L;
}
build();addEventListener('resize',build);addEventListener('load',build);
new IntersectionObserver(function(e,o){if(e[0].isIntersecting){drawn=true;wave.style.transition=rm?'none':'stroke-dashoffset 2.2s cubic-bezier(.65,0,.35,1)';wave.style.strokeDashoffset=0;o.disconnect()}},{threshold:.35}).observe(tl);

// video mockup open/close
var vidWrap=$('#vidWrap'),vidModal=$('#vidModal'),vidClose=$('#vidClose');
function openVid(e){e.stopPropagation();vidModal.classList.add('open');vidModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeVid(){vidModal.classList.remove('open');vidModal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
if(vidWrap){vidWrap.addEventListener('click',openVid);vidWrap.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openVid(e)}})}
if(vidClose){vidClose.addEventListener('click',function(e){e.stopPropagation();closeVid()})}
if(vidModal){vidModal.addEventListener('click',function(e){if(e.target===vidModal)closeVid()})}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeVid()});

// copy email, form, ask panel
$('#copy').onclick=function(){var b=this;try{navigator.clipboard.writeText('sohamvaghela1712@gmail.com')}catch(e){}b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600)};
$('#f').addEventListener('submit',function(e){e.preventDefault();var n=$('#n').value,em=$('#e').value,m=$('#m').value;location.href='mailto:sohamvaghela1712@gmail.com?subject='+encodeURIComponent('Hello from '+(n||'your portfolio'))+'&body='+encodeURIComponent(m+'\n\n– '+n+(em?' ('+em+')':''))});
$('#askb').onclick=function(){var o=$('#askp').classList.toggle('open');this.setAttribute('aria-expanded',o)};
[].forEach.call(document.querySelectorAll('#askp button'),function(b){b.onclick=function(){$('#ans').textContent=b.dataset.a}});
})();
