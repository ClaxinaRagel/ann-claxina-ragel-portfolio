# Ann Claxina Ragel Portfolio

Modern personal portfolio website for Ann Claxina Ragel, built with React and Vite.

## Live URL

When this repository is pushed to `CLaxina/ann-claxina-ragel-portfolio` and GitHub Pages is enabled, the site will be available at:

`(https://claxinaragel.github.io/ann-claxina-ragel-portfolio/)`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a public GitHub repository named `ann-claxina-ragel-portfolio` under the `CLaxina` account.
2. Push this project to the `main` branch.
3. In the repository settings, open **Pages**.
4. Set **Build and deployment** to **GitHub Actions**.
5. The workflow will build and publish the site.

The Vite base path is configured for `/ann-claxina-ragel-portfolio/`.
