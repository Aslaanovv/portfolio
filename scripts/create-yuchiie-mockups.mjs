// Presentation mockups composed from the original theme assets, not live screenshots.
import sharp from 'sharp';
const dir = 'public/projects/yuchiie/';
const svg = (w,h,body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${body}</svg>`);
const text = (x,y,value,size=13,fill='#222') => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" fill="${fill}">${value}</text>`;
async function home(w,h,mobile=false) {
  const header = mobile ? 60 : 76;
  const hero = await sharp(dir+(mobile?'campaign-01-mobile.webp':'campaign-01.webp')).resize(w,h-header,{fit:mobile?'cover':'contain',background:'#ddd6c8'}).toBuffer();
  const logo = await sharp(dir+'logo-yuchiie.webp').resize(mobile?112:174).toBuffer();
  return sharp({create:{width:w,height:h,channels:3,background:'#faf9f6'}}).composite([
    {input:hero,left:0,top:header},
    {input:logo,left:Math.round((w-(mobile?112:174))/2),top:22},
    {input:svg(w,h,text(22,37,mobile?'☰':'Shop    Our world    Journal',mobile?16:13)+text(w-(mobile?65:170),37,mobile?'Bag (0)':'Search    Wishlist    Bag (0)')+`<rect x="${w/2-64}" y="${h-62}" width="128" height="34" fill="#faf9f6"/>`+text(w/2-36,h-40,'All products',12)),left:0,top:0}
  ]).webp({quality:86}).toBuffer();
}
const desktop=await home(1200,800);
await sharp(desktop).toFile(dir+'desktop-mockup.webp');
const mobile=await home(390,780,true);
await sharp(mobile).toFile(dir+'mobile-mockup.webp');
const products=[];
for(let i=1;i<=4;i++) products.push({input:await sharp(dir+`product-0${i}.webp`).resize(270,360,{fit:'cover'}).toBuffer(),left:30+(i-1)*290,top:150});
await sharp({create:{width:1200,height:600,channels:3,background:'#faf9f6'}}).composite([
 {input:svg(1200,600,text(30,44,'Shop / All pieces',13)+text(30,112,'All pieces',32)+text(880,112,'Filter +                     Sort by',13)+[0,1,2,3].map(i=>text(30+i*290,542,'YUCHIIE / Selected piece',12)+text(30+i*290,569,'XS    S    M    L',11,'#666')).join('')),top:0,left:0},...products
]).webp({quality:86}).toFile(dir+'collection-mockup.webp');
await sharp({create:{width:1600,height:1000,channels:3,background:'#e8e3dc'}}).composite([
 {input:svg(1600,1000, text(80,95,'YUCHIIE',32)+text(80,130,'CUSTOM SHOPIFY THEME / EDITORIAL COMMERCE',13,'#57534e')+`<rect x="76" y="197" width="1260" height="716" rx="16" fill="#c9c1b6"/><rect x="70" y="185" width="1260" height="716" rx="16" fill="#fff"/>`),left:0,top:0},
 {input:await sharp(desktop).resize(1236,680,{fit:'contain',background:'#faf9f6'}).toBuffer(),left:82,top:197},
 {input:svg(300,630,'<rect width="300" height="630" rx="36" fill="#242321"/>'),left:1240,top:292},
 {input:await sharp(mobile).resize(276,552).toBuffer(),left:1252,top:325}
]).webp({quality:86}).toFile(dir+'thumbnail.webp');
