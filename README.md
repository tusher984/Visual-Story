# Visual Story 2026 — package website

A two-page static site for the Visual Story price list. No build step, no
dependencies. Open `index.html` in a browser, or upload the whole folder to any
host.

| File | What it is |
| --- | --- |
| `index.html` | The website: hero, package catalogue, terms, contact |
| `facebook-kit.html` | Seven ready-to-paste Facebook posts, generated from the same data |
| `assets/js/packages.js` | **All prices and package contents live here** |
| `assets/js/site.js` | Builds the website. No need to edit. |
| `assets/js/facebook-kit.js` | Builds the Facebook posts. No need to edit. |
| `assets/css/style.css` | All styling |
| `assets/img/` | Your photographs go here |

## Changing a price

Open `assets/js/packages.js`, find the package, change the `price:` number.
Write it without a comma or a taka sign — `price: 12500`, not `৳12,500`. Save,
reload the page. The website, the price ranges in "Prices at a glance" and the
Facebook posts all update together.

To change what a package includes, edit its `includes:` list. Each line in that
list becomes one bullet on the site and one bullet in the Facebook post.

## Adding your photographs

The site is designed to work with or without photos. Empty picture frames show
the filename they are waiting for, so nothing looks broken while you gather
images. Save these files into `assets/img/` and they appear automatically:

- `couple.jpg` — a couple portrait, portrait orientation (4:5 works best)
- `candid.jpg` — a candid wedding moment, portrait orientation
- `social.jpg` — the image Facebook shows when someone shares the link
  (landscape, 1200 × 630)

Export at roughly 1600 px on the long edge and under 400 KB each so the page
stays fast on mobile data.

## Publishing it

Any static host works. Two free options:

**GitHub Pages** — push this folder to a GitHub repository, then in the
repository settings open Pages and set the source to your main branch. The site
appears at `https://<your-username>.github.io/<repository>/`.

**Netlify Drop** — go to app.netlify.com/drop and drag this folder onto the
page. You get a live URL immediately.

Then add that URL to the Facebook page under Edit Page Info → Website, so the
price list is one tap from the page.

## Using the Facebook post kit

Open `facebook-kit.html` and copy the posts one at a time.

Post 1 is the menu — four category names with price ranges, 462 characters.
Publish that first and pin it to the top of the page. Posts 2 to 7 hold the
detail, and are meant to go up over the following days rather than all at once.
A single post containing all eighteen packages stops being read halfway down,
which is why they are split.

Facebook strips bold and italic from pasted text, so every post is plain text
with `•` bullets that survive the paste.

## Notes on the design

One typeface, black text on white, hairline rules between things. There is no
chart, no animation and nothing to click open — every package shows its price
and its full list of inclusions at all times, because a price list that hides
prices behind a click is a price list people leave.

The four groups appear twice on purpose: once as a short "Prices at a glance"
list near the top, so a visitor can see the whole shape of your pricing in one
screen, and then again in full further down. Colour is left entirely to your
photographs.
