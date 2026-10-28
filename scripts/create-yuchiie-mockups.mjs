// Screenshot-based device mockup plus a separately labeled illustrative collection study.
import sharp from 'sharp';
const dir = 'public/projects/yuchiie/';
const svg = (w,h,body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${body}</svg>`);
const text = (x,y,value,size=13,fill='#222') => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" fill="${fill}">${value}</text>`;
const products=[];
for(let i=1;i<=4;i++) products.push({input:await sharp(dir+`product-0${i}.webp`).resize(270,360,{fit:'cover'}).toBuffer(),left:30+(i-1)*290,top:150});
await sharp({create:{width:1200,height:600,channels:3,background:'#faf9f6'}}).composite([
 {input:svg(1200,600,text(30,44,'Shop / All pieces',13)+text(30,112,'All pieces',32)+text(880,112,'Filter +                     Sort by',13)+[0,1,2,3].map(i=>text(30+i*290,542,'YUCHIIE / Selected piece',12)+text(30+i*290,569,'XS    S    M    L',11,'#666')).join('')),top:0,left:0},...products
]).webp({quality:86}).toFile(dir+'collection-mockup.webp');
// Actual user-supplied screenshots remain uncropped and unaltered inside device frames.
const desktop = await sharp(dir+'desktop-screenshot.webp').resize(1240).toBuffer();
const mobile = await sharp(dir+'mobile-screenshot.webp').resize(270).toBuffer();
const dm = await sharp(desktop).metadata();
const mm = await sharp(mobile).metadata();
await sharp({create:{width:1600,height:1000,channels:3,background:'#e8e3dc'}}).composite([
 {input:svg(1600,1000,
   text(80,100,'YUCHIIE',32)+text(80,135,'CUSTOM SHOPIFY / DESKTOP + MOBILE',13,'#57534e')+
   '<ellipse cx="760" cy="895" rx="660" ry="35" fill="#d1c8bd"/>'+
   `<rect x="70" y="245" width="1264" height="${dm.height+42}" rx="20" fill="#242321"/>`+
   '<path d="M42 868 H1362 L1328 888 H76 Z" fill="#a49d94"/>'+
   '<path d="M590 868 H815 L800 875 H605 Z" fill="#77726b"/>'),left:0,top:0},
 {input:desktop,left:82,top:271},
 {input:svg(300,mm.height+52,`<rect width="300" height="${mm.height+52}" rx="32" fill="#191918" stroke="#68625b" stroke-width="2"/>`),left:1220,top:370},
 {input:mobile,left:1235,top:396},
 {input:svg(300,mm.height+52,'<rect x="114" y="10" width="72" height="4" rx="2" fill="#66615b"/>'),left:1220,top:370},
]).webp({quality:90}).toFile(dir+'screenshot-mockup.webp');
