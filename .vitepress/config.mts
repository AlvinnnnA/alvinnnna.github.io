import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Sihan (Alvin)",
  lastUpdated: true,
  description: "Personal Page (Test)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research', link: '/research'},
      {text: 'CV', link: "/CV"},
      {text: 'Hobbies', link: "/hobbies"}
    ],

    footer: {
      message: 'Powered by VitePress.',
      copyright: 'Copyright © A Sihan'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
