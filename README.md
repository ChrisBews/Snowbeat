# Snowbeat

Version 6 of the Snowbeat website, which can be seen live at [https://snowbeat.uk](https://snowbeat.uk). Snowbeat has been my personal branding for many years, an online identity of sorts. It has been used for my personal websites since before I had a career.

This website is built with Astro and its MDX plugin to allow for easier content management going forward. It uses CSS and TypeScript, and makes use of PostCSS for shared media queries. React was not used in this project as there wasn't really anything that would have benefited from it, while Astro itself allows for easy componentisation and provides JSX-like syntax.

## Requirements

- Node >= 22.12.0
- NPM is expected on this project, rather than Yarn

## Setup

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:4321/` in your browser to view

## Linting

`npm run lint:check` for code quality, and `npm run prettier:check` for formatting. Both have `:fix` variants if needed.

## Build

`npm run build` will build the site. The resulting files are found in the `dist` folder. Running this locally is just to check for potential variance between the hot-reloading dev version. Use `npm run preview` to actually view the built site in your browser. This way you can view the compiled site, including the results of CSS minification, etc. to spot any issues.

Note that a GitHub Actions workflow is set up to build the site in CI and deploy it to GitHub Pages.

## Content

New projects are just added via new `mdx` files. These live in the `src/content/` folder. As they are mdx files, pages can be put together using Astro components directly, which allows for project pages to be more dynamic on a per-project basis.

Frontmatter in each mdx file is used to populate the homepage lists.

## AI?

No AI was used to make this website. I am not against AI and often make use of it on other projects, sort of like a coding assistant I guess, but as this is my personal website I felt it should be hand-coded. It's also not a very complicated website anyway, so it would have saved less time than on other more complex projects. Additionally - it's just fun to hand-code something!
