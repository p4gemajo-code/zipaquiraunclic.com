// Lugares + filtros
const TAGS = ["Todos","Patrimonio","Plazas y parques","Religioso","Cultura","Experiencia","Familia y recreación","Naturaleza"];
let activeTag = "Todos";
function renderPlaces(){
  const box = $("#placeCards"); box.innerHTML = "";
  PLACES.filter(p=>activeTag==="Todos"||p.t===activeTag).forEach(p=>{
    const arch = el("div",{class:"arch"});
    const kids = [arch];
    const cr = el("p",{class:"credit",hidden:"",html:p.credit ? `Foto: <a href="${p.credit}" target="_blank" rel="noopener">${p.author ? p.author : "Fuente"}</a>${p.license ? ` · Licencia: ${p.license}` : ""}` : ""});
    pic(arch,p.img,p.n,p.s,()=>{ if(p.credit) cr.hidden=false; });
    kids.push(cr);
    kids.push(
      el("span",{class:"chip","data-t":p.t,text:p.t}),
      el("h3",{text:p.n}),
      el("p",{text:p.d}),
      el("details",{},[el("summary",{text:"Más información"}),
        el("p",{text:p.imp}),
        el("ul",{class:"facts",style:"margin-top:10px",html:
          `<li><b>Qué hacer:</b> ${p.act.join("; ")}.</li><li><b>Ubicación:</b> ${p.loc}</li><li><b>Recomendación:</b> ${p.rec}</li><li><b>Precio:</b> ${p.p}</li><li><b>Horario:</b> ${p.h}</li>`}),
        el("a",{class:"btn btn-blue btn-sm",style:"margin-top:12px",href:mapLink(p.n),target:"_blank",rel:"noopener",text:"Ver en el mapa"})
      ])
    );
    box.append(el("article",{class:"card"},kids));
  });
}
const fbox = $("#filters");
TAGS.forEach(t=>{
  const b = el("button",{type:"button","aria-pressed":t===activeTag?"true":"false",text:t});
  b.addEventListener("click",()=>{
    activeTag=t;
    fbox.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x.textContent===t?"true":"false"));
    renderPlaces();
  });
  fbox.append(b);
});
renderPlaces();

// Historia
$("#timeline").append(...ERAS.map((e,i)=>{
  const d = el("details",{class:"era"});
  if(i===0) d.open = true;
  d.append(el("summary",{},[el("span",{class:"yr",text:e.y}),el("span",{class:"ttl",text:e.t}),el("span",{class:"sum",text:e.s})]), el("p",{class:"more",text:e.m}));
  return d;
}));
$("#pillars").append(...PILLARS.map(p=>el("div",{class:"pillar"},[el("h3",{text:p.t}),el("p",{text:p.d})])));

// Gastronomía
function dish(f){ if(f.feat){ const pl = el("div",{class:"plate"}); pic(pl,f.img,f.n,"plato"); return el("div",{class:"dish featured"},[pl,el("div",{},[el("span",{class:"tag",text:"★ Dulce emblemático de Zipaquirá"}),el("h3",{text:f.n}),el("p",{text:f.d})])]); } const pl = el("div",{class:"plate"}); const body = el("div",{},[el("h3",{text:f.n}),el("p",{text:f.d})]);
  pic(pl,f.img,f.n,"plato",()=>{ if(f.credit) body.append(el("p",{class:"credit",style:"margin-top:4px",html:`Foto: <a href="${f.credit}" target="_blank" rel="noopener">Wikimedia Commons</a>`})); });
  return el("div",{class:"dish"},[pl,body]); }
$("#food").append(...FOOD.map(dish));
$("#sweets").append(...SWEETS.map(dish));
$("#foodPlaces").append(...FOODPLACES.map(f=>{
  const d = dish(f);
  d.lastChild.append(el("a",{href:mapLink(f.n),target:"_blank",rel:"noopener",style:"font-size:.88rem;color:var(--blue);font-weight:600;display:inline-block;margin-top:6px",text:"Ver ubicación"}));
  return d;
}));
