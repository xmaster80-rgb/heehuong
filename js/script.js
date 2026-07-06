const weddingDate=new Date('2026-08-08T11:00:00+09:00');
const dday=document.getElementById('dday');
function updateDday(){const now=new Date();const diff=weddingDate-now;const days=Math.ceil(diff/(1000*60*60*24));dday.textContent=days>0?`D-${days}`:days===0?'D-Day':`D+${Math.abs(days)}`;}updateDday();setInterval(updateDday,3600000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const toast=document.getElementById('toast');function showToast(t){toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1600)}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);showToast('계좌번호가 복사되었습니다.')}catch(e){showToast('복사할 번호: '+btn.dataset.copy)}}));
document.getElementById('copyUrl').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);showToast('청첩장 주소가 복사되었습니다.')}catch(e){showToast(location.href)}});
document.getElementById('kakaoShare')?.addEventListener('click',()=>{showToast('카카오 개발자 키 연결 후 사용 가능합니다.')});
const lb=document.getElementById('lightbox'), lbImg=lb.querySelector('img');document.querySelectorAll('.gallery img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.add('open')}));lb.querySelector('button').addEventListener('click',()=>lb.classList.remove('open'));lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
// 부드러운 피아노 느낌의 WebAudio BGM. 첫 터치 후 재생됩니다.
let audioCtx, playing=false, intervalId;const musicBtn=document.getElementById('musicBtn');
function playTone(freq,time,dur){const osc=audioCtx.createOscillator();const gain=audioCtx.createGain();osc.type='sine';osc.frequency.value=freq;gain.gain.setValueAtTime(0,time);gain.gain.linearRampToValueAtTime(.055,time+.04);gain.gain.exponentialRampToValueAtTime(.001,time+dur);osc.connect(gain).connect(audioCtx.destination);osc.start(time);osc.stop(time+dur)}
function startMusic(){audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const notes=[392,493.88,587.33,783.99,659.25,587.33,493.88,392];let i=0;function loop(){const t=audioCtx.currentTime;playTone(notes[i%notes.length],t,1.8);playTone(notes[(i+2)%notes.length]/2,t+.05,2.1);i++;}loop();intervalId=setInterval(loop,1450);playing=true;musicBtn.classList.add('playing');}
function stopMusic(){clearInterval(intervalId);playing=false;musicBtn.classList.remove('playing');}
musicBtn.addEventListener('click',()=>playing?stopMusic():startMusic());
for(let i=0;i<28;i++){const p=document.createElement('span');p.className=i%4===0?'sparkle':'petal';p.style.left=Math.random()*100+'vw';p.style.setProperty('--x',(Math.random()*120-60)+'px');p.style.animationDuration=(8+Math.random()*8)+'s';p.style.animationDelay=(-Math.random()*10)+'s';document.querySelector('.petals').appendChild(p)}
