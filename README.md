# Viacheslav Iablochnikov — GitHub Pages personal website

This repository is a **static GitHub Pages site**. It is designed to be easy to understand and easy to deploy:

- `index.html` = page structure and content
- `assets/css/styles.css` = visual style, spacing, colors, layout, responsive behavior
- `assets/js/main.js` = smooth-scroll navigation, mobile menu, pause-when-offscreen video playback
- `assets/media/` = all local images and video used by the site
- `assets/docs/` = CV PDF
- `.nojekyll` = makes GitHub Pages serve the site as plain static files

## 1) Fastest way to publish the site

### Option A — publish as your main personal site
If your GitHub username is `slava-qw`, create a repository named:

```text
slava-qw.github.io
```

Then upload **everything in this folder** to the root of that repository.

### Option B — publish as a project site
If you want to test first in a different repository, create any repository name such as:

```text
personal-website
```

Then you can publish from the root or from `/docs` in GitHub Pages settings.

For a personal main domain, Option A is the right one.

## 2) Local preview before uploading

### Simple local preview
From inside this folder run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is better than double-clicking `index.html`, because a local server more closely matches GitHub Pages behavior.

## 3) Upload with Git

If you want to publish from the terminal:

```bash
cd slava-qw-github-pages-site

git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin git@github.com:slava-qw/slava-qw.github.io.git
git push -u origin main
```

If you prefer HTTPS instead of SSH, use:

```bash
git remote add origin https://github.com/slava-qw/slava-qw.github.io.git
```

## 4) Enable GitHub Pages

After the files are on GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Open **Pages** in the sidebar.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**.
6. Select folder **/(root)**.
7. Save.

Your site should appear at:

```text
https://slava-qw.github.io/
```

## 5) Where to edit the content

### Main text content
Open:

```text
index.html
```

The page is organized by sections with clear IDs:

- `#about`
- `#throughline`
- `#news`
- `#projects`
- `#experience`
- `#publications`
- `#awards`
- `#contact`

### Styling
Open:

```text
assets/css/styles.css
```

The top of the file contains the main color variables:

```css
:root {
  --accent: #1993f0;
  --accent-2: #19a9f0;
}
```

Change those two first if you want to shift the color scheme.

### JavaScript behavior
Open:

```text
assets/js/main.js
```

This file controls:

- Light / dark / auto theme buttons
- Mobile navigation menu
- Active section highlighting while scrolling

## 6) How to replace or add content later

### Add a new project card
Copy one of the existing `<article class="project-card"> ... </article>` blocks in `index.html` and update:

- project title
- summary paragraph
- bullet points
- links
- media file paths in `assets/media/`

### Replace the CV PDF
Overwrite:

```text
assets/docs/CV_Viacheslav_Iablochnikov_research.pdf
```

No HTML changes are needed if you keep the same file name.

### Replace images or video
Put the new files into:

```text
assets/media/
```

Then update the file names in `index.html`.

## 7) If you want a custom domain later

Typical flow:

1. Buy a domain from a registrar.
2. In GitHub repository **Settings → Pages**, add the custom domain.
3. Configure DNS at your domain provider.
4. Wait for DNS to propagate.
5. Turn on HTTPS after it becomes available.

## 8) Recommended next improvements

Good next upgrades after first launch:

- add Google Scholar link
- add a profile photo if you want one
- add a dedicated “Publications” page later
- add project-specific subpages under folders like `/projects/kinemask/`
- add analytics only after the site is stable
- add a custom domain once the default `github.io` version is working

## 9) Notes about design

The layout intentionally follows a classic academic homepage pattern:

- compact top navigation
- strong hero section with bio and links
- recent news / milestones
- selected projects
- publications and talks
- awards, skills, and contact

The code is original and written specifically for your materials, while taking inspiration from the overall structure and visual minimalism of the reference sites you shared.
