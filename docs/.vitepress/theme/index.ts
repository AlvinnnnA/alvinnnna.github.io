import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import '@fontsource-variable/source-serif-4/wght.css'
import '@fontsource-variable/source-serif-4/wght-italic.css'
import './style.css'

import Layout from './Layout.vue'
import ProjectEntry from './components/ProjectEntry.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Makes <ProjectEntry> usable in any Markdown page.
    app.component('ProjectEntry', ProjectEntry)
  },
} satisfies Theme
