/* ============ CONFIGURACIÓN EDITABLE ============ */
const CONTACT_EMAIL = "zipaquiraunclic@gmail.com";

/* ============ ILUSTRACIONES (SVG) ============ */
let uid = 0;
function scene(type){
  const id = "g" + (++uid);
  const palettes = {
    plaza:["#bcd8ff","#eef4ff"], museo:["#a9c9ff","#e3eeff"], arqueo:["#1b2b4e","#2a5bd7"],
    cultura:["#6f5bd6","#2a5bd7"], iglesia:["#8ec1ff","#e9f2ff"], tren:["#9be0dc","#e6f7f6"],
    montana:["#ffc9b8","#bcd8ff"], plato:["#dfe9ff","#bcd8ff"]
  };
  const [c1,c2] = palettes[type];
  const head = `<svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="200" height="240" fill="url(#${id})"/>`;
  const sun = `<circle cx="158" cy="62" r="17" fill="#f7d98b"/>`;
  const S = {
    plaza: sun + `<rect y="188" width="200" height="52" fill="#dfe9fb"/>
      <path d="M88 84l16-24 16 24z" fill="#1b2b4e" transform="translate(-4 0)"/>
      <rect x="88" y="84" width="24" height="52" fill="#fff"/><path d="M94 108v-8a6 6 0 0 1 12 0v8z" fill="#2a5bd7"/>
      <path d="M14 136h172l-12-20H26z" fill="#e8694f"/><rect x="20" y="136" width="160" height="52" fill="#fff"/>
      ${[0,1,2,3].map(i=>`<path d="M${32+i*38} 188v-26a12 12 0 0 1 24 0v26z" fill="#2a5bd7"/>`).join("")}
      <circle cx="100" cy="210" r="14" fill="#8ec1ff"/><circle cx="100" cy="210" r="6" fill="#fff"/>`,
    museo: sun + `<rect y="196" width="200" height="44" fill="#d3e3fb"/>
      <path d="M24 108l76-36 76 36z" fill="#1b2b4e"/>
      ${[0,1,2,3,4].map(i=>`<rect x="${34+i*30}" y="112" width="12" height="64" fill="#fff"/>`).join("")}
      <rect x="20" y="176" width="160" height="12" fill="#fff"/><rect x="12" y="188" width="176" height="10" fill="#8ec1ff"/>
      <circle cx="100" cy="98" r="7" fill="#c9a45c"/>`,
    arqueo: `<g fill="none" stroke="#4a86f0" stroke-opacity=".5" stroke-width="2"><circle cx="100" cy="130" r="86"/><circle cx="100" cy="130" r="64"/></g>
      <path d="M70 80c0-14 60-14 60 0 0 10 14 18 14 46 0 32-24 48-44 48s-44-16-44-48c0-28 14-36 14-46z" fill="#d4a850"/>
      <ellipse cx="100" cy="82" rx="30" ry="7" fill="#b88a30"/>
      <path d="M62 118h76M60 136h80" stroke="#1b2b4e" stroke-width="3"/>
      <g fill="#1b2b4e"><path d="M100 144l8 8-8 8-8-8z"/><path d="M78 148l5 5-5 5-5-5z"/><path d="M122 148l5 5-5 5-5-5z"/></g>
      <rect y="196" width="200" height="44" fill="#13203c"/>`,
    cultura: `<circle cx="100" cy="124" r="80" fill="#fff" fill-opacity=".14"/>
      <circle cx="78" cy="156" r="13" fill="#fff"/><circle cx="132" cy="144" r="13" fill="#fff"/>
      <path d="M91 156V76l54-14v82" fill="none" stroke="#fff" stroke-width="7"/><path d="M91 94l54-14" stroke="#fff" stroke-width="10"/>
      <circle cx="40" cy="60" r="5" fill="#f7d98b"/><circle cx="168" cy="190" r="6" fill="#f7d98b"/><circle cx="36" cy="198" r="4" fill="#fff"/>`,
    iglesia: sun + `<rect y="190" width="200" height="50" fill="#dce9fb"/>
      <rect x="54" y="116" width="92" height="74" fill="#fff"/><rect x="82" y="64" width="36" height="52" fill="#fff"/>
      <path d="M78 64l22-34 22 34z" fill="#2a5bd7"/><path d="M100 14v18M93 21h14" stroke="#c9a45c" stroke-width="3" stroke-linecap="round"/>
      <path d="M92 100v-8a8 8 0 0 1 16 0v8z" fill="#1b2b4e"/><path d="M88 190v-30a12 12 0 0 1 24 0v30z" fill="#1b2b4e"/>
      <path d="M48 116l52-18 52 18z" fill="#e8694f"/>
      <g fill="#8ec1ff"><rect x="62" y="136" width="14" height="22" rx="7"/><rect x="124" y="136" width="14" height="22" rx="7"/></g>`,
    tren: `<path d="M0 170c40-50 80-46 110-18 30 26 60 8 90-22v110H0z" fill="#4fbab6"/>
      <path d="M0 196c50-30 100-20 200-6v50H0z" fill="#1f9d9a"/>
      <circle cx="40" cy="60" r="16" fill="#f7d98b"/>
      <rect x="20" y="130" width="120" height="44" rx="8" fill="#2a5bd7"/><rect x="112" y="108" width="52" height="66" rx="8" fill="#1b2b4e"/>
      <rect x="120" y="118" width="28" height="22" rx="4" fill="#bcd8ff"/>
      ${[0,1,2].map(i=>`<rect x="${30+i*28}" y="140" width="20" height="16" rx="3" fill="#fff"/>`).join("")}
      <rect x="40" y="112" width="18" height="18" fill="#13203c"/>
      <circle cx="46" cy="102" r="9" fill="#fff" fill-opacity=".85"/><circle cx="62" cy="88" r="12" fill="#fff" fill-opacity=".7"/>
      <g fill="#13203c"><circle cx="48" cy="180" r="10"/><circle cx="90" cy="180" r="10"/><circle cx="136" cy="180" r="10"/></g>
      <path d="M0 192h200" stroke="#13203c" stroke-width="3"/>`,
    montana: `<circle cx="100" cy="130" r="38" fill="#f7d98b"/>
      <path d="M0 170l52-70 38 48 30-38 80 94v36H0z" fill="#2a5bd7"/>
      <path d="M52 100l-14 19 14-7 10 9z" fill="#fff"/>
      <path d="M0 196l70-34 60 22 70-26v82H0z" fill="#1b2b4e"/>
      <ellipse cx="110" cy="214" rx="64" ry="14" fill="#8ec1ff"/><path d="M70 214h80" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>`,
    plato: `<circle cx="100" cy="120" r="94" fill="#fff"/><circle cx="100" cy="120" r="70" fill="none" stroke="#bcd8ff" stroke-width="4"/>
      <path d="M50 108c12-26 52-30 78-8 12 10 20 24 14 38-28 18-70 14-92-6z" fill="#9a5a36"/>
      <path d="M62 112c18-12 40-12 60 0M60 128c24-10 50-8 72 2" stroke="#6e3a1f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g fill="#f1c95d"><circle cx="64" cy="164" r="14"/><circle cx="96" cy="172" r="13"/><circle cx="130" cy="166" r="14"/></g>
      <g fill="#fff" fill-opacity=".5"><circle cx="60" cy="160" r="4"/><circle cx="92" cy="168" r="4"/><circle cx="126" cy="162" r="4"/></g>`
  };
  return head + S[type] + "</svg>";
}

/* ============ DATOS ============ */
const TBC_P = "Consultar tarifa vigente";
const TBC_H = "Consultar horario actualizado";
const mapLink = n => "https://www.google.com/maps/search/" + encodeURIComponent(n + " Zipaquirá, Cundinamarca");

/* Fotografías: coloca tus archivos en la carpeta /img con el nombre indicado en "img".
   Si el archivo no existe, la tarjeta muestra una ilustración de reemplazo.
   En "credit" va el enlace a la página del archivo con autor y licencia. */
const GOALS = [
  {t:"Promover diversos destinos", d:"Más lugares, rutas y experiencias para repartir el turismo por todo el municipio."},
  {t:"Información clara y organizada", d:"Lugares, precios, horarios y recomendaciones en un solo sitio."},
  {t:"Difundir actividades culturales", d:"Eventos, museos, tradiciones y propuestas de la comunidad."},
  {t:"Precios y actividades gratuitas", d:"Identificamos los espacios de entrada libre para que planees según tu presupuesto."},
  {t:"Conectar con servicios locales", d:"Hoteles, restaurantes y negocios del municipio."},
  {t:"Compartir experiencias", d:"Tus opiniones ayudan a otros visitantes a decidir y a mejorar la oferta."},
  {t:"Fortalecer la identidad turística", d:"Reconocer y valorar todo lo que hace único a Zipaquirá."}
];

const PLACES = [
  {s:"plaza", t:"Plazas y parques", n:"Plaza de los Comuneros", img:"/plaza-comuneros.jpg", credit:"https://commons.wikimedia.org/wiki/File:Plaza_principal_de_Zipaquira..JPG", author:"Kamilokardona", license:"CC BY-SA 3.0",
   d:"La plaza principal del centro histórico, también conocida como Plaza Mayor o Plaza González Forero.",
   imp:"Su nombre recuerda las Capitulaciones de Zipaquirá de 1781. Reúne el templo diocesano y el Palacio Municipal, y es el punto de partida natural del recorrido por el casco antiguo.",
   act:["Caminar y orientarte antes de recorrer el centro","Observar la arquitectura colonial y republicana","Tomar fotografías y descansar en la plaza"],
   loc:"Centro histórico de Zipaquirá", rec:"Empieza aquí tu recorrido a pie y sigue hacia el Parque de la Independencia.", p:"Entrada libre", h:"Espacio público"},
  {s:"plaza", t:"Plazas y parques", n:"Parque de la Independencia", img:"https://extrategiamedios.com/wp-content/uploads/2026/08/El-Parque-de-la-Independencia-podria-recuperar-su-antiguo-nombre-de-Plaza-de-Zapata-en-Zipaquira1-1200x800.jpg", credit:"https://extrategiamedios.com/el-parque-de-la-independencia-podria-recuperar-su-antiguo-nombre-de-plaza-zapata-en-zipaquira/", author:"Extrategia Medios",
   d:"Antigua plaza de mercado convertida en espacio de encuentro con cafés, restaurantes y bares.",
   imp:"Se llamó Plaza Agustín Zapata y fue sede del mercado municipal; se renovó con motivo del bicentenario de la Independencia. Tiene una escultura de Antonio Nariño y una fuente que antes estaba en la Plaza de los Comuneros.",
   act:["Ver la escultura de Antonio Nariño","Tomar un café o almorzar en la plaza","Disfrutar el ambiente nocturno de sus bares"],
   loc:"Calle 5, centro de Zipaquirá", rec:"Buen lugar para hacer una pausa gastronómica durante el recorrido.", p:"Entrada libre", h:"Espacio público"},
  {s:"plaza", t:"Plazas y parques", n:"Plaza de los Mártires (Parque de la Floresta)", img:"https://www.zipaquira.travel/wp-content/uploads/2025/12/1-8-1024x683.jpg", credit:"https://www.zipaquira.travel/plazas-y-parques/", author:"Zipaquirá Travel",
   d:"Plaza con un obelisco dedicado a la memoria de seis mártires locales.",
   imp:"El obelisco representó en su día a las provincias del antiguo departamento de Quesada y hoy lleva los nombres de seis mártires importantes para la historia de Zipaquirá.",
   act:["Leer los nombres y la historia del monumento","Hacer una parada tranquila en el recorrido"],
   loc:"Zona del centro; consulta el mapa", rec:"Combínala con las demás plazas históricas del municipio.", p:"Entrada libre", h:"Espacio público"},
  {s:"iglesia", t:"Religioso", n:"Templo diocesano y patrimonio religioso", img:"https://hotelcaminodelasal.com/wp-content/uploads/2021/10/001_catedral_diocesana.jpg", credit:"https://hotelcaminodelasal.com/catedral-diocesana/", author:"Hotel Camino de la Sal",
   d:"La iglesia de piedra frente a la plaza principal y los templos de estilo colonial del municipio.",
   imp:"Los templos cuentan cómo se desarrollaron la fe, el arte y el trazado urbano de la población desde la época colonial.",
   act:["Admirar fachadas y detalles arquitectónicos","Visitar con respeto fuera de los horarios de culto"],
   loc:"Alrededor de la Plaza de los Comuneros", rec:"Respeta las ceremonias; evita flash y conversaciones en voz alta dentro de los templos.", p:"Entrada libre (templos)", h:"Según cada parroquia"},
  {s:"museo", t:"Cultura", n:"Casa Museo Guillermo Quevedo Zornoza", img:"https://extrategiamedios.com/wp-content/uploads/2023/05/Museo-Zipaquira-Casa-Guillermo-Quevedo-Zornoza-2.jpg", credit:"https://extrategiamedios.com/desfile-ceremonias-y-actividades-gratuitas-en-zipaquira-por-el-dia-de-los-martires-este-fin-de-semana/", author:"Extrategia Medios",
   d:"Casa-museo con objetos de varias generaciones de la familia Quevedo, ligada a la literatura, la poesía, la música y la pintura.",
   imp:"Según las guías turísticas locales, conserva piezas de los últimos siglos, incluidos objetos asociados a próceres de la Independencia. Ayuda a entender la vida cultural de la Zipaquirá de antes.",
   act:["Recorrer las salas de la casa","Conocer la historia cultural de la familia","Combinar con otros museos en una ruta"],
   loc:"Centro histórico de Zipaquirá", rec:"Confirma horario y tarifa antes de ir.", p:TBC_P, h:TBC_H},
  {s:"cultura", t:"Cultura", n:"Centro Cultural Casa del Nobel Gabriel García Márquez", img:"https://zipaquiraturistica.com/dashboard-zipa-turis/storage/ciudades/17.webp", credit:"https://zipaquiraturistica.com/la-ciudad/centro-cultural-casa-del-nobel-gabriel-garcia-marquez", author:"Zipaquirá Turística",
   d:"Edificio colonial dedicado a la vida del Nobel Gabriel García Márquez, que también alberga escuelas de formación cultural.",
   imp:"Conecta a Zipaquirá con la literatura colombiana y con la formación artística de sus habitantes.",
   act:["Conocer la historia del escritor","Preguntar por talleres y muestras abiertas"],
   loc:"A una cuadra del parque principal", rec:"Consulta la programación antes de visitar.", p:TBC_P, h:TBC_H},
  {s:"plaza", t:"Patrimonio", n:"Calles y arquitectura del centro histórico", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Zipaquirá_City.jpg?width=900", credit:"https://commons.wikimedia.org/wiki/File:Zipaquirá_City.jpg",
   d:"Calles peatonales con tiendas y cafés, edificios coloniales y republicanos como la alcaldía, de techos verdes.",
   imp:"Es el mejor lugar para leer la historia del municipio en su arquitectura: fachadas de piedra, plazas y casonas.",
   act:["Recorrido a pie y fotografía urbana","Café y compras en comercio local"],
   loc:"Centro histórico", rec:"Usa calzado cómodo; es un recorrido para hacer sin afán.", p:"Entrada libre", h:"Espacio público"},
  {s:"tren", t:"Experiencia", n:"Estación del Tren de Zipaquirá", img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Estaci%C3%B3n_TREN_Zipaquir%C3%A1.jpg", credit:"https://commons.wikimedia.org/wiki/File:Estaci%C3%B3n_TREN_Zipaquir%C3%A1.jpg", author:"JuanPeriodista", license:"CC BY-SA 4.0",
   d:"La estación histórica de Zipaquirá, también conocida como Estación Tres Esquinas, es hoy un punto de referencia cultural y turístico del municipio.",
   imp:"Fue inaugurada el 8 de diciembre de 1927 y es una de las edificaciones ferroviarias patrimoniales de Zipaquirá.",
   act:["Observar la arquitectura de la estación","Tomar fotografías del exterior","Iniciar desde aquí un recorrido por el centro histórico"],
   loc:"Zipaquirá, Cundinamarca", rec:"Combínala con el recorrido por las plazas y calles del centro histórico.", p:"Entrada libre", h:"Espacio público / consultar actividades"},

  {s:"tren", t:"Experiencia", n:"Tren turístico de la Sabana", img:"https://zipaquiraturistica.com/dashboard-zipa-turis/storage/blog/awUQCrpkCu5rjpoMOvPElSdsZsKZB5EGJPihwXqZ.jpg", credit:"https://zipaquiraturistica.com/",
   d:"Llega desde Bogotá en tren y empieza el paseo desde la estación.",
   imp:"Según guías de viaje funciona fines de semana y festivos, con salida desde la Estación de la Sabana en Bogotá, y suele llenarse.",
   act:["Disfrutar el trayecto por la Sabana","Combinar el viaje con el recorrido por el centro"],
   loc:"Estación del tren en Zipaquirá", rec:"Compra con tiempo y confirma días y horarios con el operador.", p:"Tarifa del operador", h:"Días y horarios del operador"},
  {s:"plaza", t:"Familia y recreación", n:"Ciclovía dominical", img:"https://extrategiamedios.com/wp-content/uploads/2025/01/419885216_1293095044893500_4599307742373791243_n.jpg", credit:"https://extrategiamedios.com/", author:"Extrategia Medios",
   d:"Un recorrido de domingo para pedalear, caminar o patinar con paradas en el centro histórico, cafés y restaurantes.",
   imp:"Es una forma activa y gratuita de conocer el municipio en familia.",
   act:["Pedalear, caminar o patinar","Parar en cafés y restaurantes del centro"],
   loc:"Vías habilitadas en Zipaquirá", rec:"Lleva agua, protección solar y consulta el recorrido vigente.", p:"Entrada libre", h:"Domingos; consultar horario actualizado"},
  {s:"montana", t:"Naturaleza", n:"Escapadas cercanas: Suesca", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Rocas_de_Suesca.JPG?width=900", credit:"https://commons.wikimedia.org/wiki/File:Rocas_de_Suesca.JPG",
   d:"Laguna, caminatas y escalada a poca distancia.",
   imp:"Suesca, Tabio y Guatavita completan un plan de varios días por los pueblos de la Sabana.",
   act:["Caminatas y paisaje","Escalada con operadores autorizados"],
   loc:"Municipios vecinos de la Sabana", rec:"Planea el transporte con anticipación.", p:TBC_P, h:TBC_H}
];

const ERAS = [
  {y:"Antes del siglo XVI", t:"Territorio muisca", s:"Pueblos ancestrales que habitaron y comerciaron en la Sabana.", m:"La región fue territorio muisca. Sus habitantes intercambiaban productos con otros pueblos y dejaron un legado que hoy se estudia en museos de Colombia."},
  {y:"Época colonial", t:"Villa de Zipaquirá", s:"El pueblo se consolida y levanta sus primeros templos.", m:"Durante la Colonia la población se organiza como villa. De esa etapa heredó su trazado urbano, sus plazas y las iglesias de estilo colonial que siguen en pie."},
  {y:"1781", t:"Capitulaciones de Zipaquirá", s:"Un capítulo clave de la Revuelta de los Comuneros.", m:"En el marco de la Revuelta de los Comuneros se firmaron las llamadas Capitulaciones de Zipaquirá, un episodio que ubica al municipio en la historia política del país. De ahí el nombre de su plaza principal."},
  {y:"Independencia", t:"Memoria republicana", s:"Plazas y monumentos que recuerdan a los próceres.", m:"El Parque de la Independencia, antigua plaza de mercado, se renovó para conmemorar el bicentenario de la Independencia y hoy tiene una escultura de Antonio Nariño. La Plaza de los Mártires recuerda a seis mártires locales."},
  {y:"Siglo XX", t:"Letras, música y formación", s:"Una ciudad que forma artistas y lectores.", m:"La familia Quevedo dejó un legado de literatura, poesía, música y pintura. El escritor Gabriel García Márquez estudió el bachillerato en Zipaquirá, y hoy un centro cultural lleva su nombre."},
  {y:"Hoy", t:"Municipio cultural", s:"Museos, música, festivales y vida de pueblo.", m:"Casas de cultura, museos, plazas animadas, una agenda de festivales y la ciclovía dominical mantienen viva la identidad local, abierta a quienes visitan."}
];

const PILLARS = [
  {t:"Patrimonio construido", d:"Plazas, casonas y templos de estilo colonial en el centro histórico."},
  {t:"Arquitectura", d:"Fachadas de piedra, techos verdes republicanos y calles peatonales."},
  {t:"Memoria e historia", d:"Los Comuneros, la Independencia y los mártires locales."},
  {t:"Música y letras", d:"Un legado artístico que se vive en casas de cultura y museos."},
  {t:"Fiestas y encuentros", d:"Festivales y celebraciones que reúnen a vecinos y visitantes."},
  {t:"Cocina de la Sabana", d:"Platos tradicionales que cuentan cómo se come en la región."}
];

const FOOD = [
  {n:"Sobrebarriga al horno", d:"El plato típico de la región, cocinado despacio hasta quedar tierno.", img:"https://lapalmaesvida.com/wp-content/uploads/receta-de-sobrebarriga-al-horno.webp", credit:"https://lapalmaesvida.com/recetas/sobrebarriga-al-horno/"},
  {n:"Sobrebarriga en salsa criolla", d:"La misma tradición, con hogao casero y mucho sabor.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-zmV7ZvsZliWN1oiHA7JEVbtCknZcHUurT9oWFBxJNX6Z5WLDhwo2Wk&s=10"},
  {n:"Papas salmueras", d:"El acompañamiento clásico: papas cocidas en salmuera, según la receta tradicional.", img:"https://vecinavegetariana.com/wp-content/uploads/2022/06/papas-saladas-2-1-678x1024.jpeg", credit:"https://vecinavegetariana.com/es/verduras-horneadas-en-hoja-de-platano/"},
  {n:"Plato del minero", d:"Carne servida con papas saladas de textura arrugada, un clásico que cada vez es más escaso.", img:"https://www.researchgate.net/publication/319069849/figure/fig5/AS:526348613165056@1502502696071/Figura-5-Plato-minero-Fotografia-del-autor-2011.png", credit:"https://www.researchgate.net/figure/Figura-5-Plato-minero-Fotografia-del-autor-2011_fig5_319069849"},
  {n:"Tamal de calabaza", d:"Plato tradicional de la Sabana, servido en desayunos con productos locales.", img:"https://imagenes2.eltiempo.com/files/og_thumbnail/uploads/2017/12/14/5a32f92b45087.jpeg", credit:"https://www.eltiempo.com/"},
  {n:"Trucha y productos de la zona", d:"Algunos restaurantes locales cocinan con trucha del Neusa y verduras de Cogua.", img:"https://imag.bonviveur.com/trucha-a-la-plancha-casera.jpg", credit:"https://imag.bonviveur.com/trucha-a-la-plancha-casera.jpg"}
];
const SWEETS = [
  {n:"Caramelito rojo", feat:true, d:"El dulce emblemático de Zipaquirá: un caramelo estirado de color rosado o rojo brillante, hecho solo con agua, limón y azúcar. Según guías locales se elabora en el municipio desde el siglo XIX; llegó de España y las mujeres de la región lo aprendieron en la época colonial. Las «carameleras» lo vendían a los viajeros del tren, y Jorge Velosa le dedicó una canción. Hoy lo hacen muy pocas familias, por eso comprarlo apoya una tradición que corre riesgo de perderse. Pregunta por él en negocios típicos del centro histórico o en la Plaza de los Comuneros.", img:"https://zipaquiraturistica.com/dashboard-zipa-turis/storage/ciudades/3_2.webp", credit:"https://zipaquiraturistica.com/dashboard-zipa-turis/storage/ciudades/3_2.webp", author:"Zipaquirá Turística"},
  {n:"Obleas y amasijos", d:"Dulces y panes de horno que hacen parte de las tradiciones de la región.", img:"https://956fm.boyaca.gov.co/wp-content/uploads/2023/03/22bf8d2d-33a3-486b-9327-de1e3a566af2.jpg", credit:"https://956fm.boyaca.gov.co/"},
  {n:"Brevas, almíbares y tortas", d:"Postres tradicionales que se encuentran en pastelerías del centro.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7CygyxNIxckoZMGjDmXz_6YXxMD9IpFfov804S_lbMTSuf9icH9BL-wE&s=10"},
  {n:"Torta de queso y arroz con leche", d:"Dulces caseros con lácteos de la región.", img:"https://comerant.com/wp-content/uploads/2020/04/torta-de-queso.png", credit:"https://comerant.com/"}
];
const FOODPLACES = [
  {n:"La Puerta Falsa", d:"Restaurante tradicional de cocina santafereña, con sede en Zipaquirá en la Plaza de los Comuneros.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVbdd5fpXT4ZFWEbH7mnaxm761oV2ADBAfCBO82QYNllFT4WgLdXwwJs&s=10"},
  {n:"La Carreta", d:"Restaurante tradicional de Zipaquirá especializado en carnes y parrilla al carbón.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fgVAyAQM1E3IRuAdQV00YFAHrbsUFc0klhzCBhX-jEVe2el3e0EUO68&s=10"},
  {n:"Alma Café", d:"Cafetería de especialidad con café y repostería en un ambiente acogedor.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WlzlkDlpob5mg1HOkKvP0c0EyKh96k_kCj8YBLsitYstXVKf8OLGFm8&s=10"}
];

const ICONS = {
  walk:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  museum:'<path d="M3 21h18M5 18V10M9.5 18V10M14.5 18V10M19 18V10M12 3 3 8h18z"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  train:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/>',
  food:'<path d="M5 3v7a2 2 0 0 0 4 0V3M7 3v18M17 3c-2 2-3 4-3 8h6V3zM17 11v10"/>',
  mountain:'<path d="m3 20 6-11 4 6 3-4 5 9z"/>',
  church:'<path d="M12 2v5M9.5 4.5h5M6 22V11l6-4 6 4v11M10 22v-5h4v5"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6"/>',
  bike:'<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9l2 7"/>',
  family:'<circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="8" r="2"/><path d="M3 20v-4a5 5 0 0 1 10 0v4M14 20v-3a4 4 0 0 1 7 0v3"/>'
};
const ACT_CATS = ["Todas","Culturales","Históricas","Religiosas","Gastronómicas","Familiares","Recreativas","Naturaleza","Educativas"];
const ACTS = [
  {k:"Culturales", i:"museum", c:"#6f5bd6", n:"Visita a casas-museo", d:"Conoce la Casa Museo Quevedo Zornoza y su legado literario y musical. Es una ventana a la vida cultural de antes."},
  {k:"Culturales", i:"music", c:"#e8694f", n:"Cultura en vivo", d:"Consulta la programación de las casas de cultura y los festivales: música, danza y muestras abiertas."},
  {k:"Históricas", i:"walk", c:"#2a5bd7", n:"Ruta de las plazas históricas", d:"Une la Plaza de los Comuneros, el Parque de la Independencia y la Plaza de los Mártires para leer la historia del municipio."},
  {k:"Históricas", i:"book", c:"#1b2b4e", n:"Sobre la huella de los Comuneros", d:"Recorre los lugares ligados a las Capitulaciones de 1781 y descubre por qué la plaza lleva ese nombre."},
  {k:"Religiosas", i:"church", c:"#9a7117", n:"Patrimonio religioso", d:"Visita los templos del centro con calma y respeto, fuera de los horarios de culto, para apreciar su arquitectura."},
  {k:"Gastronómicas", i:"food", c:"#c9a45c", n:"Almuerzo tradicional", d:"Prueba la sobrebarriga con papas salmueras o el plato del minero en un restaurante local."},
  {k:"Gastronómicas", i:"food", c:"#e8694f", n:"Ruta del caramelito rojo y otros dulces", d:"Busca el caramelito rojo, el dulce emblemático de Zipaquirá, y completa con obleas, brevas, tortas y postres tradicionales."},
  {k:"Familiares", i:"family", c:"#1f9d9a", n:"Paseo por parques y plazas", d:"Un plan tranquilo y gratuito para ir con niños y mayores, con cafés y heladerías cerca."},
  {k:"Recreativas", i:"bike", c:"#2a5bd7", n:"Ciclovía dominical", d:"Pedalea, camina o patina por un recorrido que pasa por el centro histórico."},
  {k:"Recreativas", i:"train", c:"#1f9d9a", n:"Viaje en tren", d:"Haz del trayecto desde Bogotá parte del paseo (consulta días y tarifas con el operador)."},
  {k:"Naturaleza", i:"mountain", c:"#1b2b4e", n:"Escapada a Suesca", d:"Suma un día de paisaje, caminatas y aire libre en el municipio vecino."},
  {k:"Educativas", i:"museum", c:"#6f5bd6", n:"Ruta de museos para estudiantes", d:"Combina museos y plazas para aprender historia local en una jornada, ideal para grupos escolares."},
  {k:"Educativas", i:"book", c:"#9a7117", n:"Tras los pasos de García Márquez", d:"Visita el centro cultural que lleva su nombre y conoce la relación del escritor con el municipio."}
];

const EVENTS = [
  {t:"Recreación", n:"Ciclovía dominical", d:"Recorrido para pedalear, caminar o patinar con paradas en el centro histórico, cafés y restaurantes.", w:"Todos los domingos · consultar horario"},
  {t:"Cultura", n:"Festival Villa de la Sal", d:"Música, tradición y ambiente de fiesta en el municipio.", w:"Fecha por confirmar"},
  {t:"Cultura", n:"Aniversario de la ciudad", d:"Presentaciones artísticas, espectáculos folclóricos, juegos tradicionales y conciertos.", w:"Fecha por confirmar"},
  {t:"Cultura", n:"Programación de casas de cultura", d:"Muestras, presentaciones y actividades artísticas durante el año.", w:"Consultar programación oficial"},
  {t:"Cultura", n:"Ruta de los museos", d:"Itinerario cultural por los museos del municipio, con visitas y actividades de acuerdo con cada espacio.", w:"Consultar programación oficial"}
];

const PRICES = [
  {n:"Plaza de los Comuneros", p:"Libre", h:"Espacio público", i:"Punto de partida del recorrido.", free:true},
  {n:"Parque de la Independencia", p:"Libre", h:"Espacio público", i:"Cafés, restaurantes y bares alrededor.", free:true},
  {n:"Plaza de los Mártires", p:"Libre", h:"Espacio público", i:"Obelisco con los nombres de seis mártires.", free:true},
  {n:"Calles del centro histórico", p:"Libre", h:"Espacio público", i:"Recorrido peatonal.", free:true},
  {n:"Templos y patrimonio religioso", p:"Libre", h:"Según cada parroquia", i:"Respeta los horarios de culto.", free:true},
  {n:"Ciclovía dominical", p:"Libre", h:"Domingos · consultar horario actualizado", i:"Lleva agua y protección solar.", free:true},
  {n:"Casa Museo Quevedo Zornoza", p:TBC_P, h:TBC_H, i:"Confirma antes de ir."},
  {n:"Centro Cultural Casa del Nobel", p:TBC_P, h:TBC_H, i:"Pregunta por talleres y muestras."},
  {n:"Tren turístico de la Sabana", p:"Tarifa del operador", h:"Días y horarios del operador", i:"Según guías, fines de semana y festivos; confirmar."},
  {n:"Escapadas cercanas (Suesca)", p:TBC_P, h:TBC_H, i:"Depende del operador o sitio."},
  {n:"Festivales y eventos", p:"Según el evento", h:"Consultar programación oficial", i:"Muchos eventos públicos son gratuitos; confirmar."}
];

const HOTELS = [
  {n:"Hotel Camino de la Sal", t:"Hotel", d:"Hotel de Zipaquirá. Una reseña de El Tiempo destaca su desayuno buffet con platos locales como tamal de calabaza, buñuelos y caldo de costilla.", web:"https://hotelcaminodelasal.com/"},
  {n:"Hotel Cacique Real", t:"Hotel", d:"Hotel en Zipaquirá con sitio web propio. Consulta servicios, tarifas y disponibilidad.", web:"https://hotelcaciquereal.com/"}
];
const RESTS = [
  {n:"Labriego", t:"Cocina colombiana", d:"Ingredientes locales como trucha del Neusa; en una esquina de la Plaza de la Independencia."},
  {n:"La Gaceta Café Bar", t:"Café y coctelería", d:"En la Plaza de la Independencia, con cócteles inspirados en la cultura local."},
  {n:"La Puerta Falsa", t:"Cocina tradicional", d:"Sede en la Plaza de los Comuneros, con cocina tradicional santafereña."},
  {n:"La Carreta", t:"Parrilla", d:"Restaurante tradicional con carnes y preparaciones a la parrilla al carbón."},
  {n:"Alma Coffee & Bakery", t:"Cafetería", d:"Café de especialidad y repostería en un ambiente acogedor."},
  {n:"Pork", t:"Parrilla y cerveza artesanal", d:"Costillas, BBQ y cerveza artesanal en ambiente rockero."},
  {n:"Veró Comida Casual", t:"Comida casual", d:"A pocos minutos del centro histórico, con ambiente tranquilo."},
  {n:"Casa Trattoria", t:"Restaurante", d:"Restaurante recomendado para celebraciones."}
];

const TIPS = [
  {t:"Cómo llegar", l:["Zipaquirá está unos 25 km al norte de Bogotá.","En transporte público: TransMilenio hasta Portal Norte y allí buses hacia Zipaquirá.","En carro: Autopista Norte. En horas pico y festivos el tráfico puede ser lento."]},
  {t:"Opciones de transporte", l:["Bus intermunicipal desde Portal Norte (confirma frecuencias y tarifa).","Tren turístico de la Sabana, según guías en fines de semana y festivos; confirma con el operador.","Dentro del casco urbano: a pie o en taxi."]},
  {t:"Para recorrer el municipio", l:["El centro histórico se recorre caminando: Plaza de los Comuneros, Parque de la Independencia y Plaza de los Mártires.","Reserva medio día para museos y plazas, y otro para cocina y cafés.","Los domingos hay ciclovía."]},
  {t:"Antes del viaje", l:["Confirma precios y horarios en cada sitio.","Lleva ropa cómoda y abrigo ligero: la Sabana puede ser fresca.","Lleva efectivo y medios de pago; algunos negocios pequeños no aceptan tarjeta."]},
  {t:"Visita responsable", l:["Respeta los horarios de culto en templos.","No dejes basura y usa los puntos de reciclaje.","Pide permiso antes de fotografiar a las personas."]},
  {t:"Cuida el patrimonio y apoya lo local", l:["No toques ni escribas sobre fachadas ni monumentos.","Compra en tiendas, cafés y panaderías locales.","Contrata guías y servicios locales y comparte tu experiencia con respeto."]}
];

const ECO = [
  {t:"Cuida los espacios públicos", d:"Plazas y parques son de todos: déjalos mejor de como los encontraste."},
  {t:"Respeta el patrimonio", d:"Fachadas, monumentos y templos son memoria viva: observa sin dañar."},
  {t:"Reduce residuos", d:"Lleva tu botella reutilizable y bolsa propia; separa lo que puedas."},
  {t:"Apoya a los comerciantes locales", d:"Come, compra y duerme en negocios del municipio: el dinero se queda en la comunidad."},
  {t:"Respeta las tradiciones", d:"Pregunta antes de participar o fotografiar celebraciones y rituales."},
  {t:"Viaja de forma sostenible", d:"Prefiere caminar, el transporte público o compartido y reparte tus visitas por distintos lugares."}
];

/* ============ RENDER ============ */
const $ = (s,r=document)=>r.querySelector(s);
function el(tag, attrs={}, kids=[]){
  const e = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs)){
    if(k==="class") e.className=v; else if(k==="html") e.innerHTML=v; else if(k==="text") e.textContent=v; else e.setAttribute(k,v);
  }
  [].concat(kids).forEach(c=>e.append(c));
  return e;
}
/* Foto real si existe; si no, ilustración */
function pic(box, img, alt, sceneType, cb){
  box.innerHTML = "";
  if(!img){ box.innerHTML = scene(sceneType); return; }
  const im = new Image();
  im.alt = alt; im.loading = "lazy"; im.decoding = "async";
  im.style.width = "100%"; im.style.height = "100%"; im.style.objectFit = "cover"; im.style.display = "block";
  im.onload = ()=>{ if(cb) cb(); };
  im.onerror = ()=>{ box.innerHTML = scene(sceneType); if(cb) cb(); };
  box.append(im);
  im.src = img;
}


// Menú móvil
const menuBtn=$("#menuBtn"), nav=$("#nav");
menuBtn.addEventListener("click",()=>{ const o=nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded",o); });
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{ nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); }));
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); } });

// Créditos
(function(){ const ul=$("#credits"); const seen=new Set();
  [...PLACES.map(p=>[p.n,p.credit]),...FOOD.map(f=>[f.n,f.credit])].forEach(([n,c])=>{ if(c&&!seen.has(c)){ seen.add(c); ul.append(el("li",{html:`${n}: <a href="${c}" target="_blank" rel="noopener">página del archivo (autor y licencia)</a>`})); } });
})();

// Submenú de la página: marca la sección visible
(function(){
  const links=[...document.querySelectorAll(".subnav a")]; if(!links.length||!("IntersectionObserver" in window)) return;
  const map=new Map(links.map(a=>[a.getAttribute("href").slice(1),a]));
  const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ links.forEach(a=>a.classList.remove("on")); const a=map.get(e.target.id); if(a){ a.classList.add("on"); a.scrollIntoView({block:"nearest",inline:"nearest"}); } } }); },{rootMargin:"-30% 0px -60% 0px"});
  map.forEach((a,id)=>{ const s=document.getElementById(id); if(s) io.observe(s); });
})();
