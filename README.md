# Visual Story 2026 — package website

A one-page static site for the Visual Story price list. No build step, no
dependencies. Open `index.html` in a browser, or upload the whole folder to any
host.

| File | What it is |
| --- | --- |
| `index.html` | The website: hero, package catalogue, experience, terms, contact |
| `assets/js/packages.js` | **All prices and package contents live here** |
| `assets/js/site.js` | Builds the page. No need to edit. |
| `assets/css/style.css` | All styling |
| `assets/img/logo.png` | The Visual Story logotype, recoloured for the dark page |

## Changing a price

Open `assets/js/packages.js`, find the package, change the `price:` number.
Write it without a comma or a taka sign — `price: 12500`, not `৳12,500`. Save,
reload the page. The package entry, the range beside its group heading and the
price index at the top of the page all update together.

To change what a package includes, edit its `includes:` list. Each line becomes
one bullet on the site.

Keep `includes` to what makes that package different from the one below it in
price — crew, hours, outfits, album. Editing, high-resolution delivery
and unlimited coverage are promised once on the page itself, so repeating them
inside every package only makes the list harder to read.

Two standing rules for the price list: no package is priced below ৳5,000, and no
package includes loose prints or enlargements — every package is delivered as
digital files, and only the larger ones add a photo album.

## Publishing it

Any static host works. Two free options:

**GitHub Pages** — push this folder to a GitHub repository, then in the
repository settings open Pages and set the source to your main branch. The site
appears at `https://<your-username>.github.io/<repository>/`.

**Netlify Drop** — go to app.netlify.com/drop and drag this folder onto the
page. You get a live URL immediately.

Then add that URL to the Facebook page under Edit Page Info → Website, so the
price list is one tap from the page.

## Notes on the design

The page is a dark room and the type is the print. Instrument Serif, a high-contrast
display serif, names things — the headline and the four group headings. Archivo, a
sans, does everything else. Prices are the only warm thing on the page: they are set
in safelight amber, in tabular figures, hanging in a right-aligned column the way a
good menu sets them, so every number can be found and compared without reading a
word.

Warm print-white on near-black, hairline rules, no boxes and no tinted bands. There
is no chart, no animation and nothing to click open — every package shows its price
and its full list of inclusions at all times, because a price list that hides prices
behind a click is a price list people leave.

Nothing on the page is said twice. Each package lists only what separates it from
the next one down, the three universal promises are stated once under the price
index, the film and trailer are promised once by the cinematography section rather
than by all seven packages inside it, and the group with a single package shows its
price once instead of as both a range and an entry.

The four groups appear twice on purpose: as a four-line price index in the first
screen, so a visitor sees the whole shape of your pricing immediately, and then
again in full further down. There are no photographs on the page, so nothing
competes with the work you post on Facebook.
