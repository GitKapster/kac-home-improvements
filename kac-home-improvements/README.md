# K.A.C Home Improvements LTD — Website

A modern, mobile-friendly website for K.A.C Home Improvements, a family-run
building and home improvements company in Bicester, Oxfordshire.

Built as a plain static site — just HTML, CSS and a little JavaScript.
No frameworks, no build step. Open it in VSCode and edit it directly.

## Pages

| File                  | Page                          |
|-----------------------|-------------------------------|
| `index.html`          | Home                          |
| `kitchens.html`       | Kitchens                      |
| `bathrooms.html`      | Bathrooms                     |
| `furniture.html`      | Bespoke Furniture             |
| `refurbishments.html` | Home Refurbishments           |
| `gallery.html`        | Gallery                       |
| `contact.html`        | Contact (with enquiry form)   |

## Folders

- `css/style.css` — all the styling for every page (colours, fonts, layout)
- `js/main.js` — the mobile menu and scroll-in animations
- `images/` — put project photos here

## How to view it

Double-click `index.html` to open it in your browser.
Or, in VSCode, install the **Live Server** extension and click "Go Live".

## How to add real photos

Throughout the site you'll see grey boxes labelled things like
"Finished kitchen photo". These are placeholders. To replace one:

1. Put your photo in the `images/` folder (e.g. `images/kitchen-1.jpg`).
2. Find the matching placeholder in the HTML, which looks like this:
   ```html
   <div class="img-slot"><span class="slot-label">Finished kitchen photo</span></div>
   ```
3. Replace it with:
   ```html
   <div class="img-slot"><img src="images/kitchen-1.jpg" alt="Modern fitted kitchen" /></div>
   ```

The photo will automatically fill the box and stay the right shape.

## Turning the contact form on

The contact form is ready but needs a free service to send the emails:

1. Go to [formspree.io](https://formspree.io) and make a free account.
2. Create a form — it gives you an ID (something like `xyzabcd`).
3. Open `contact.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your real ID. Done.

## Changing colours or fonts

Everything is set at the top of `css/style.css` under "DESIGN TOKENS".
Change a value there once and it updates across the whole site.

## Putting it online (GitHub Pages — free)

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Source", choose your main branch and the root folder.
4. GitHub gives you a live link a minute later.

(To use the real domain `kachomeimprovements.com`, point the domain's DNS at
GitHub Pages and add it under Settings → Pages → Custom domain.)
