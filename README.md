# Personal page

A two-page [VitePress](https://vitepress.dev) site: the research statement (home page) and the working projects it links to.

## Run it

```sh
npm install        # first time only
npm run dev        # live preview at http://localhost:5173, updates as you save
npm run build      # writes the finished site to docs/.vitepress/dist
npm run preview    # serves that built site, to check it before publishing
```

## Edit it

| To change                                              | Edit                                 |
| ------------------------------------------------------ | ------------------------------------ |
| Summary, research statement                            | `docs/index.md`                      |
| Name, interests and links beside the portrait          | the `profile:` block atop `docs/index.md` |
| Projects                                               | `docs/projects/index.md`             |
| Portrait                                               | replace `docs/public/portrait.jpg`   |
| Navigation bar, site title, footer, social icons       | `docs/.vitepress/config.mts`         |
| Colors and fonts                                       | `docs/.vitepress/theme/style.css`    |

### Linking the statement to a project

Each project on the projects page has an `id`:

```md
<ProjectEntry id="ceo-succession" title="…" status="In progress">

Description, written in ordinary Markdown.

</ProjectEntry>
```

Link to it from anywhere with `[link text](/projects/#ceo-succession)`. A visitor who follows the link lands on that project, which is highlighted. Keep the blank lines inside `<ProjectEntry>`, and keep an `id` unchanged once something links to it.

`status` and `note` are the two small labels under the title; both are optional.

## Publish it

The site is live at <https://alvinnnna.github.io>. Every push to `main` rebuilds and redeploys it through `.github/workflows/deploy.yml`, usually within a minute:

```sh
git add -A
git commit -m "Describe the change"
git push
```

Progress and any build errors show under the repository's Actions tab.
