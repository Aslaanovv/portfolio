import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

interface RabtekCaseStudyProps {
  work: any;
  nextWork: any;
}

export function RabtekCaseStudy({ work, nextWork }: RabtekCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full bg-background">

      {/* ==================================== */}
      {/* HERO - Browser Dominated Cinematic */}
      {/* ==================================== */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-primary/2 rounded-full blur-3xl animate-pulse-slow-delayed" />

        {/* Mouse glow follower */}
        <MouseGlow />

        {/* Browser mockup - 70% of viewport */}
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-12">

          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
            style={{ perspective: "2000px" }}
          >
            {/* Browser frame */}
            <div className="bg-card/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/50 shadow-2xl overflow-hidden">

              {/* Browser header */}
              <div className="bg-muted/30 border-b border-border/30 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1">
                  <div className="bg-background/50 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span className="text-xs text-muted-foreground font-mono">rabtek.com</span>
                  </div>
                </div>
              </div>

              {/* Browser content - Rabtek homepage screenshot */}
              <div className="aspect-[16/9] relative overflow-hidden bg-background">
                <img
                  src="/projects/rabtek/homepage.png"
                  alt="Rabtek Integrated Solutions - https://www.rabtek.net/"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Cinematic typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="mt-16 text-center"
            >
              <p className="text-xs md:text-sm font-mono text-muted-foreground/50 mb-6 tracking-widest uppercase">
                2022 — March 2024
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 leading-tight tracking-tight">
                How Sales Conversations<br />Shaped Product Thinking
              </h1>
              <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
                A two-year journey at Rabtek where client-facing technical sales informed every implementation decision.
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-auto mb-4" />
            <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest text-center">
              Scroll
            </p>
          </motion.div>
        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION 01 - PROJECT SNAPSHOT */}
      {/* ==================================== */}
      <ProjectSnapshot />

      {/* ==================================== */}
      {/* SECTION 02 - INTRODUCTION */}
      {/* ==================================== */}
      <Introduction />

      {/* ==================================== */}
      {/* SECTION 03 - UNDERSTANDING THE BUSINESS */}
      {/* ==================================== */}
      <UnderstandingBusiness />

      {/* ==================================== */}
      {/* SECTION 04 - FROM CONVERSATIONS TO DECISIONS */}
      {/* ==================================== */}
      <ConversationsToDecisions />

      {/* ==================================== */}
      {/* SECTION 05 - THE SOLUTION */}
      {/* ==================================== */}
      <TheSolution />

      {/* ==================================== */}
      {/* SECTION 06 - EVIDENCE STRIP */}
      {/* ==================================== */}
      <EvidenceStrip />

      {/* ==================================== */}
      {/* SECTION 07 - BEYOND THE WEBSITE */}
      {/* ==================================== */}
      <BeyondWebsite />

      {/* ==================================== */}
      {/* SECTION 08 - IMPLEMENTATION PROCESS */}
      {/* ==================================== */}
      <ImplementationProcess />

      {/* ==================================== */}
      {/* SECTION 09 - CONNECTED EXPERIENCE */}
      {/* ==================================== */}
      <ConnectedExperience />

      {/* ==================================== */}
      {/* SECTION 10 - MY CONTRIBUTION */}
      {/* ==================================== */}
      <MyContribution />

      {/* ==================================== */}
      {/* SECTION 11 - LESSONS LEARNED */}
      {/* ==================================== */}
      <LessonsLearned />

      {/* ==================================== */}
      {/* SECTION 12 - NEXT PROJECT */}
      {/* ==================================== */}
      <NextProject nextWork={nextWork} />

    </div>
  );
}

// ====================================
// SECTION 01 - PROJECT SNAPSHOT
// ====================================

function ProjectSnapshot() {
  const summaryItems = [
    { label: "Client", value: "Rabtek Integrated Solutions" },
    { label: "Industry", value: "ERP & Digital Transformation" },
    { label: "Project Type", value: "Corporate Website + Business Enablement" },
    { label: "Timeline", value: "3 Months" },
    { label: "Platform", value: "Odoo Website" },
    { label: "Role", value: "UX/UI Designer • Web Designer • Implementation Support" },
    { label: "Deliverables", value: "Corporate Website • CRM Enablement • Business Workflow Support" },
    { label: "Outcome", value: "Enterprise Digital Experience" },
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Project Snapshot
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
            Rabtek Integrated Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/60 mt-3">
            Enterprise Website & Digital Transformation
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed mb-16 md:mb-24"
        >
          Rabtek needed a professional digital presence that reflected its enterprise capabilities while supporting sales, customer communication, and long-term operational growth. This project combined website design with business process thinking to create a connected enterprise experience.
        </motion.p>

        {/* Executive Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs font-mono text-muted-foreground/30 uppercase tracking-wider mb-8">
            Executive Summary
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {summaryItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                className="flex justify-start items-baseline py-3 border-b border-border/10"
              >
                <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider w-32 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/90 flex-1">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Editorial Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-border/10"
        >
          <p className="text-xs text-muted-foreground/40 max-w-3xl leading-relaxed">
            <span className="font-mono uppercase tracking-wider text-muted-foreground/30">Editorial Note:</span> Every implementation decision documented in this case study is based on real project work. Where representative implementation environments are presented later in the case study, they are clearly identified to preserve complete authenticity.
          </p>
        </motion.div>

      </div>

      {/* Subtle section divider */}
      <div className="w-full h-px bg-border/10 max-w-[1200px] mx-auto" />
    </div>
  );
}

// ====================================
// SECTION 02 - INTRODUCTION
// ====================================

function Introduction() {
  const supportingFacts = [
    { label: "Business Focus", value: "Enterprise Software & Digital Transformation" },
    { label: "Platform", value: "Odoo Ecosystem" },
    { label: "Project Goal", value: "Create a professional digital presence aligned with real business operations." },
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Introduction
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            Building Digital Foundations for Enterprise Businesses
          </h2>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-24 md:mb-32"
        >
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            Rabtek Integrated Solutions helps organizations improve their operations through enterprise software, digital transformation, and business technology solutions. Their work focuses on connecting business processes with practical systems that support growth, efficiency, and long-term operational success.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            This engagement extended beyond creating a public-facing website. It required understanding how the business communicated its value, how customers entered the sales journey, and how digital touchpoints could better support both marketing and operational workflows.
          </p>
        </motion.div>

        {/* Supporting Facts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider mb-10">
            Supporting Facts
          </p>

          <div className="space-y-0">
            {supportingFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.08) }}
                className="py-5 border-b border-border/10 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                  <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider w-40 flex-shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-sm text-foreground/80">
                    {fact.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 03 - UNDERSTANDING THE BUSINESS
// ====================================

function UnderstandingBusiness() {
  const stages = [
    {
      number: "01",
      title: "Customer Conversations",
      description: "Every sales meeting revealed what businesses actually needed from their systems — not what they said they wanted.",
      color: "from-foreground/5 to-foreground/2"
    },
    {
      number: "02",
      title: "Pattern Recognition",
      description: "Across dozens of conversations, the same challenges emerged: disconnected teams, manual processes, information gaps.",
      color: "from-muted/20 to-muted/10"
    },
    {
      number: "03",
      title: "Business Understanding",
      description: "These patterns formed a picture of what organizations actually needed — connected systems, not isolated tools.",
      color: "from-foreground/5 to-foreground/2"
    }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Understanding the Business
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            How Conversations Revealed What Businesses Actually Needed
          </h2>
        </motion.div>

        {/* Relationship Diagram */}
        <div className="relative">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.12) }}
              className="relative mb-12 last:mb-0"
            >
              {/* Stage number */}
              <div className="flex items-start gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${stage.color} border border-border/20 flex items-center justify-center`}>
                    <span className="text-xs md:text-sm font-mono text-muted-foreground/50">
                      {stage.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-3">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground/70 max-w-2xl leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Connection line */}
              {index < stages.length - 1 && (
                <div className="absolute left-8 md:left-10 top-16 md:top-20 bottom-0 w-px bg-gradient-to-b from-border/30 via-border/10 to-transparent -z-10" style={{ height: 'calc(100% - 4rem)' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary insight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-border/10"
        >
          <p className="text-sm md:text-base text-muted-foreground/60 max-w-2xl leading-relaxed">
            The feedback loop between selling and implementing created direct access to how businesses actually operate — insight that shaped every decision that followed.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 04 - FROM CONVERSATIONS TO DECISIONS
// ====================================

function ConversationsToDecisions() {
  const decisions = [
    {
      insight: "Feature requests were symptoms",
      explanation: "When clients asked for specific features, they were describing pain points. The real problem was often deeper than what they articulated."
    },
    {
      insight: "Adoption mattered more than power",
      explanation: "The most capable system fails if teams don't use it. Simplicity and training became as important as technical capability."
    },
    {
      insight: "Integration beats individual tools",
      explanation: "Fragmented systems created more work than they solved. Connected workflows were the real value proposition."
    },
    {
      insight: "Sales revealed implementation gaps",
      explanation: "Promises made during sales became responsibilities during implementation. This feedback loop changed how I approached commitments."
    }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            From Conversations to Decisions
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            How Client Insights Shaped Implementation Choices
          </h2>
        </motion.div>

        {/* Decisions */}
        <div className="space-y-12 md:space-y-16">
          {decisions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="border-b border-border/10 pb-12 md:pb-16 last:border-0 last:pb-0"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                {item.insight}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground/70 max-w-2xl leading-relaxed">
                {item.explanation}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 05 - THE SOLUTION
// ====================================

function TheSolution() {
  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            The Solution
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
            The Rabtek Website
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl mx-auto">
            A professional digital presence that reflects enterprise capabilities and supports business operations.
          </p>
        </motion.div>

        {/* Browser presentation */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Browser frame */}
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/50 shadow-2xl overflow-hidden">

            {/* Browser header */}
            <div className="bg-muted/30 border-b border-border/30 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1">
                <div className="bg-background/50 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  <span className="text-xs text-muted-foreground font-mono">rabtek.net</span>
                </div>
              </div>
            </div>

            {/* Browser content - Rabtek homepage */}
            <div className="aspect-[16/9] relative overflow-hidden bg-background">
              <img
                src="/projects/rabtek/homepage.png"
                alt="Rabtek Integrated Solutions Website"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 06 - EVIDENCE STRIP
// ====================================

function EvidenceStrip() {
  const evidence = [
    { label: "Website", description: "Professional corporate presence" },
    { label: "CRM", description: "Customer relationship management" },
    { label: "Odoo", description: "Enterprise platform integration" },
    { label: "Implementation", description: "Business workflow support" }
  ];

  return (
    <div className="w-full bg-muted/20 border-y border-border/10">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {evidence.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.08) }}
            >
              <p className="text-xs font-mono text-muted-foreground/30 uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-sm text-foreground/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 07 - BEYOND THE WEBSITE
// ====================================

function BeyondWebsite() {
  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Beyond the Website
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            The Operational Layer
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
            While the website created the first impression, the operational layer enabled customer management, sales progression, and business workflows.
          </p>
        </motion.div>

        {/* Tablet presentation */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-2xl mx-auto"
        >
          {/* Tablet frame */}
          <div className="relative bg-[#1a1a1a] rounded-[2rem] p-3 shadow-2xl">
            {/* Screen */}
            <div className="relative bg-black rounded-[1.5rem] overflow-hidden aspect-[4/3]">
              <img
                src="/projects/rabtek/odoo-crm.png"
                alt="Representative Odoo implementation environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Ambient glow */}
          <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10" />
        </motion.div>

        {/* Editorial note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-muted-foreground/40 max-w-2xl mx-auto">
            This Odoo interface is a representative implementation environment and does not depict Rabtek's internal system.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 08 - IMPLEMENTATION PROCESS
// ====================================

function ImplementationProcess() {
  const stages = [
    { name: "Discovery", description: "Understanding business requirements" },
    { name: "Requirements", description: "Defining scope and deliverables" },
    { name: "Website", description: "Design and development" },
    { name: "CRM", description: "Customer management setup" },
    { name: "Training", description: "Team onboarding and documentation" },
    { name: "Launch", description: "Deployment and go-live support" },
    { name: "Support", description: "Ongoing optimization" }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Implementation Process
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            From Discovery to Support
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
            The operational journey from initial conversations through ongoing optimization.
          </p>
        </motion.div>

        {/* Workflow stages */}
        <div className="space-y-0">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.08) }}
              className="flex items-start gap-6 py-6 border-b border-border/10 last:border-0"
            >
              <div className="flex-shrink-0 w-12">
                <div className="text-xs font-mono text-muted-foreground/30">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {stage.name}
                </h3>
                <p className="text-sm text-muted-foreground/60">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 09 - CONNECTED EXPERIENCE
// ====================================

function ConnectedExperience() {
  const connections = [
    { from: "Website", to: "Lead capture → CRM integration" },
    { from: "CRM", to: "Sales pipeline tracking" },
    { from: "Sales", to: "Quote to invoice workflow" },
    { from: "Operations", to: "Business process automation" },
    { from: "Reporting", to: "Real-time business insights" }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Connected Experience
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            How Everything Works Together
          </h2>
        </motion.div>

        {/* Connected system diagram */}
        <div className="space-y-0">
          {connections.map((item, index) => (
            <motion.div
              key={item.from}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.08) }}
              className="flex items-center gap-4 py-5 border-b border-border/10 last:border-0"
            >
              <div className="w-32 flex-shrink-0">
                <span className="text-sm font-semibold text-foreground">
                  {item.from}
                </span>
              </div>
              <div className="flex-1">
                <svg className="w-full h-4" viewBox="0 0 100 16">
                  <motion.path
                    d="M 0 8 L 80 8"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-border/20"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.08) }}
                  />
                  <motion.path
                    d="M 72 4 L 80 8 L 72 12"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-border/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.08) }}
                  />
                </svg>
              </div>
              <div className="w-full flex-1">
                <span className="text-sm text-muted-foreground/70">
                  {item.to}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-border/10"
        >
          <p className="text-sm md:text-base text-muted-foreground/60 max-w-2xl leading-relaxed">
            Each system connects to create a unified experience — from the first website visit through ongoing business operations.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 10 - MY CONTRIBUTION
// ====================================

function MyContribution() {
  const responsibilities = [
    { area: "UX Research", ownership: "Supported", notes: "Client conversations and requirement gathering" },
    { area: "UX/UI Design", ownership: "Owned", notes: "Website design and user experience" },
    { area: "Website Development", ownership: "Owned", notes: "Implementation on Odoo platform" },
    { area: "CRM Configuration", ownership: "Supported", notes: "Sales pipeline setup" },
    { area: "Training Materials", ownership: "Owned", notes: "Client-specific documentation" },
    { area: "Implementation Support", ownership: "Owned", notes: "Deployment and user training" },
    { area: "Backend Development", ownership: "Not involved", notes: "Odoo core module development" },
    { area: "ERP Core Development", ownership: "Not involved", notes: "Platform-level customization" }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            My Contribution
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            What I Owned Versus What I Supported
          </h2>
        </motion.div>

        {/* Responsibility matrix */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Matrix header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 border-b border-border/20 mb-4">
            <div className="md:col-span-4">
              <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Responsibility</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Ownership</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Notes</p>
            </div>
          </div>

          {/* Matrix rows */}
          <div className="space-y-0">
            {responsibilities.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-border/10 last:border-0"
              >
                <div className="md:col-span-4">
                  <p className="text-sm text-foreground/90">{item.area}</p>
                </div>
                <div className="md:col-span-3">
                  <p className={`text-sm ${item.ownership === 'Owned' ? 'text-foreground/70' : item.ownership === 'Supported' ? 'text-muted-foreground/50' : 'text-muted-foreground/30'}`}>
                    {item.ownership}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground/50">{item.notes}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// ====================================
// SECTION 11 - LESSONS LEARNED
// ====================================

function LessonsLearned() {
  const principles = [
    {
      number: "01",
      principle: "Business before Interfaces",
      detail: "Understanding the business problem comes before designing any solution."
    },
    {
      number: "02",
      principle: "Research starts in conversations",
      detail: "Sales conversations reveal what surveys and analytics cannot."
    },
    {
      number: "03",
      principle: "Systems create better experiences",
      detail: "Connected workflows matter more than individual tools."
    },
    {
      number: "04",
      principle: "Implementation is part of UX",
      detail: "The best design fails if teams cannot actually use it."
    }
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-48">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            Lessons Learned
          </p>
        </motion.div>

        {/* Principles */}
        {principles.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
            className="py-16 md:py-20 border-b border-border/10 last:border-0"
          >
            <div className="flex items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground/[0.03] leading-none">
                  {item.number}
                </span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4 tracking-tight">
                  {item.principle}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground/60 max-w-xl">
                  {item.detail}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

// ====================================
// SECTION 12 - NEXT PROJECT
// ====================================

interface NextProjectProps {
  nextWork: any;
}

function NextProject({ nextWork }: NextProjectProps) {
  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground/50">Continue exploring</p>
        </motion.div>

        <Link href={`/works/${nextWork.slug}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={nextWork.image}
                alt={nextWork.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center">
                {nextWork.title}
              </h3>
            </div>
          </motion.div>
        </Link>

      </div>
    </div>
  );
}

// Mouse glow follower component
function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInView) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsInView(true);
    const handleMouseLeave = () => setIsInView(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl -z-10 transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        opacity: isInView ? 1 : 0
      }}
    />
  );
}
