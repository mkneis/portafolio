import fs from 'node:fs/promises';
import vm from 'node:vm';
import {personalize} from './profile.mjs';
const root = new URL('../', import.meta.url);
const read = p => fs.readFile(new URL(p, root), 'utf8');
const write = (p, data) => fs.writeFile(new URL(p, root), data);
await fs.mkdir(new URL('dist/assets/', root), {recursive:true});
let html = await read('referencias-stitch/presentaci_n_cv/code.html');
html = html.replaceAll('Mateo Valls', 'Mathias Kneis')
  .replace('          M\n', '          MK\n')
  .replace('alt="Mathias Kneis Profile"', 'alt="Fotografía de muestra de Stitch"')
  .replace('alt="Portrait of Mathias Kneis"', 'alt="Retrato de muestra de Stitch"');
const config = html.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/)[1];
const context = {tailwind:{}};
vm.runInNewContext(config, context);
await write('tailwind.config.cjs', 'module.exports = '+JSON.stringify({...context.tailwind.config, content:['./dist/*.html']},null,2));
html = html.replace(/<script[\s\S]*?<\/script>/g,'');
html = html.replace('</head>', '<meta name="description" content="Portafolio personal: presentación, experiencia y competencias. Proyectos y diario técnico próximamente.">\n<link rel="stylesheet" href="./assets/styles.css"><link rel="stylesheet" href="./assets/adjustments.css"></head>');
const nav = active => `<nav class="site-nav" aria-label="Navegación principal">${[['index.html','Presentación & CV'],['proyectos.html','Proyectos'],['blog.html','Diario / Blog'],['index.html#contacto','Contacto']].map(([href,label],i)=>`<a href="./${href}" ${i===active?'aria-current="page"':''}>${label}</a>`).join('')}</nav>`;
html = html.replace(/<nav[\s\S]*?<\/nav>/,nav(0));
html = html.replace('href="#"','href="./index.html" aria-label="Inicio"');
html = html.replaceAll('href="#proyectos-destacados"','href="./proyectos.html"');
html = html.replace('href="#cv-download"', 'href="#cv-pendiente" aria-describedby="cv-pendiente"');
html = html.replace('Descargar CV (PDF)','CV · próximamente');
html = html.replace('<!-- METRIC STATS BAR', '<p class="demo-notice" id="cv-pendiente">Fotografía, trayectoria y enlaces de muestra de Stitch pendientes de personalizar. El CV todavía no está disponible.</p>\n<!-- METRIC STATS BAR');
const emptyCard = (title,href,desc) => `<a class="empty-card" href="./${href}"><span class="eyebrow">Próximamente</span><h3>${title} <span aria-hidden="true">↗</span></h3><p>${desc}</p><span class="empty-count">0 publicaciones</span></a>`;
const start = html.indexOf('<!-- 5. ACCESO RÁPIDO');
const end = html.indexOf('<!-- 6. CONTACT CTA',start);
html = html.slice(0,start)+`<section aria-labelledby="explorar"><span class="eyebrow">Exploración transversal</span><h2 class="text-3xl font-bold mt-1 mb-6" id="explorar">Proyectos & Diario</h2><div class="empty-grid">${emptyCard('Proyectos seleccionados','proyectos.html','Este espacio todavía no tiene proyectos.')}${emptyCard('Diario técnico','blog.html','Este espacio todavía no tiene artículos.')}</div></section>`+html.slice(end);
html = html.replace('© 2025','© 2026');
html = html.replaceAll('Diseñado con precisión e intención en Cupertino &amp; Zurich', 'Diseñado y desarrollado por Mathias Kneis');
// Store the supplied portrait locally so the site does not hotlink it.
const portrait = html.match(/<img[^>]+src="([^"]+)"/)[1];
try {
  const response = await fetch(portrait);
  if (!response.ok) throw new Error(`Retrato: HTTP ${response.status}`);
  await write('dist/assets/portrait.jpg', Buffer.from(await response.arrayBuffer()));
  html = html.replaceAll(portrait,'./assets/portrait.jpg');
} catch (error) {
  console.warn(error.message);
  await write('dist/assets/portrait.svg','<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#242426"/><text x="300" y="330" fill="#ccc" text-anchor="middle" font-family="sans-serif" font-size="100">MK</text></svg>');
  html = html.replaceAll(portrait,'./assets/portrait.svg');
}
// Keep demonstration contact data from sending visitors to an unverified address.
html = html.replaceAll('href="mailto:contact@mateovalls.com"','href="#contacto"');
html = html.replace('Iniciar Conversación','Contacto · próximamente');
html = html.replace('Abierto a colaboraciones estratégicas, roles de liderazgo técnico y asesoría de producto.','Los datos de contacto se añadirán próximamente.');
html = html.replace(/<a([^>]+)href="https:\/\/(?:github.com|linkedin.com|x.com|read.cv)"([^>]*)>/g,'<a$1href="#contacto"$2>');
html = html.replace('<main ', '<a class="skip-link" href="#contenido">Saltar al contenido</a><main id="contenido" ');
html = personalize(html);
await write('dist/index.html',html);
for (const [file,title,description,active] of [
  ['proyectos.html','Proyectos seleccionados','Aquí aparecerán los proyectos y casos de estudio. Todavía no hay proyectos publicados.',1],
  ['blog.html','Diario técnico','Un espacio para compartir ideas y aprendizajes. Todavía no hay artículos publicados.',2]
]) {
  let page = html.replace(nav(0),nav(active));
  page = page.replaceAll('href="#contacto"','href="./index.html#contacto"');
  page = page.replace(/<title>[\s\S]*?<\/title>/,`<title>${title} — Portafolio</title>`);
  page = page.replace(/<main[\s\S]*?<\/main>/,`<main id="contenido" class="empty-page"><span class="eyebrow">${active===1?'Trabajo & exploración':'Ideas & aprendizaje'}</span><h1>${title}</h1><p class="intro">${active===1?'Una selección de soluciones, procesos y detalles.':'Notas sobre tecnología, diseño y el proceso de construir.'}</p><section class="empty-state" aria-label="Sin publicaciones"><span class="empty-symbol" aria-hidden="true">${active===1?'⌘':'≡'}</span><h2>${active===1?'Sin proyectos por ahora':'Sin artículos por ahora'}</h2><p>${description}</p><a class="back-link" href="./index.html">← Volver a presentación</a></section></main>`);
  await write('dist/'+file,page);
}
await write('dist/.nojekyll','');
console.log('Preparadas 3 páginas estáticas en dist/.');
