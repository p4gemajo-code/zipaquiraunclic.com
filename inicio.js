// Hero
const HERO = [
  ["https://www.zipaquira.travel/wp-content/uploads/2025/03/maqz-12-1024x683.jpg","plaza","Zipaquirá: patrimonio y cultura"],
  ["https://live.staticflickr.com/2517/3844650919_ce28b64514_b.jpg","plaza","Zipaquirá: paisaje urbano y tradición"],
  ["https://photos.wikimapia.org/p/00/00/75/08/40_big.jpg","plaza","Zipaquirá: arquitectura y color"]
];
$("#heroArches").append(...HERO.map(h=>{ const d = el("div",{class:"arch"}); pic(d,h[0],h[2],h[1]); return d; }));

// Proyecto
$("#goals").append(...GOALS.map((g,i)=>el("div",{class:"goal"},[el("div",{class:"n",text:String(i+1)}),el("h3",{text:g.t}),el("p",{text:g.d})])));
