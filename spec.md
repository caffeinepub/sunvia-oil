# Sunvia.Oil — B2B Export Website

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-section single-page marketing website for Sunvia.Oil by SBZ ENTERPRISES
- Inquiry/contact form (name, company, country, email, phone, message, packaging preference) stored in backend
- All sections: Hero, Key Highlights, About, Product Specifications, Packaging Options, Private Label/OEM, Applications, Quality Assurance, Contact

### Modify
N/A

### Remove
N/A

## Implementation Plan

**Backend:**
- `InquiryForm` type: name, company, country, email, phone, message, packagingInterest, timestamp
- `submitInquiry(form: InquiryForm): async Result` — store inquiry
- `getInquiries(): async [InquiryForm]` — admin read (optional)

**Frontend Sections:**
1. **Navbar** — Sunvia.Oil logo/wordmark, nav links (About, Products, Packaging, Private Label, Applications, Contact), sticky, CTA button "Request Quote"
2. **Hero** — Full-width, title "Premium Refined Sunflower Oil — Bulk Supply Worldwide", subtitle, "Request Bulk Quote" CTA button, hero image
3. **Key Highlights** — 8 highlight cards with icons
4. **About** — Company/product description, key benefits list
5. **Product Specifications** — Spec table + quality parameters
6. **Packaging Options** — Three categories: Retail, Food Service, Industrial — card grid
7. **Private Label / OEM** — Services list, target audience callout
8. **Applications** — Icon grid of use cases
9. **Quality Assurance** — QC steps
10. **Contact** — Company info (SBZ ENTERPRISES, tagline, email, phone, location) + inquiry form
11. **Footer** — Company name, tagline, quick links, contact details, copyright

**Design:**
- White background, sunflower yellow (#F5C518 / similar) accents
- Clean, corporate, export-grade B2B aesthetic
- Mobile responsive
- No pricing, no checkout
