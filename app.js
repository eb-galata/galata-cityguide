const show=id=>{document.querySelectorAll('.screen').forEach(x=>x.classList.toggle('active',x.id===id));scrollTo(0,0)}
document.querySelectorAll('[data-view]').forEach(x=>x.onclick=()=>show(x.dataset.view))
document.querySelectorAll('[data-day]').forEach(x=>x.onclick=()=>show('day'+x.dataset.day))
document.getElementById('today').onclick=()=>{const k=new Date().toISOString().slice(0,10),m={'2026-10-19':'day19','2026-10-20':'day20','2026-10-21':'day21','2026-10-22':'day22','2026-10-23':'day23'};show(m[k]||'home')}

if("serviceWorker" in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js",{scope:"./"}).catch(()=>{})})}
