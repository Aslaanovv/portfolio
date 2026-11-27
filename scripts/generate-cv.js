/**
 * Generates the public CV PDF at public/muhammad-aslaan-cv.pdf
 *
 * Run with: npm run generate:cv
 * Content is kept in sync with the portfolio (credentials, case studies, contact).
 */
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PAGE = { width: 595.28, height: 841.89 };
const MARGIN = 50;
const CONTENT_WIDTH = PAGE.width - MARGIN * 2;

const COLOR = {
  ink: rgb(0.07, 0.07, 0.08),
  body: rgb(0.24, 0.24, 0.26),
  muted: rgb(0.45, 0.45, 0.48),
  accent: rgb(1, 0.235, 0),
  rule: rgb(0.85, 0.85, 0.86),
};

const CV = {
  name: 'Muhammad Aslaan',
  role: 'Product Designer & Frontend Engineer',
  contact: [
    'Giza, Egypt',
    'mohamedaslaangit@gmail.com',
    'linkedin.com/in/muhammad-aslaan-a00015333',
    'github.com/Aslaanovv',
    'aslaansportfolio.vercel.app',
  ],
  profile:
    'Product designer and frontend engineer with 7+ years across business development, product design and shipped code. I take products from strategy and UX research through high-fidelity design to production React and TypeScript, with a focus on bilingual, commerce and service platforms.',
  experience: [
    {
      company: 'Al Waha / Shourbagy Oasis',
      dates: 'Nov 2024 – Present',
      title: 'Senior Sales',
      summary:
        'Sales role extended into website improvements, marketing strategy, content and digital communication.',
    },
    {
      company: 'Abdo El Amir Auto Protection',
      dates: 'Apr 2024 – Nov 2024',
      title: 'Senior Sales & Graphic Designer',
      summary:
        'Combined sales with graphic design, connecting business objectives to visual communication and campaigns.',
    },
    {
      company: 'Carprogini Auto Protection',
      dates: 'Early 2024',
      title: 'Senior Direct Sales',
      summary:
        'Customer-facing sales while contributing to marketing, branding and digital initiatives.',
    },
    {
      company: 'Rabtek Integrated Solutions',
      dates: '2022 – Mar 2024',
      title: 'Technical Sales, Web Developer & Odoo Implementor',
      summary:
        'Delivered corporate websites, Odoo ERP implementations and digital transformation projects.',
    },
    {
      company: '4 Gates Real Estate',
      dates: '2021 – 2022',
      title: 'Senior Sales',
      summary: 'Designed and developed the company website alongside client-facing sales.',
    },
    {
      company: 'QUE Real Estate',
      dates: '2019 – 2021',
      title: 'Team Leader',
      summary: 'Led a sales team and aligned it around shared targets and negotiation outcomes.',
    },
    {
      company: 'El Tayeb Real Estate',
      dates: '2018 – 2019',
      title: 'Sales Executive',
      summary: 'Built the foundation of understanding how customers evaluate value and decide.',
    },
  ],
  work: [
    {
      name: 'Yuchiie',
      summary: 'Editorial Shopify theme and storefront for a fashion label — yuchiie.myshopify.com',
    },
    {
      name: 'Zero Guilt Protein Bars',
      summary: 'Full store launch for a US brand: strategy, Shopify build and copy — zeroguiltus.com',
    },
    {
      name: 'Ehtwaa Mental Health',
      summary: 'Bilingual (AR/EN) therapy platform with RTL support and booking — ehtwaa-mentalhealth.vercel.app',
    },
    {
      name: 'Malmoum V1',
      summary: 'Home-services product concept taken from research to a frontend MVP.',
    },
    {
      name: 'La Camille',
      summary: 'Fashion commerce storefront built on Shopify — lacamille.myshopify.com',
    },
    {
      name: 'Rabtek',
      summary: 'Corporate website plus Odoo ERP implementation — rabtek.net',
    },
  ],
  skills: [
    {
      label: 'Product & UX',
      text: 'research, information architecture, wireframes, prototyping, design systems, usability testing',
    },
    {
      label: 'Frontend',
      text: 'React, TypeScript, Tailwind CSS, Vite, HTML/CSS, responsive and accessible UI',
    },
    { label: 'Commerce & Platforms', text: 'Shopify, Liquid, Odoo ERP, SEO, analytics' },
    { label: 'Design & Brand', text: 'Figma, Framer, brand identity, art direction, copywriting' },
  ],
  education: [
    {
      title: 'Multi-media Programming & Graphic Design',
      school: 'International Academy for Engineering & Media Science (IAEMS)',
    },
    { title: 'High School', school: 'Nile Garden Language School' },
  ],
  languages: 'Arabic — native   ·   English — professional',
};

const doc = await PDFDocument.create();
const regular = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);

doc.setTitle(`${CV.name} — CV`);
doc.setAuthor(CV.name);
doc.setSubject('Product Designer & Frontend Engineer — Curriculum Vitae');
doc.setKeywords(['Product Design', 'UX/UI', 'Frontend', 'React', 'TypeScript', 'Shopify']);
doc.setCreator('aslaansportfolio.vercel.app');

const state = { page: null, y: 0, pageNumber: 0 };

function newPage() {
  state.page = doc.addPage([PAGE.width, PAGE.height]);
  state.pageNumber += 1;
  state.y = PAGE.height - MARGIN;
}

function wrap(text, font, size, maxWidth) {
  const lines = [];
  let current = '';
  for (const word of text.split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (current && font.widthOfTextAtSize(candidate, size) > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function draw(text, { x = MARGIN, size = 10, font = regular, color = COLOR.body } = {}) {
  state.page.drawText(text, { x, y: state.y, size, font, color });
}

function line(text, { size = 10, font = regular, color = COLOR.body, x = MARGIN, gap = 3 } = {}) {
  draw(text, { x, size, font, color });
  state.y -= size * 1.22 + gap;
}

function paragraph(text, { size = 9.5, font = regular, color = COLOR.body, x = MARGIN, maxWidth, gap = 3 } = {}) {
  const width = maxWidth ?? CONTENT_WIDTH - (x - MARGIN);
  for (const l of wrap(text, font, size, width)) {
    draw(l, { x, size, font, color });
    state.y -= size * 1.32;
  }
  state.y -= gap;
}

function section(title) {
  state.y -= 10;
  state.page.drawText(title.toUpperCase(), {
    x: MARGIN,
    y: state.y,
    size: 8.5,
    font: bold,
    color: COLOR.accent,
  });
  state.page.drawLine({
    start: { x: MARGIN, y: state.y - 5.5 },
    end: { x: MARGIN + CONTENT_WIDTH, y: state.y - 5.5 },
    thickness: 0.7,
    color: COLOR.rule,
  });
  state.y -= 14;
}

newPage();

// ---------- Header ----------
state.y = PAGE.height - MARGIN - 20;
line(CV.name, { size: 27, font: bold, color: COLOR.ink, gap: 2 });
line(CV.role.toUpperCase(), { size: 9.5, font: bold, color: COLOR.accent, gap: 6 });
paragraph(CV.contact.join('   ·   '), { size: 8.5, color: COLOR.muted, gap: 4 });

state.page.drawLine({
  start: { x: MARGIN, y: state.y + 2 },
  end: { x: MARGIN + CONTENT_WIDTH, y: state.y + 2 },
  thickness: 1.2,
  color: COLOR.ink,
});

// ---------- Profile ----------
section('Profile');
paragraph(CV.profile, { size: 9.5, color: COLOR.body });

// ---------- Experience ----------
section('Experience');
for (const job of CV.experience) {
  const datesWidth = regular.widthOfTextAtSize(job.dates, 8.5);
  const companyWidth = bold.widthOfTextAtSize(job.company, 9.5);
  const titleWidth = bold.widthOfTextAtSize(job.title, 8.5);
  const separator = '  —  ';
  const sepWidth = regular.widthOfTextAtSize(separator, 8.5);
  const available = CONTENT_WIDTH - datesWidth - 12;

  draw(job.company, { size: 9.5, font: bold, color: COLOR.ink });

  if (companyWidth + sepWidth + titleWidth <= available) {
    state.page.drawText(separator, {
      x: MARGIN + companyWidth,
      y: state.y,
      size: 8.5,
      font: regular,
      color: COLOR.muted,
    });
    draw(job.title, {
      x: MARGIN + companyWidth + sepWidth,
      size: 8.5,
      font: bold,
      color: COLOR.accent,
    });
  } else {
    // Long job titles drop to their own line.
    state.y -= 11.5;
    draw(job.title, { size: 8.5, font: bold, color: COLOR.accent });
  }

  draw(job.dates, { x: MARGIN + CONTENT_WIDTH - datesWidth, size: 8.5, color: COLOR.muted });
  state.y -= 11.6;
  paragraph(job.summary, { size: 8.8, color: COLOR.body, gap: 0 });
  state.y -= 2.5;
}

// ---------- Selected work ----------
section('Selected Work');
for (const project of CV.work) {
  const nameWidth = bold.widthOfTextAtSize(project.name, 9.5);
  draw(project.name, { size: 9.5, font: bold, color: COLOR.ink });
  const summaryWidth = CONTENT_WIDTH - nameWidth - 10;
  const lines = wrap(project.summary, regular, 9, summaryWidth);
  state.page.drawText(lines[0], {
    x: MARGIN + nameWidth + 8,
    y: state.y,
    size: 9,
    font: regular,
    color: COLOR.body,
  });
  state.y -= 12.6;
  for (const extra of lines.slice(1)) {
    draw(extra, { x: MARGIN + nameWidth + 8, size: 9, color: COLOR.body });
    state.y -= 12;
  }
  state.y -= 3;
}

// ---------- Skills ----------
section('Skills');
for (const skill of CV.skills) {
  const labelWidth = bold.widthOfTextAtSize(skill.label, 9);
  draw(`${skill.label}:`, { size: 9, font: bold, color: COLOR.ink });
  const lines = wrap(skill.text, regular, 9, CONTENT_WIDTH - labelWidth - 8);
  state.page.drawText(lines[0], {
    x: MARGIN + labelWidth + 6,
    y: state.y,
    size: 9,
    font: regular,
    color: COLOR.body,
  });
  state.y -= 12.4;
  for (const extra of lines.slice(1)) {
    draw(extra, { x: MARGIN + labelWidth + 6, size: 9, color: COLOR.body });
    state.y -= 12;
  }
  state.y -= 2;
}

// ---------- Education ----------
section('Education');
for (const item of CV.education) {
  line(item.title, { size: 9.5, font: bold, color: COLOR.ink, gap: 0.5 });
  line(item.school, { size: 9, color: COLOR.body, gap: 3.5 });
}

// ---------- Languages ----------
section('Languages');
paragraph(CV.languages, { size: 9, color: COLOR.body });

// ---------- Footer ----------
state.page.drawLine({
  start: { x: MARGIN, y: MARGIN + 16 },
  end: { x: MARGIN + CONTENT_WIDTH, y: MARGIN + 16 },
  thickness: 0.7,
  color: COLOR.rule,
});
state.page.drawText('aslaansportfolio.vercel.app   ·   mohamedaslaangit@gmail.com   ·   linkedin.com/in/muhammad-aslaan-a00015333', {
  x: MARGIN,
  y: MARGIN,
  size: 7.8,
  font: regular,
  color: COLOR.muted,
});

if (state.y < MARGIN + 30) {
  console.warn(`Warning: content ends at y=${state.y.toFixed(1)}, close to the footer.`);
}

const bytes = await doc.save();
const outDir = path.join(process.cwd(), 'public');
await mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, 'muhammad-aslaan-cv.pdf');
await writeFile(outPath, bytes);

console.log(`CV written to ${path.relative(process.cwd(), outPath)} (${(bytes.length / 1024).toFixed(1)} KB, ${doc.getPageCount()} page)`);
