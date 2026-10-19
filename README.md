# Su — Retro Anime Portfolio

The existing built website files at the repository root are preserved. The complete editable React/Vite project is in [`source/`](source/), including the application source, illustration asset, dependency lockfile, and configuration.

The site is a static front end, so GitHub Pages can serve it without an application server or database. To build locally, use Node.js 22 and pnpm 10.18.0:

```sh
cd source
corepack enable
pnpm install --frozen-lockfile
pnpm build:static
```

The output is `source/dist/public/`. The GitHub Actions workflow at `.github/workflows/deploy-portfolio-pages.yml` builds this folder and deploys it to GitHub Pages when changes are pushed to `main`, or when manually run from Actions. Vite uses relative asset paths for the repository’s `/su-portfolio/` Pages URL.

The included portrait is a clearly labeled temporary fictional illustration, not a photograph of Su. No secrets or `.env` files are included.

- Current Manus-hosted portfolio: https://suportfolio-nd2k8wzy.manus.space/
- GitHub Pages site: https://suwork222-ar.github.io/su-portfolio/
