# Envecoplast Visual Audit & Design System Overhaul

## 1. DIAGNOSIS: Current Visual Issues

### A. Color & Contrast Problems
1. **Inconsistent text color hierarchy**
   - Some sections use `text-[#111111]` (dark), others `text-white/90`, others `text-slate-700`
   - Contact form inputs have `text-slate-200` on light backgrounds (WCAG failure)
   - Terms page has mixed white and slate-200 text on dark backgrounds

2. **Background chaos**
   - Body: `bg-[#080b09]` (near-black with radial gradients)
   - Most pages override with white/light backgrounds
   - Footer: `from-[#f8fbf6] to-[#f5f8fc]` (very pale, almost invisible tint)
   - Glass cards: Complex gradient overlays that reduce readability

3. **Accent color misuse**
   - Yellow `#F5C400` used for stats numbers, stars, grid, and selection
   - Red `#E63027` used only for errors and rarely
   - Green `#1A6B3C` and Blue `#1B4F8A` compete without clear hierarchy
   - No disabled/inactive color defined

4. **Form field visibility**
   - Input borders: `#3d4f46` (very dark, low contrast)
   - Input background: `rgba(23, 32, 27, 0.92)` (murky semi-transparent)
   - Placeholder: `#b8c7bf` (barely visible gray)
   - Focus state only changes border color, no indicator strength

5. **Footer text readability**
   - Headers: `text-slate-900` (dark text on pale gradient background — OK)
   - Body links: `text-slate-600` (medium gray on pale background — OK but loses hierarchy)
   - Social icons have `hover:border-[#E63027]` making error color appear to be a brand accent

### B. Unfinished / Unprofessional Elements
1. **Placeholder visuals**
   - About page: "Our leadership team profiles coming soon" (placeholder box)
   - Product hero images: Generic gradient backgrounds without real visuals
   - Missing product photography is filled with gradient-only boxes

2. **Placeholder text exposed**
   - About: "coming soon. Check back for updates..."
   - No "Coming Soon" badge styling is consistent with the rest
   - "Contact Form" fallback shows unfinished state

3. **Inconsistent badge styling**
   - Product status badges: `bg-emerald-50 text-emerald-700` (Coming Soon) vs `bg-slate-100 text-slate-500` (Active)
   - No clear visual hierarchy between statuses

### C. Layout & Spacing Issues
1. **Home page sections**
   - Hero: white background with overlay and brand grid
   - Stats section: white background with arbitrary borders
   - Process section: `bg-[#f9fbfc]` (barely different from white)
   - Manifesto section: gradient from green to blue (premium feel but contrast concerns)
   - Footer: different gradient altogether

2. **Glass card overuse**
   - `.glass-card` has complex gradient + border + shadow
   - Applied with inconsistent context (sometimes on dark, sometimes light background)
   - Reduces contrast further

### D. Button State Problems
1. **Default states often unclear**
   - Links styled as buttons sometimes use just color change
   - Some buttons have `hover:scale-[1.02]` (subtle), others use `hover:bg-[#14552f]` (strong)
   - No focus state (keyboard navigation)
   - No active/pressed state
   - Disabled state uses just `opacity-70` (not clear it's disabled)

2. **CTA hierarchy confused**
   - "Order Now" is green (primary)
   - "Learn How It Works" is outlined (secondary)
   - "See Full Process" is blue (secondary but different from outlined)
   - "Request a Quote" is green (but sometimes in context appears as tertiary)

---

## 2. DESIGN SYSTEM: Semantic Color Tokens

### Primary Surfaces
```
--surface-bg: #FFFFFF          (Page/section background)
--surface-card: #F8FAFB        (Card/box background, slightly off-white)
--surface-input: #FFFFFF       (Form input background — should be white for clarity)
--surface-dark: #111111        (Dark mode alternative)
--surface-dark-card: #1a1a1a   (Dark card alternative)
```

### Text Colors
```
--text-primary: #111111        (Headings, primary text — dark charcoal)
--text-secondary: #5a6b68      (Body text, secondary info — muted slate)
--text-tertiary: #8b9995       (Captions, hints, disabled — lighter muted)
--text-inverse: #FFFFFF        (Text on dark backgrounds)
--text-inverse-secondary: #E0E0E0  (Secondary text on dark backgrounds)
```

### Brand Colors
```
--brand-primary: #1A6B3C       (Green — main CTA, icons, accents)
--brand-primary-hover: #14552f (Darker green for hover states)
--brand-primary-light: #E8F4F0 (Light green background for subtle accents)

--brand-secondary: #1B4F8A     (Blue — secondary CTA, supporting elements)
--brand-secondary-hover: #163f6e (Darker blue for hover)
--brand-secondary-light: #EBF2F9 (Light blue background)
```

### Functional Colors
```
--color-success: #059669       (Green for success states — from emerald-600)
--color-warning: #D97706       (Amber for warnings)
--color-error: #DC2626         (Red for errors — from red-600, NOT #E63027)
--color-info: #0284C7          (Blue for info)
```

### Accent & Highlights
```
--accent-gold: #F5C400         (Yellow/gold for plastic category highlight — use sparingly)
--accent-gold-muted: #FDF3C7   (Very light yellow for light backgrounds)
```

### Borders & Dividers
```
--border-light: #E5E7EB        (Light gray border — slate-200)
--border-medium: #D1D5DB       (Medium gray border — slate-300)
--border-dark: #6B7280         (Dark gray border — slate-500)
--border-brand: #1A6B3C        (Brand green border for focus states)
```

### Backgrounds (Subtle)
```
--bg-highlight: #F9FAFB        (Very subtle background highlight)
--bg-hover: #F3F4F6            (Very subtle hover background)
--bg-disabled: #F3F4F6         (Disabled element background)
```

---

## 3. SITE VISUAL CLEANUP: Route-by-Route

### Global Changes (globals.css)
- **Simplify body background**: Remove complex radial gradients, use clean white
- **Improve .glass-card**: Make less intense, ensure readable text on top
- **Enhance inputs**: White background, clear borders, visible placeholder text
- **Add semantic utilities**: focus states, disabled states, link underlines
- **Ensure all interactive elements have visible focus states**

### Home Page (app/page.tsx)
1. **Hero section**: White background is good, keep clean backgrounds
2. **Stats section**: Ensure yellow numbers have good contrast, darken background intent
3. **Products section**: Ensure card text is readable on all backgrounds
4. **How It Works section**: Light gray OK but ensure border thickness is consistent
5. **Why Choose section**: Same card consistency
6. **Manifesto section**: Keep gradient but ensure text contrast is WCAG AA
7. **Final CTA section**: Ensure white text on gradient has sufficient contrast

### Layout (app/layout.tsx)
- Remove global dark background override — allow CSS to control
- Navbar: Ensure sticky state uses clear white with minimal transparency
- Footer: Use consistent white or very light background with proper text hierarchy

### Navbar (components/layout/navbar.tsx)
- White background with blue-ish tint OK
- Ensure active link color matches brand primary
- Order Now button should have clear focus state
- Mobile menu should have clear visual separation

### Footer (components/layout/footer.tsx)
- Change gradient to solid white or very light neutral
- Ensure all text is dark enough to read
- Social icons should use brand colors thoughtfully, not red for Instagram
- Links should underline on hover

### Contact Page (app/contact/page.tsx)
- Ensure form fields are legible
- Remove murky backgrounds from inputs
- Make the contact info sidebar visually distinct from form

### Contact Form Component (components/contact/contact-form.tsx)
- **Urgent**: Fix input visibility
- Input labels should be dark (--text-primary)
- Input text should be dark (--text-primary)
- Placeholders should be visible (--text-tertiary)
- Focus states must be obvious
- Error text should use --color-error (not red-400)
- Success message styling needs review

### Product Pages
- **Product Filter Grid**: Ensure colored backgrounds don't reduce contrast
- **Product Detail Page**: Specs table must be readable
- **Product Cards**: Ensure hero image areas don't interfere with text

### About Page (app/about/page.tsx)
- Remove "coming soon" placeholder text
- Make Before/After icons properly centered and visible
- Ensure story section background is appropriate
- Mission/values cards should use consistent colors

### How It Works (app/how-it-works/page.tsx)
- Step numbers should be highly visible
- Timeline border color should be visible (currently `#d7e7dc` — too light)
- Ensure all text meets contrast minimums

### Why Us (app/why-us/page.tsx)
- Card grids should be consistent
- Buyer persona cards text should be dark enough
- Star ratings (gold) should be readable

### Legal Pages (privacy-policy, terms)
- **Privacy Policy**: Dark text, white background — currently OK
- **Terms**: **PROBLEM — white text on dark seems OK but check contrast**
  - Adjust if needed for WCAG compliance
- Make both pages look intentionally polished, not neglected

---

## 4. COMPONENT-SPECIFIC FIXES

### Color Replacement Map
```
Old Pattern → New Pattern
#3d4f46 (dark border) → var(--border-light)
#b8c7bf (light text) → var(--text-tertiary)
rgba(23, 32, 27, 0.92) (dark bg) → var(--surface-input: white)
#e63027 (red) → var(--color-error)
#f5c400 (yellow) → var(--accent-gold) [use sparingly]
```

### Focus & Disabled States
```css
/* Focus state (should apply to all interactive elements) */
:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* Disabled state */
:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: var(--bg-disabled);
}
```

---

## 5. WCAG Compliance Checklist

- [ ] All text has contrast ≥ 4.5:1 (AA) for body text
- [ ] All text has contrast ≥ 3:1 (AA) for large text (18px+)
- [ ] All interactive elements have focus indicators
- [ ] Buttons have visible active/pressed states
- [ ] Color is not the only way to indicate state
- [ ] Placeholder text is visible but distinguished from actual input
- [ ] Error messages are associated with form fields
- [ ] All link text is distinguishable (underline or color + other indicator)

---

## 6. Implementation Priority

**CRITICAL (Do First):**
1. Update CSS variables in globals.css
2. Fix input field styling (visibility + contrast)
3. Fix form label and error text colors
4. Ensure all text on colored backgrounds meets contrast

**HIGH (Should Do):**
1. Remove placeholder "coming soon" text from About
2. Add focus states to all buttons and links
3. Make footer background neutral and ensure text hierarchy
4. Fix legal pages styling
5. Ensure consistent button states across all pages

**MEDIUM (Nice to Have):**
1. Refine glass-card styling
2. Add subtle hover states
3. Improve disabled button appearance
4. Enhance timeline border visibility

---

## 7. Color Tokens to Add to globals.css

All should use CSS variables for easy future maintenance.
