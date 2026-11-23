# Koko Bakehouse

Live: https://baker.amtradersindia.in

Repository: https://github.com/rahulv97/koko-bakehouse

A mobile-first, one-page landing page for a fictional neighbourhood bakery. Built with semantic HTML, CSS and a small JavaScript enhancement. No framework, dependencies, build step, backend, analytics or external font requests.

## Run locally

Open `dist/index.html` directly, or run `python3 -m http.server 8000 --directory dist` and visit http://localhost:8000.

## Choices and shortcuts

- Three main sections: bakery introduction, four-item menu, and WhatsApp ordering.
- Responsive layout, visible keyboard focus, skip link, descriptive image alternative text and reduced-motion support.
- A single locally stored, compressed placeholder photograph from [Unsplash](https://images.unsplash.com/photo-1509440159596-0249088772ff). The page makes no third-party asset requests.
- System fonts keep loading fast. JavaScript only updates the footer year; navigation and ordering work with JavaScript disabled.
- Menu items, portions and naira prices are illustrative. No unprovided delivery fees, hours or service areas are promised.
- The requested placeholder `0800 000 0000` is normalized to `2348000000000` for WhatsApp, assuming Nigeria from the brief's food context. This is a non-operational placeholder. Replace the number in `dist/index.html` with the bakery's real international number before accepting orders.
- The order link contains an encoded message with fields for items, quantities, address and preferred weekend day. Customers complete those fields in WhatsApp; no message is sent automatically.

## Files

- `dist/index.html`: content and accessible structure
- `dist/styles.css`: mobile responsive styling
- `dist/script.js`: progressive enhancement
- `dist/assets/bread.jpg`: local placeholder photo

## GitHub and public hosting

The `dist` folder is ready for any static host. For GitHub Pages, publish the contents of `dist` using GitHub Actions or a Pages branch. The live site is hosted on CyberPanel / OpenLiteSpeed at `baker.amtradersindia.in`, with HTTPS. Upload the contents of `dist` into `/home/baker.amtradersindia.in/public_html/` to deploy an update. No server credentials are included in this repository.

## Suggested submission note

“I used plain HTML, CSS and JavaScript to keep the page lightweight and easy to maintain. The layout adapts for phones, and the order button opens WhatsApp with a pre-filled message. Prices and the photograph are placeholders; the requested trial phone number needs replacing before launch.”

## Validation

JavaScript syntax, four menu items, unique HTML IDs, internal navigation, and the encoded WhatsApp message were checked. All four live assets returned HTTPS 200 and matched the local files exactly.
