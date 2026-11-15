# Viacheslav Iablochnikov — academic website

Static website for `slava-qw.github.io`, with no framework or build step.
Updated November 2026.

## Preview locally

From this directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Opening `index.html` directly also works for the
static content; a local server gives the most accurate video and PDF preview.

## Files

- `index.html`: biography, news, six compact research cards with expandable
  abstracts/results, earlier work, and background.
- `blog.html`: separate blog with clearly labelled planned collections; no posts yet.
- `assets/css/styles.css`: typography, responsive layout, comparison galleries.
- `assets/js/main.js`: accessible mobile navigation and visibility-aware video
  playback, including support for reduced-motion preferences.
- `assets/media/research/`: WebP exports of existing research results.
- `assets/docs/`: the latest supplied CV and six-page project portfolio.
- `.nojekyll`: plain static serving on GitHub Pages.
- `data/`: ignored personal working material; not website content.

## Updating research

Each current project has a stable HTML anchor: `r3-cache`, `splinecache`,
`kinemask`, `beyond-hands`, `layoutfusion`, or `physalign`.
Edit its status, title, author list, contribution and evidence together.
Keep accepted, submitted, under-review and ongoing statuses distinct.
Future world-model directions belong in the biography;
they are not outcomes of the existing projects.

Comparison labels are HTML. The R³-Cache gallery uses the final target-10
Qwen-Image examples and shared prompt/noise within each row. Native sampling
has 10 steps; the full reference has 50. Do not relabel these images as a
different experimental configuration. Preserve complete frames and their
aspect ratios. On narrow screens, comparisons scroll horizontally.

The CV download is an unchanged copy of the latest supplied document. Its
R³-Cache entry still says "targeting"; the website and portfolio use the newer
applicant-confirmed "Submitted to CVPR 2027" status. Reconcile the CV separately
when updating the CV if complete consistency is needed.

## Revision records

Local source analysis, the original-file backup, asset provenance and browser
screenshots/checks are outside this repository at:

`D:/beyound_hands/output/website_review_20261115/`

Research-statement application letters and private review material are not
bundled into the site.

## Compact layout revision

Small cover images accompany each research card. Click “Details & results” or
the cover to open its abstract, contribution, and full comparison figures.
The native disclosure works with keyboard navigation and without JavaScript.
The red biography notice advertises a search for summer 2027 research internships.
Blog collections are explicit placeholders, with no invented posts or dates.
