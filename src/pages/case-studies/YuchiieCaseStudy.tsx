import { Link } from 'wouter';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { NextProject } from '@/components/case-study/NextProject';
import type { Work } from '@/types/work';

const asset = (name: string) => `/projects/yuchiie/${name}.webp`;
// Warm terracotta from the campaign, lifted for contrast on the dark portfolio.
const accent = 'text-[#e6a07a]';
const label = `text-xs font-mono uppercase tracking-[0.18em] ${accent}`;

function LiveSiteButton({ url }: { url: string }) {
  return <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#e6a07a] text-[#171717] hover:bg-[#f0b899] rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6a07a] focus-visible:ring-offset-4 focus-visible:ring-offset-background"><ExternalLink size={17} aria-hidden="true" />View Live Site</a>;
}

function SectionHeading({ number, title, children }: { number: string; title: React.ReactNode; children: React.ReactNode }) {
  return <div className="grid md:grid-cols-12 gap-6 md:gap-16 mb-10 md:mb-14">
    <p className={`${label} md:col-span-3`}>{number}</p>
    <div className="md:col-span-9 max-w-3xl">
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">{title}</h2>
      <div className="text-lg text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </div>;
}

export function YuchiieCaseStudy({ work, nextWork }: { work: Work; nextWork: Work }) {
  return <>
    <article className="max-w-7xl mx-auto px-4 md:px-8">
      <header className="max-w-5xl mx-auto mb-12 md:mb-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ArrowLeft size={16} /> All projects</Link>
        <p className={`${label} mb-5`}>YUCHIIE / CUSTOM SHOPIFY THEME / 2026</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-8">Fashion first.<br /><span className={accent}>Commerce underneath.</span></h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">An original Shopify theme for Yuchiie. Campaign-scale imagery, a cinematic first impression, and a complete shopping journey—without making the interface the main event.</p>
        <div className="flex flex-wrap gap-3 mt-8">
          {work.liveUrl && <LiveSiteButton url={work.liveUrl} />}
          <a href="https://github.com/Aslaanovv/YUCHIIE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3 text-sm font-semibold hover:bg-muted">Explore theme <ArrowUpRight size={17} /></a>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Store currently password-protected. Desktop, mobile, and intro screenshots supplied by the client are shown below. The collection layout study and standalone campaign imagery use the theme’s demo assets.</p>
      </header>

      <figure className="mb-16 md:mb-24">
        <img src={asset('screenshot-mockup')} alt="Actual Yuchiie desktop and mobile screenshots presented in device frames" width={1600} height={1000} fetchPriority="high" className="w-full rounded-[2rem] border border-border" />
        <figcaption className="text-xs text-muted-foreground mt-4">01 / Actual storefront screenshots · Desktop and mobile</figcaption>
      </figure>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-border py-8 mb-20 md:mb-32">
        {[
          ['Client', 'Yuchiie'], ['Scope', 'Theme design & development'],
          ['Platform', 'Shopify Online Store 2.0'], ['Stack', 'Liquid · CSS · JavaScript'],
        ].map(([term, value]) => <div key={term}><dt className={`${label} mb-3`}>{term}</dt><dd className="font-semibold text-sm md:text-base">{value}</dd></div>)}
      </dl>

      <section className="mb-20 md:mb-32">
        <SectionHeading number="01 / The brief" title={<>Build a world,<br /><span className={accent}>not just a product grid.</span></>}>
          <p>The challenge was to bring an editorial fashion direction into Shopify without losing the practical things a store needs: clear navigation, usable product options, and a straightforward path to the bag.</p>
          <p className="mt-5">The work spans the storefront and its supporting pages—from campaign discovery and collection browsing to product detail, customer care, and brand storytelling. The result is a configurable theme foundation, not a claim of a completed retail launch.</p>
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ['Let imagery lead', 'Large campaign frames and restrained typography give the collection room to establish its own identity.'],
            ['Keep shopping legible', 'Collection filters, size choices, variant availability, and an AJAX cart support the journey behind the imagery.'],
            ['Make it maintainable', 'Editable sections let the merchant change campaigns, story chapters, and store information in Shopify’s theme editor.'],
          ].map(([title, body], i) => <div key={title} className="p-7 md:p-9 rounded-3xl bg-card border border-border"><span className={label}>0{i + 1}</span><h3 className={`font-display text-xl font-bold mt-6 mb-4 ${accent}`}>{title}</h3><p className="text-muted-foreground leading-relaxed">{body}</p></div>)}
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <SectionHeading number="02 / Art direction" title={<>Quiet interface.<br /><span className={accent}>A stronger image.</span></>}><p>A warm paper background, black-and-white brand marks, and compact navigation create a restrained frame. Full-height campaign sections carry the visual story; the handwritten signature adds a more personal pause between commercial moments.</p></SectionHeading>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <figure className="overflow-hidden rounded-3xl bg-[#e9e3d9]"><img src={asset('campaign-02')} alt="Yuchiie demo campaign image used to establish the editorial direction" width={847} height={1280} loading="lazy" className="w-full h-full max-h-[700px] object-cover" /></figure>
          <div className="rounded-3xl bg-[#f5f2eb] text-[#222] p-8 md:p-12 flex flex-col justify-between gap-12">
            <div><p className="text-xs uppercase tracking-widest mb-8">The visual language</p><img src={asset('logo-yuchiie')} alt="Yuchiie wordmark" width={1400} height={293} loading="lazy" className="w-full max-w-sm" /><p className="mt-8 text-sm leading-relaxed max-w-sm">A clear wordmark for navigation.<br />A gestural signature for the brand’s quieter moments.</p></div>
            <img src={asset('signature-yuchiie')} alt="Yuchiie handwritten signature" loading="lazy" className="w-3/4 max-w-sm self-center" />
            <div className="flex gap-3" aria-label="Palette: ink, paper, warm stone">{['#171717', '#f5f2eb', '#d7d0c5'].map(color => <div key={color} className="flex-1"><div style={{ background: color }} className="h-16 rounded-xl border border-black/10" /><p className="text-xs mt-3 font-mono">{color}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <SectionHeading number="03 / The storefront" title={<>From campaign<br /><span className={accent}>to collection.</span></>}><p>The homepage pairs full-screen campaigns with a featured-product rail. Collection pages shift into a denser shopping layout with category navigation, native Shopify filters, sorting, pagination, and optional size labels.</p></SectionHeading>
        <figure className="p-3 md:p-8 bg-[#e8e3dc] rounded-3xl"><img src={asset('desktop-screenshot')} alt="Actual desktop homepage screenshot with transparent navigation over the campaign" width={1279} height={591} loading="lazy" className="w-full rounded-xl" /></figure>
        <figure className="mt-6"><img src={asset('collection-mockup')} alt="Collection layout presentation with demo fashion imagery, filter and sort controls, and size labels" width={1200} height={600} loading="lazy" className="w-full rounded-3xl border border-border" /><figcaption className="text-xs text-muted-foreground mt-4">Layout studies / Illustrative interface with the theme’s generated demo photography. Product labels are placeholders.</figcaption></figure>
      </section>

      <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
        <div className="bg-[#e8e3dc] rounded-3xl p-8 md:p-12 flex justify-center"><img src={asset('mobile-screenshot')} alt="Actual mobile homepage screenshot with overlay navigation and the All products link" width={1179} height={1872} loading="lazy" className="w-full max-w-[300px] rounded-[2rem] border-[7px] border-[#242321] shadow-xl" /></div>
        <div><p className={`${label} mb-5`}>04 / Interaction & motion</p><h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">A cinematic entrance.<br /><span className={accent}>A practical experience.</span></h2><p className="text-muted-foreground text-lg leading-relaxed mb-8">A signature reveal opens into a two-panel curtain transition. Beyond the intro, subtle scroll reveals and campaign parallax add movement without external animation libraries.</p>
          <ul className="space-y-5">{[
            ['Control stays with the visitor', 'The intro can be skipped by button or Escape. Reduced-motion preferences receive a still, fading alternative.'],
            ['Mobile has its own composition', 'Separate campaign crops and compact navigation adapt the image-led direction to narrow screens.'],
            ['Content comes before effects', 'The theme keeps content visible when JavaScript is disabled or reduced motion is enabled.'],
          ].map(([title, body]) => <li key={title} className="border-t border-border pt-5"><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></li>)}</ul>
        </div>
      </section>

      <figure className="mb-20 md:mb-32 rounded-3xl bg-[#111] p-6 md:p-10">
        <img src={asset('intro-screenshot')} alt="Actual Yuchiie cinematic intro screen with signature emblem, A world in motion tagline, and Skip intro control" width={1179} height={1860} loading="lazy" className="w-full max-w-sm mx-auto rounded-xl" />
        <figcaption className="text-xs text-white/60 text-center mt-6">Cinematic intro / Client-supplied screenshot</figcaption>
      </figure>

      <section className="mb-20 md:mb-32">
        <SectionHeading number="05 / Engineering" title={<>Custom on the surface.<br /><span className={accent}>Native at the core.</span></>}><p>Liquid templates and reusable sections work with Shopify’s product and collection data. Vanilla JavaScript handles storefront interactions; Shopify remains responsible for checkout, inventory, payments, and customer accounts.</p></SectionHeading>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">{[
          ['Product detail', 'Media galleries, variant option buttons, quantity controls, availability updates, and editable information accordions.'],
          ['Cart & wishlist', 'AJAX add-to-bag and a cart drawer, plus a local-storage wishlist. Saved items stay in the current browser; they do not sync across accounts or devices.'],
          ['Brand & service pages', 'About, projects, stockists, journal, FAQ, contact, and size-guide templates extend the experience beyond products.'],
          ['Merchant editing', 'Campaign crops, imagery, copy, section order, and visual settings are configurable. Products, menus, and page content are managed separately in Shopify.'],
        ].map(([title, body]) => <div key={title} className="border-t border-border pt-6"><h3 className={`font-display font-bold text-xl mb-3 ${accent}`}>{title}</h3><p className="text-muted-foreground leading-relaxed">{body}</p></div>)}</div>
      </section>

      <section className="bg-card border border-border rounded-[2rem] p-8 md:p-16 mb-12">
        <p className={`${label} mb-6`}>06 / Delivery & reflection</p><h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">The brand is the experience.<br /><span className={accent}>The theme is the system.</span></h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">Yuchiie brings the visual direction and shopping mechanics into one editable Shopify theme. The key design balance is restraint: enough motion and scale to create atmosphere, with familiar commerce patterns underneath.</p>
        <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-2 gap-8"><div><h3 className="font-semibold mb-3">Delivered in the theme</h3><p className="text-muted-foreground leading-relaxed">Responsive storefront templates, editable editorial sections, cinematic motion, product and cart interactions, and client-care page templates.</p></div><div><h3 className="font-semibold mb-3">Before a public launch</h3><p className="text-muted-foreground leading-relaxed">Replace demo products and generated imagery, finish store policies and navigation, and test real variants and checkout. No sales, conversion, or performance results are claimed here.</p></div></div>
      </section>
      {work.liveUrl && (
        <section aria-labelledby="yuchiie-live-title" className="rounded-[2rem] border border-[#e6a07a]/30 bg-[#e6a07a]/5 p-8 md:p-12 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className={`${label} mb-4`}>Explore the storefront</p>
            <h2 id="yuchiie-live-title" className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">See Yuchiie <span className={accent}>in motion.</span></h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">Explore the campaign imagery, cinematic intro, and shopping experience on the actual store.</p>
            <p className="text-xs text-muted-foreground mt-3">The Shopify store may require its storefront password.</p>
          </div>
          <div className="shrink-0"><LiveSiteButton url={work.liveUrl} /></div>
        </section>
      )}
    </article>
    <NextProject slug={nextWork.slug} title={nextWork.title} image={nextWork.image} />
  </>;
}
