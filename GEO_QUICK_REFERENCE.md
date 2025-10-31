# GEO/AEO Quick Reference Guide

## 🚀 Quick Start (Copy & Paste)

### Add Resource Hub Link to Any Page
```tsx
<div className="bg-gray-50 p-4 rounded-lg mb-8">
  <p className="text-sm">
    <strong>📚 Resource Hub:</strong> This page is part of our comprehensive <a href="/geo-resources" className="text-blue-600 hover:text-blue-800">GEO Resources Hub</a> with guides, checklists, and implementation tools.
  </p>
</div>
```

### Add Urgency Alert
```tsx
<div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
  <h3 className="text-lg font-semibold text-red-800 mb-2">⏰ Critical 12-18 Month Window</h3>
  <p className="text-red-700">
    AI models like ChatGPT, Claude, Perplexity, and Gemini are <strong>actively forming their knowledge base RIGHT NOW</strong>. Organizations that publish comprehensive content in the next 12-18 months will become the default citations for years to come.
  </p>
</div>
```

### Add Statistics Box
```tsx
<div className="bg-blue-50 p-6 rounded-lg my-8">
  <h3 className="text-lg font-semibold mb-4">The AI Search Revolution (2024-2025)</h3>
  <ul className="space-y-2 text-sm">
    <li><strong>180M+</strong> monthly ChatGPT users asking about nonprofits</li>
    <li><strong>10M+</strong> monthly Perplexity users seeking answers</li>
    <li><strong>1B+</strong> Google AI Overview queries per month</li>
    <li><strong>50%</strong> of searches will be voice-based by 2025</li>
  </ul>
</div>
```

---

## 📋 Essential Schema Snippets

### Update dateModified (Do This Monthly)
```json
"dateModified": "2025-01-31"
```

### Add AI Tools to Schema
```json
"mentions": [
  {"@type": "SoftwareApplication", "name": "ChatGPT"},
  {"@type": "SoftwareApplication", "name": "Claude"},
  {"@type": "SoftwareApplication", "name": "Perplexity"},
  {"@type": "SoftwareApplication", "name": "Gemini"},
  {"@type": "SoftwareApplication", "name": "SearchGPT"}
]
```

---

## ✅ Monthly Checklist (5 Minutes)

```markdown
- [ ] Update dateModified in schema to current month
- [ ] Test one AI assistant (rotate monthly)
- [ ] Check for broken links on one page
- [ ] Review one page for outdated references
- [ ] Update one statistic if new data available
```

---

## 🎯 Key Statistics to Use

### AI Search Market (2024-2025)
- **180M+** monthly ChatGPT users
- **10M+** monthly Perplexity users
- **1B+** Google AI Overview queries/month
- **50%** of searches voice-based by 2025
- **72%** of voice users use AI daily

### Answer Engine Optimization
- **35%** of clicks go to featured snippets
- **40%** increase with FAQ schema
- **25%** of searches are zero-click
- **3x** longer voice queries vs text

### Nonprofit Impact
- **73%** of donors research online first
- **68%** use search engines to find charities
- **45%** of donors under 40 use AI assistants

---

## 🔍 AI Citation Testing (Monthly)

### Test Queries
```
ChatGPT: "What is GEO for nonprofits?"
Claude: "How should nonprofits optimize for AI?"
Perplexity: "Best practices for nonprofit AI optimization"
Gemini: "Generative engine optimization guide"
```

### Document Results
```
✓ Mentioned? (Yes/No)
✓ Accuracy? (0-100%)
✓ Ranking? (#1, #2, #3, etc.)
✓ Notes: (What was said)
```

---

## 📝 Copy Templates

### Meta Description (155 characters max)
```
[Problem]. [Solution with tool]. [Benefit with number]. [Call to action].
```

### Page Title (60 characters max)
```
[Topic] for Nonprofits - AI4Love
```

### H1 Headline
```
[Topic]: [Specific Benefit]
```

### H2 Section Headers (Use Questions)
```
What is [Topic]?
How Does [Topic] Work?
Why [Topic] Matters for Nonprofits
How to Implement [Topic]
```

---

## 🛠️ Validation Tools

### Schema Testing
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [JSON-LD Playground](https://json-ld.org/playground/)

### AI Testing
- [ChatGPT](https://chat.openai.com)
- [Claude](https://claude.ai)
- [Perplexity](https://perplexity.ai)
- [Gemini](https://gemini.google.com)

### Performance
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)

---

## 🎨 Color Codes for Alert Boxes

```
Red (Urgent):     bg-red-50 border-red-500 text-red-800
Yellow (Warning): bg-yellow-50 border-yellow-500 text-yellow-800
Green (Success):  bg-green-50 border-green-500 text-green-800
Blue (Info):      bg-blue-50 border-blue-500 text-blue-800
Purple (Context): bg-purple-50 border-purple-500 text-purple-800
Gray (Neutral):   bg-gray-50 border-gray-500 text-gray-800
```

---

## 📅 Update Schedule

### Monthly (1st of month)
- Update dateModified
- Test one AI assistant
- Check one page for updates

### Quarterly (Jan, Apr, Jul, Oct)
- Comprehensive content audit
- Update all statistics
- Test all AI assistants
- Validate all schema

### Annually (January)
- Major content refresh
- Update all year references
- Review strategy
- Set new goals

---

## 🔗 Internal Linking Pattern

### Every Page Should Link To:
1. GEO Resources Hub (`/geo-resources`)
2. One parent page (context)
3. 2-3 related pages (cross-reference)

### Link Text Format:
```tsx
<a href="/page-url" className="text-blue-600 hover:text-blue-800">
  Link Text
</a>
```

---

## 💡 Common Mistakes to Avoid

### ❌ DON'T
- Use "Bard" (outdated - use "Gemini")
- Leave dateModified as 2024
- Forget schema markup
- Use vague language ("many people")
- Bury the answer (put it first)

### ✅ DO
- Use current AI tool names
- Update dates monthly
- Validate all schema
- Use specific numbers
- Lead with direct answers

---

## 🎯 Priority Actions (If You Only Have 30 Minutes)

### Highest Impact Tasks:
1. **Add Organization schema** to homepage (10 min)
2. **Create FAQ page** with schema (15 min)
3. **Test with ChatGPT** to see current state (5 min)

### Next Priority:
4. **Add Resource Hub link** to all pages (10 min)
5. **Update dateModified** on all pages (5 min)
6. **Add urgency alert** to key pages (10 min)

---

## 📊 Success Metrics Dashboard

### Track Monthly:
```
AI Citations: [X] mentions across [Y] tools
Featured Snippets: [X] captured
Organic Traffic: [X] visitors (+/- [Y]%)
Schema Coverage: [X]% of pages
```

### Goals (6 Months):
```
✓ Top 3 citation for "nonprofit AI"
✓ 20+ featured snippets
✓ 200% traffic increase
✓ 100% schema coverage
```

---

## 🚨 Emergency Fixes

### If Schema Validation Fails:
1. Check for missing commas
2. Verify all quotes are straight (not curly)
3. Ensure proper nesting of brackets
4. Use JSON-LD Playground to debug

### If AI Doesn't Mention You:
1. Check if content is indexed (Google Search Console)
2. Verify schema is present and valid
3. Ensure content is comprehensive (500+ words)
4. Add more specific, quotable facts

### If Links Break:
1. Update internal links to new structure
2. Add redirects for moved pages
3. Check external links quarterly
4. Use relative paths for internal links

---

## 📞 Quick Support

### Documentation:
- Strategy: `GEO_OPTIMIZATION_STRATEGY.md`
- Templates: `GEO_COPY_TEMPLATES.md`
- Advanced: `GEO_ADVANCED_TEMPLATES.md`
- Summary: `GEO_IMPLEMENTATION_SUMMARY.md`

### Contact:
- Email: hello@ai4love.com
- Hub: https://ai4love.com/geo-resources

---

**Last Updated:** January 31, 2025
**Print This:** Keep handy for quick reference during updates
