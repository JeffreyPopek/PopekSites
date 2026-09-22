# Popek Sites

A responsive, single-page freelance web development website. Plain HTML, CSS, and JavaScript, with no build step, packages, external fonts, or runtime dependencies.

## Preview

Open `index.html` directly in your browser. All styling, navigation, and JavaScript work from the local file.

For automatic refresh while editing, open this folder in VS Code, install the Live Server extension, and choose **Open with Live Server** on `index.html`.

## Files

- `index.html`: page content, navigation, projects, services, about, and contact.
- `styles.css`: design tokens, layout, project placeholder artwork, and responsive styles. Mobile and tablet adjustments are at the bottom.
- `script.js`: updates the footer year. The site remains usable without JavaScript.
- `favicon.svg`: small browser-tab icon.

## Customize before publishing

The contact address is `jeffreypopek@gmail.com`, taken from Jeffrey’s public portfolio. Change both the visible address and `mailto:` URL in `index.html` if you prefer a business address.

All four project previews are explicitly labeled placeholders. Their artwork is decorative, not actual screenshots or client branding. The descriptions are draft placeholders; services and live URLs are intentionally unverified. Replace these with accurate details before publishing.

To add a screenshot, create an `images` folder and replace the corresponding `<div class="project-preview ...">...</div>` with:

```html
<img class="project-preview" src="images/project-name.webp"
     alt="Describe what the actual project screenshot shows"
     width="990" height="600" loading="lazy">
```

Export screenshots at a consistent ratio (990 × 600 works well). Replace the services text and the pending site-link `<span>` with a real link:

```html
<a class="pending-link" href="https://your-verified-project-url.com">
  Visit site <span aria-hidden="true">↗</span>
</a>
```

The fourth card is reserved for a future project. Colors and content width are defined at the top of `styles.css`. The layout uses system fonts and a charcoal theme. The compact header stays visible on desktop and mobile, and section links scroll smoothly with clearance for the header. Reduced-motion preferences disable smooth scrolling. There is no menu script to maintain.

## Publish

Upload the files together to any static web host, preserving the relative paths. No server-side code or build command is required. The contact link opens the visitor’s email application; there is no form backend.
