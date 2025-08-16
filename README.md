# VDS Law Firm Website

Static marketing site for Advocatenkantoor van Dijk–Silos.

## Structure

```
public/
  images/
  index.html
  scripts.js
  styles.css
```

## Development

Install dependencies and run the linter:

```
npm install
npm run lint
```

## Deployment

Pushes to `main` trigger a GitHub Action that lints the code and deploys the
`public/` directory to Cloudflare Pages using `cloudflare/pages-action`.

## Dependabot

Dependabot is configured to keep npm packages and GitHub Actions up to date.
