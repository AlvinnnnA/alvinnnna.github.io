import { defineConfig } from 'vitepress'

// The name shown in the navigation bar, browser tab and footer.
const name = 'Sihan A'

export default defineConfig({
  lang: 'en-US',
  title: name,
  description:
    'Sihan A studies the intersection of strategic leadership and corporate social evaluations: how contested external audiences shape governance and strategy inside the firm.',

  // If the site is served from a sub-path (for example
  // https://username.github.io/personalpage/), set base to '/personalpage/'
  // and add the same prefix to the favicon href below.
  base: '/',

 // head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Working projects', link: '/projects/' },
    ],

    // Single-column pages: no sidebar, no "On this page" outline.
    aside: false,
    outline: false,

    // Icons shown at the right of the navigation bar. Uncomment and edit.
    // socialLinks: [
    //   { icon: 'linkedin', link: 'https://www.linkedin.com/in/your-handle' },
    //   { icon: 'github', link: 'https://github.com/your-handle' },
    // ],

    footer: {
      copyright: `© ${new Date().getFullYear()} ${name}, Built with Vitepress`,
    },
  },
})
