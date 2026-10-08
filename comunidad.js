$("#eco").append(...ECO.map(e=>el("div",{class:"eco"},[el("h3",{text:e.t}),el("p",{text:e.d})])));
// Reseñas
const sel = $("#rPlace");
sel.append(el("option",{value:"",text:"Elige un lugar"}), ...PLACES.map(p=>el("option",{value:p.n,text:p.n})), el("option",{value:"Zipaquirá en general",text:"Zipaquirá en general"}));
let rating = 0;
const starBox = $("#stars");
for(let i=1;i<=5;i++){
  const b = el("button",{type:"button","aria-label":`${i} de 5 estrellas`,"aria-pressed":"false",text:"★"});
  b.addEventListener("click",()=>{rating=i;paintStars();});
  starBox.append(b);
}
function paintStars(){
  [...starBox.children].forEach((b,i)=>{b.classList.toggle("on",i<rating);b.setAttribute("aria-pressed",i+1===rating?"true":"false");});
}
const KEY = "zipaquira_reviews_v1";
function loadReviews(){ try{ return JSON.parse(localStorage.getItem(KEY)||"[]"); }catch(e){ return []; } }
function saveReviews(list){ try{ localStorage.setItem(KEY,JSON.stringify(list)); return true; }catch(e){ return false; } }
function renderReviews(){
  const box = $("#reviewList"); box.innerHTML = "";
  const sum = $("#reviewSummary"); sum.innerHTML = "";
  const list = loadReviews();
  if(!list.length){ box.append(el("p",{class:"empty",text:"Aún no hay opiniones. Escribe la primera."})); return; }
  const avg = list.reduce((a,r)=>a+r.rating,0)/list.length;
  const rec = list.filter(r=>r.rec==="si").length;
  sum.append(el("div",{class:"rv-top"},[el("span",{class:"big",text:avg.toFixed(1)}),el("span",{class:"st","aria-hidden":"true",text:"★".repeat(Math.round(avg))}),el("span",{class:"note",style:"margin:0",text:`${list.length} opinión${list.length>1?"es":""} · ${rec} lo recomiendan`})]));
  list.slice().reverse().forEach(r=>{
    const top = el("div",{class:"top"},[el("b",{text:r.name}),el("span",{class:"st","aria-label":`${r.rating} de 5 estrellas`,text:"★".repeat(r.rating)})]);
    const pl = el("div",{class:"pl",text:r.place});
    if(r.rec) pl.append(el("span",{class:"rec"+(r.rec==="no"?" no":""),text:r.rec==="si"?"Lo recomienda":"No lo recomienda"}));
    box.append(el("div",{class:"review"},[top,pl,el("p",{text:r.text})]));
  });
}
renderReviews();
$("#reviewForm").addEventListener("submit",ev=>{
  ev.preventDefault();
  const name=$("#rName").value.trim(), place=sel.value, text=$("#rText").value.trim(), rec=$("#rRec").value, msg=$("#rMsg");
  msg.classList.remove("err");
  if(!name||!place||!rating||!text){ msg.classList.add("err"); msg.textContent="Completa tu nombre, el lugar, la calificación y tu opinión."; return; }
  const list = loadReviews(); list.push({name,place,rating,rec,text,ts:Date.now()});
  if(saveReviews(list)){ msg.textContent="¡Gracias por compartir tu experiencia!"; ev.target.reset(); rating=0; paintStars(); renderReviews(); }
  else { msg.classList.add("err"); msg.textContent="No pudimos guardar tu opinión en este navegador. Inténtalo de nuevo."; }
});

// Contacto
$("#contactForm").addEventListener("submit",ev=>{
  ev.preventDefault();
  const n=$("#cName").value.trim(), m=$("#cMail").value.trim(), s=$("#cSubj").value.trim()||"Consulta turística", t=$("#cMsg").value.trim(), info=$("#cInfo");
  info.classList.remove("err");
  if(!n||!m||!t){ info.classList.add("err"); info.textContent="Completa tu nombre, correo y mensaje."; return; }
  const body = `${t}\n\nNombre: ${n}\nCorreo: ${m}`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(body)}`;
  info.textContent = "Se abrirá tu aplicación de correo para enviar el mensaje.";
});
const asuntoUrl = new URLSearchParams(location.search).get("asunto");
if(asuntoUrl) $("#cSubj").value = asuntoUrl;
