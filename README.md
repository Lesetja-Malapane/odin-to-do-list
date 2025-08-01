# templaterepo

A ready-to-use project starter template designed for rapid development and clean architecture. Easily clone, fork, or generate a new repository using this template to kickstart your own projects with best practices in place.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Build for development:
   ```sh
   npx webpack --mode development
   ```

3. Build for production:
   ```sh
   npx webpack --mode production
   ```

## Scripts

- `npm run build` – Builds the project using webpack.
- `npm run dev` – Starts the webpack development server.
- `npm run deploy` – Deploys the `dist` folder to `gh-pages` branch.

## Features

- Webpack configuration for HTML, CSS, and asset management
- Ready for rapid prototyping and clean architecture
- Easily extendable for your own needs

## File Structure

```
templaterepo/
├── src/                # Source files (JS, CSS, assets)
│   ├── index.js
│   └── styles.css
├── dist/               # Production build output
├── public/             # Static files (e.g., index.html)
├── webpack.config.js   # Webpack configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Tips

- Use `npx webpack --mode development` for development builds.
- Use `npx webpack --mode production` for optimized production builds.
- Customize the template by editing files in the `src/` and `public/` folders.

## License

ISC