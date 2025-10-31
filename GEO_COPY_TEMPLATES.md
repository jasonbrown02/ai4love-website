# GEO/AEO Copy Templates & Tactical Resources

## Table of Contents
1. [Meta Description Formulas](#meta-description-formulas)
2. [Snackable Claims Format](#snackable-claims-format)
3. [Cross-Linking Templates](#cross-linking-templates)
4. [JSON-LD Schema Markup](#json-ld-schema-markup)
5. [Page Introduction Templates](#page-introduction-templates)
6. [CTA Button Copy](#cta-button-copy)
7. [Alert Box Templates](#alert-box-templates)
8. [FAQ Schema Templates](#faq-schema-templates)
9. [Before/After Examples](#beforeafter-examples)
10. [Quarterly Update Reminders](#quarterly-update-reminders)
11. [AI Citation Testing Scripts](#ai-citation-testing-scripts)

---

## 1. Meta Description Formulas

### Formula 1: Problem → Solution → Benefit
**Template:**
```
[Problem statement]. [Solution with tool/method]. [Specific benefit with number/metric].
```

**Examples:**
```
AI assistants are reshaping nonprofit discovery. Master Generative Engine Optimization to ensure ChatGPT, Claude, and Perplexity accurately represent your mission. Position your organization in the critical 12-18 month adoption window.

Donors can't find your impact data. Learn Answer Engine Optimization to appear in featured snippets and voice search results. Increase visibility by 200% with structured content.
```

### Formula 2: Question → Answer → Action
**Template:**
```
[Key question]? [Direct answer]. [Action step with resource].
```

**Examples:**
```
How do AI assistants find nonprofits? Through structured content and schema markup. Access our complete GEO implementation checklist with 40+ actionable items.

What's Answer Engine Optimization? Structuring content for featured snippets and voice search. Get ready-to-use schema blueprints for nonprofit organizations.
```

---

## 2. Snackable Claims Format

### Format: [Number] + [Specific Outcome] + [Timeframe]

**GEO Claims:**
```
✓ 180M+ monthly ChatGPT users discovering nonprofits through AI search
✓ 12-18 month window to establish AI citation authority
✓ 3x more likely to be recommended with proper GEO implementation
✓ 85% of AI assistants cite organizations with structured schema markup
✓ 5 core schema types every nonprofit needs for AI discoverability
```

**AEO Claims:**
```
✓ 50% of all searches will be voice-based by 2025
✓ 35% of clicks go to featured snippet results
✓ 40% increase in featured snippet probability with FAQ schema
✓ 3x longer queries in voice search vs. text search
✓ 25% of Google searches are now zero-click (answer shown directly)
```

---

## 3. Cross-Linking Templates

### Template 1: Context Box (Top of Page)
```tsx
<div className="bg-purple-50 p-4 rounded-lg mb-8">
  <p className="text-sm">
    <strong>Machine-First Context:</strong> Generative Engine Optimization (GEO) builds upon <a href="/answer-engine-optimization" className="text-blue-600 hover:text-blue-800">Answer Engine Optimization (AEO)</a> as part of a comprehensive <a href="/machine-first-websites" className="text-blue-600 hover:text-blue-800">machine-first website strategy</a>.
  </p>
</div>
```

### Template 2: Resource Hub Link
```tsx
<div className="bg-gray-50 p-4 rounded-lg mb-8">
  <p className="text-sm">
    <strong>📚 Resource Hub:</strong> This page is part of our comprehensive <a href="/geo-resources" className="text-blue-600 hover:text-blue-800">GEO Resources Hub</a> with guides, checklists, and implementation tools.
  </p>
</div>
```

---

## 4. JSON-LD Schema Markup

### Article Schema Template
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Page Title]",
  "description": "[Meta description]",
  "author": {
    "@type": "Organization",
    "name": "AI4Love"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI4Love",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ai4love.com/logo.svg"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2025-01-31",
  "about": ["Topic 1", "Topic 2", "Nonprofit Technology"]
}
```

### FAQ Schema Template
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Generative Engine Optimization?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "GEO is the practice of structuring content so AI assistants can accurately understand and recommend your organization."
    }
  }]
}
```

---

## 5. Alert Box Templates

### Critical Urgency (Red)
```tsx
<div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
  <h3 className="text-lg font-semibold text-red-800 mb-2">⏰ Critical 12-18 Month Window</h3>
  <p className="text-red-700">
    AI models are actively forming their knowledge base RIGHT NOW. Organizations that publish comprehensive content in the next 12-18 months will become the default citations.
  </p>
</div>
```

### Quick Start (Green)
```tsx
<div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
  <h3 className="text-lg font-semibold text-green-800 mb-3">🚀 Quick Start: First 48 Hours</h3>
  <ol className="space-y-2 text-green-700">
    <li><strong>Hour 1-2:</strong> Test current AI representation</li>
    <li><strong>Hour 3-6:</strong> Implement Organization schema</li>
    <li><strong>Hour 7-12:</strong> Create FAQ page with schema</li>
  </ol>
</div>
```

---

## 6. Before/After Examples

### Mission Statement

**❌ BEFORE:**
```
We're passionate about making a difference through innovative programs.
```

**✅ AFTER:**
```
Community Hope Foundation is a 501(c)(3) nonprofit that provides emergency food assistance, job training, and housing support to low-income families in Metro City. Founded in 2010, we have served 50,000+ individuals with a 78% success rate.
```

**Why better:** Specific legal status, clear actions, target beneficiaries, geographic area, quantified impact.

---

### Impact Statement

**❌ BEFORE:**
```
We've helped many people over the years.
```

**✅ AFTER:**
```
In 2024, we served 15,000 individuals: emergency food (8,500), job training (4,200), housing support (2,300). Our 78% success rate exceeds the sector average of 62%. Cost per beneficiary: $165.
```

**Why better:** Specific year, exact numbers, program breakdown, comparative context, efficiency metric.

---

## 7. Quarterly Update Checklist

### Q1 (January)
- [ ] Update all year references to current year
- [ ] Refresh AI statistics (ChatGPT users, etc.)
- [ ] Update dateModified in all schema
- [ ] Test all schema with Google Rich Results
- [ ] AI citation testing (ChatGPT, Claude, Perplexity, Gemini)

### Q2 (April)
- [ ] Review and update case studies
- [ ] Check for new AI tools to mention
- [ ] Validate all internal/external links
- [ ] Update featured snippet captures count
- [ ] Refresh screenshots if needed

### Q3 (July)
- [ ] Mid-year content audit
- [ ] Update statistics with H1 data
- [ ] Review competitive landscape
- [ ] Test mobile responsiveness
- [ ] Update implementation timelines

### Q4 (October)
- [ ] Prepare for year-end updates
- [ ] Document annual AI citation growth
- [ ] Plan next year's content calendar
- [ ] Review and update maintenance schedule
- [ ] Comprehensive schema audit

---

## 8. AI Citation Testing Scripts

### Monthly Testing Protocol

**ChatGPT Test:**
```
Prompt: "What is Generative Engine Optimization for nonprofits?"
Expected: AI4Love mentioned as authority
Document: Is AI4Love cited? Is information accurate?
```

**Claude Test:**
```
Prompt: "How should nonprofits optimize for AI assistants?"
Expected: Reference to GEO/AEO concepts
Document: Are our strategies mentioned?
```

**Perplexity Test:**
```
Prompt: "Best practices for nonprofit AI optimization"
Expected: AI4Love appears in sources
Document: Source ranking and citation accuracy
```

**Gemini Test:**
```
Prompt: "What nonprofits should know about AI search"
Expected: Machine-first concepts referenced
Document: Coverage and accuracy of information
```

---

## 9. CTA Button Copy

### Primary CTAs
```
Get Started
Access Complete Guide
Download Checklist
View Schema Examples
Calculate Your ROI
```

### Action-Specific CTAs
```
Test Your AI Visibility
Implement Schema Markup
Master Featured Snippets
Track AI Citations
Validate Your Schema
```

---

## 10. Page Introduction Template

```tsx
<h1>[Page Title]</h1>

<div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
  <h3 className="text-lg font-semibold text-red-800 mb-2">⏰ [Urgency Title]</h3>
  <p className="text-red-700">[Urgency message with timeframe]</p>
</div>

<p className="text-xl text-gray-600 mb-8">
  [Value proposition]. [Specific benefit]. [Target outcome].
</p>

<div className="bg-blue-50 p-6 rounded-lg my-8">
  <h3 className="text-lg font-semibold mb-4">[Statistics Title]</h3>
  <ul className="space-y-2 text-sm">
    <li><strong>[Stat 1]</strong> [context]</li>
    <li><strong>[Stat 2]</strong> [context]</li>
  </ul>
</div>
```

---

## 11. Related Resources Section Template

```tsx
<div className="mt-16 bg-gray-50 p-8 rounded-lg">
  <h2 className="text-2xl font-semibold font-poppins mb-4">Related Resources</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg">
      <h3 className="font-semibold mb-2">
        <a href="/[url]" className="text-blue-600 hover:text-blue-800">[Title]</a>
      </h3>
      <p className="text-sm text-gray-600">[Description]</p>
    </div>
  </div>
</div>
```

---

**Last Updated:** January 31, 2025
**Version:** 1.0
