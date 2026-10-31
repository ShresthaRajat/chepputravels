# Cheppu Travels — website starter

A responsive, budget-friendly, enquiry-first website concept for Cheppu Travels, aimed primarily at international visitors interested in Nepal's culture, wildlife, adventure and tailor-made journeys.

## What's included

- Responsive homepage with original Cheppu Travels wordmark treatment
- Destination highlights and experience cards
- Working experience category and duration filters
- Mobile navigation
- Save/favourite interaction on experience cards (front-end only)
- Enquiry form validation and email-draft workflow (requires a real email to be configured)
- FAQ section, basic SEO metadata, Open Graph metadata and semantic page structure
- No simulated live prices, reviews, availability, bookings or payments

## Run locally

1. Extract the ZIP folder.
2. Open `index.html` in a modern browser. For best results, use a local static server such as VS Code Live Server.
3. Images and Google Fonts are loaded from external URLs, so an internet connection is needed for those assets.

## Before launch

1. Replace `ADD-YOUR-REAL-EMAIL-HERE` in `script.js` with the business email address you want to receive enquiries. The current form intentionally does not pretend to send enquiries.
2. Add verified phone/WhatsApp, office address, opening hours, privacy policy and business registration details where appropriate.
3. Confirm all package descriptions, safety guidance, inclusions, prices, cancellation terms and images/usage rights.
4. Replace any image that is unsuitable or whose licence does not meet your requirements. Images currently load from Unsplash source URLs and are not bundled locally.
5. Add a backend form endpoint or form service for reliable enquiry delivery and secure data handling. The current implementation is a static front-end.
6. Add a domain, HTTPS hosting, sitemap.xml, robots.txt, canonical URLs, analytics consent controls and Search Console after launch setup.
7. Run accessibility, mobile, performance and cross-browser tests on the deployed site.

## Project structure

- `index.html` — page content and structure
- `styles.css` — responsive visual system and layout
- `script.js` — search filters, mobile menu, favourites and enquiry-form behaviour

## Important limitations

This is a polished first version for a budget-conscious launch, not a full booking platform. There is no database, admin dashboard, authentication, payment gateway, CRM, transactional email service, live availability API or persistent favourites. The form validates fields but cannot deliver an enquiry until an email address or backend endpoint is configured. Do not collect sensitive information until appropriate privacy and security controls are in place.
