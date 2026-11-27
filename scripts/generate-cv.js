/**
 * Generates the public CV PDF at public/muhammad-aslaan-cv.pdf
 *
 * Run with: npm run generate:cv
 *
 * Every section below mirrors the live portfolio (src/data/site.ts,
 * src/data/works.ts, the Service and Credentials pages) so the CV, the
 * website and the LinkedIn profile tell the same story in the same order.
 */
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Shared with the website: src/data/career.json feeds both the Credentials
// page and this CV, so the two (and LinkedIn) stay identical.
const career = JSON.parse(readFileSync(new URL('../src/data/career.json', import.meta.url), 'utf8'));

const PAGE = { width: 595.28, height: 841.89 };
const MARGIN = 50;
const CONTENT_WIDTH = PAGE.width - MARGIN * 2;
const BOTTOM_LIMIT = MARGIN + 42;

const COLOR = {
  ink: rgb(0.07, 0.07, 0.08),
  body: rgb(0.24, 0.24, 0.26),
  muted: rgb(0.45, 0.45, 0.48),
  accent: rgb(1, 0.5, 0), // hsl(30 100% 50%) — the site's primary orange
  rule: rgb(0.85, 0.85, 0.86),
};

const CV = {
  name: 'Muhammad Aslaan',
  role: career.headline,
  tagline: 'Turning complex ideas into products people use.',
  contact: [
    'Giza, Egypt',
    '+20 111 666 5513',
    'mohamedaslaangit@gmail.com',
    'linkedin.com/in/muhammad-aslaan-a00015333',
    'github.com/Aslaanovv',
  ],
  website: 'aslaansportfolio.vercel.app',
  profile: career.profile,
  services: [
    {
      name: 'Product Design',
      text: 'UX research, wireframes, high-fidelity prototypes and design systems.',
    },
    {
      name: 'Web Development',
      text: 'React, TypeScript, Tailwind and Shopify — responsive, accessible front ends.',
    },
    {
      name: 'Branding',
      text: 'Identity systems, art direction and guidelines across every touchpoint.',
    },
    {
      name: 'Odoo ERP',
      text: 'Needs assessment, module configuration and staff training.',
    },
  ],
  experience: career.chapters
    .flatMap((chapter) => chapter.roles)
    .map((role) => ({
      company: role.company,
      dates: role.period,
      title: role.title,
      summary: role.summary,
    })),
  work: [
    {
      name: 'Yuchiie',
      summary: 'editorial Shopify theme and storefront for a fashion label (yuchiie.myshopify.com)',
    },
    {
      name: 'Zero Guilt Protein Bars',
      summary: 'full store launch for a US protein-bar brand — strategy, Shopify build and copy (zeroguiltus.com)',
    },
    {
      name: 'Ehtwaa Mental Health',
      summary: 'bilingual Arabic/English therapy platform with RTL support and booking (ehtwaa-mentalhealth.vercel.app)',
    },
    {
      name: 'Malmoum V1',
      summary: 'home-services product concept taken from research to a frontend MVP',
    },
    {
      name: 'La Camille',
      summary: 'premium fashion commerce experience pairing Shopify with bespoke design (lacamille.myshopify.com)',
    },
    {
      name: 'Rabtek',
      summary: 'corporate website plus an Odoo ERP implementation (rabtek.net)',
    },
  ],
  whatIBring: [
    {
      name: 'Business Thinking',
      text: 'Stakeholder priorities and resource constraints, not just screens.',
    },
    {
      name: 'Product Design',
      text: 'Systems that reduce friction and stay consistent as features grow.',
    },
    {
      name: 'Frontend Engineering',
      text: 'I build what I design in React and TypeScript — no handoff gap.',
    },
    {
      name: 'Collaboration',
      text: 'Translating between technical, design and business perspectives.',
    },
  ],
  toolkit: [
    { label: 'Design', text: 'Figma, FigJam, Framer' },
    { label: 'Frontend', text: 'React, TypeScript, Tailwind CSS, Vite, Next.js' },
    { label: 'Commerce', text: 'Shopify (Liquid), Odoo ERP, SEO, Analytics' },
    { label: 'Workflow', text: 'Git, Notion, Claude, GitHub Copilot' },
  ],
  education: career.education.map((item) => ({ title: item.title, school: item.school })),
  languages: career.languages,
};

const doc = await PDFDocument.create();
const regular = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);

doc.setTitle(`${CV.name} — CV`);
doc.setAuthor(CV.name);
doc.setSubject('Product Designer & Frontend Engineer — Curriculum Vitae');
doc.setKeywords(['Product Design', 'UX/UI', 'Frontend', 'React', 'TypeScript', 'Shopify', 'Odoo']);
doc.setCreator(CV.website);

const state = { page: null, y: 0 };

function addPage({ continuation = false } = {}) {
  state.page = doc.addPage([PAGE.width, PAGE.height]);
  state.y = PAGE.height - MARGIN;

  if (continuation) {
    state.page.drawText(`${CV.name}  —  ${CV.role}`, {
      x: MARGIN,
      y: state.y - 6,
      size: 7.5,
      font: regular,
      color: COLOR.muted,
    });
    state.page.drawLine({
      start: { x: MARGIN, y: state.y - 14 },
      end: { x: MARGIN + CONTENT_WIDTH, y: state.y - 14 },
      thickness: 0.7,
      color: COLOR.rule,
    });
    state.y -= 32;
  }
}

function ensureSpace(height) {
  if (state.y - height < BOTTOM_LIMIT) addPage({ continuation: true });
}

function pageBreak() {
  addPage({ continuation: true });
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

function paragraph(text, { size = 9.5, font = regular, color = COLOR.body, x = MARGIN, maxWidth, gap = 3, lead = 1.32 } = {}) {
  const width = maxWidth ?? CONTENT_WIDTH - (x - MARGIN);
  const lines = wrap(text, font, size, width);
  for (const l of lines) {
    draw(l, { x, size, font, color });
    state.y -= size * lead;
  }
  state.y -= gap;
}

function section(title) {
  ensureSpace(60);
  state.y -= 8;
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
  state.y -= 11;
}

/** Bold label followed by wrapped body text on the same baseline. */
function labelled(label, text, { labelSize = 9, textSize = 9, gap = 2.5, x = MARGIN } = {}) {
  const labelWidth = bold.widthOfTextAtSize(`${label}:`, labelSize);
  const lines = wrap(text, regular, textSize, CONTENT_WIDTH - (x - MARGIN) - labelWidth - 6);
  const needed = lines.length * textSize * 1.35;
  ensureSpace(needed + 4);

  draw(`${label}:`, { x, size: labelSize, font: bold, color: COLOR.ink });
  state.page.drawText(lines[0], {
    x: x + labelWidth + 6,
    y: state.y,
    size: textSize,
    font: regular,
    color: COLOR.body,
  });
  state.y -= textSize * 1.35;
  for (const extra of lines.slice(1)) {
    draw(extra, { x: x + labelWidth + 6, size: textSize, color: COLOR.body });
    state.y -= textSize * 1.3;
  }
  state.y -= gap;
}

// ---------------------------------------------------------------- header
addPage();
state.y = PAGE.height - MARGIN - 14;
line(CV.name, { size: 26, font: bold, color: COLOR.ink, gap: 1 });
line(CV.role.toUpperCase(), { size: 9.5, font: bold, color: COLOR.accent, gap: 2.5 });
line(CV.tagline, { size: 9.5, font: regular, color: COLOR.muted, gap: 7 });
paragraph(CV.contact.join('   ·   '), { size: 8.5, color: COLOR.muted, gap: 5 });

state.page.drawLine({
  start: { x: MARGIN, y: state.y + 2 },
  end: { x: MARGIN + CONTENT_WIDTH, y: state.y + 2 },
  thickness: 1.2,
  color: COLOR.ink,
});

// ---------------------------------------------------------------- profile
section('Profile');
paragraph(CV.profile, { size: 9.5 });

// ---------------------------------------------------------------- experience
section('Experience');
for (const job of CV.experience) {
  ensureSpace(34);
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
    draw(job.title, { x: MARGIN + companyWidth + sepWidth, size: 8.5, font: bold, color: COLOR.accent });
  } else {
    state.y -= 11.5;
    draw(job.title, { size: 8.5, font: bold, color: COLOR.accent });
  }

  draw(job.dates, { x: MARGIN + CONTENT_WIDTH - datesWidth, size: 8.5, color: COLOR.muted });
  state.y -= 11.2;
  paragraph(job.summary, { size: 8.8, color: COLOR.body, gap: 0 });
  state.y -= 1.5;
}

// ---------------------------------------------------------------- work
section('Selected Work');
for (const project of CV.work) {
  ensureSpace(28);
  const nameWidth = bold.widthOfTextAtSize(project.name, 9.5);
  const indent = nameWidth + 8;
  draw(project.name, { size: 9.5, font: bold, color: COLOR.ink });
  const lines = wrap(project.summary, regular, 9, CONTENT_WIDTH - indent);
  state.page.drawText(lines[0], {
    x: MARGIN + indent,
    y: state.y,
    size: 9,
    font: regular,
    color: COLOR.body,
  });
  state.y -= 12.2;
  for (const extra of lines.slice(1)) {
    draw(extra, { x: MARGIN + indent, size: 9, color: COLOR.body });
    state.y -= 12;
  }
  state.y -= 1;
}

// ---------------------------------------------------------------- toolkit
section('Tool Stack');
for (const group of CV.toolkit) {
  labelled(group.label, group.text, { labelSize: 9, textSize: 9, gap: 1 });
}

// ---------------------------------------------------------------- education
section('Education');
for (const item of CV.education) {
  ensureSpace(22);
  const titleWidth = bold.widthOfTextAtSize(item.title, 9.5);
  draw(item.title, { size: 9.5, font: bold, color: COLOR.ink });
  state.page.drawText(item.school, {
    x: MARGIN + titleWidth + 8,
    y: state.y,
    size: 9,
    font: regular,
    color: COLOR.body,
  });
  state.y -= 12;
}
labelled('Languages', CV.languages, { labelSize: 9, textSize: 9, gap: 0 });

// ---------------------------------------------------------------- footers
const pages = doc.getPages();
pages.forEach((page, index) => {
  page.drawLine({
    start: { x: MARGIN, y: MARGIN + 16 },
    end: { x: MARGIN + CONTENT_WIDTH, y: MARGIN + 16 },
    thickness: 0.7,
    color: COLOR.rule,
  });
  page.drawText(`${CV.name}  ·  ${CV.role}  ·  ${CV.website}`, {
    x: MARGIN,
    y: MARGIN,
    size: 7.8,
    font: regular,
    color: COLOR.muted,
  });
  const label = `Page ${index + 1} of ${pages.length}`;
  const width = regular.widthOfTextAtSize(label, 7.8);
  page.drawText(label, {
    x: MARGIN + CONTENT_WIDTH - width,
    y: MARGIN,
    size: 7.8,
    font: regular,
    color: COLOR.muted,
  });
});

const bytes = await doc.save();
const outDir = path.join(process.cwd(), 'public');
await mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, 'muhammad-aslaan-cv.pdf');
await writeFile(outPath, bytes);

console.log(
  `CV written to ${path.relative(process.cwd(), outPath)} (${(bytes.length / 1024).toFixed(1)} KB, ${doc.getPageCount()} page${doc.getPageCount() > 1 ? 's' : ''})`
);
