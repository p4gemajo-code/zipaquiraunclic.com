// Actividades + filtros
let activeCat = "Todas";
function renderActs(){
  const box = $("#acts"); box.innerHTML = "";
  ACTS.filter(a=>activeCat==="Todas"||a.k===activeCat).forEach(a=>box.append(el("div",{class:"act"},[
    el("div",{class:"ico",style:`background:${a.c}`,html:`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[a.i]}</svg>`}),
    el("span",{class:"chip",text:a.k}), el("h3",{style:"margin-top:8px",text:a.n}), el("p",{text:a.d})
  ])));
}
const afb = $("#actFilters");
ACT_CATS.forEach(c=>{
  const b = el("button",{type:"button","aria-pressed":c===activeCat?"true":"false",text:c});
  b.addEventListener("click",()=>{ activeCat=c; afb.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x.textContent===c?"true":"false")); renderActs(); });
  afb.append(b);
});
renderActs();

// Agenda
$("#events").append(...EVENTS.map(e=>el("article",{class:"event"},[
  el("div",{},[el("span",{class:"chip","data-t":e.t,text:e.t}),el("h3",{style:"margin-top:8px",text:e.n}),el("p",{style:"margin-top:4px",text:e.d})]),
  el("span",{class:"when",text:e.w})
])));

// Precios
$("#priceRows").append(...PRICES.map(r=>{
  const tr = el("tr");
  const tbc = v=>/^Consultar/.test(v);
  tr.append(el("th",{scope:"row",text:r.n}), el("td",{class:r.free?"free":(tbc(r.p)?"tbc":""),text:r.p}), el("td",{class:tbc(r.h)?"tbc":"",text:r.h}), el("td",{text:r.i}));
  return tr;
}));

// Hoteles y restaurantes
function biz(b){
  const kids=[el("span",{class:"chip",text:b.t}),el("h3",{text:b.n}),el("p",{text:b.d}),
    el("div",{style:"display:flex;gap:8px;flex-wrap:wrap"},[el("a",{class:"btn btn-white btn-sm",href:mapLink(b.n),target:"_blank",rel:"noopener",text:"Ver ubicación"})].concat(b.web?[el("a",{class:"btn btn-line btn-sm",href:b.web,target:"_blank",rel:"noopener",text:"Sitio web"})]:[]))];
  return el("article",{class:"biz"},kids);
}
$("#hotels").append(...HOTELS.map(biz));
$("#restaurants").append(...RESTS.map(biz));

$("#tips").append(...TIPS.map(t=>el("div",{class:"info"},[el("h3",{text:t.t}),el("ul",{html:t.l.map(x=>`<li>${x}</li>`).join("")})])));
