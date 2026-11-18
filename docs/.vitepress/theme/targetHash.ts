import { onMounted, onUnmounted, ref } from 'vue'
import { onContentUpdated } from 'vitepress'

/**
 * The id after the "#" in the address bar, e.g. "ceo-succession" for
 * /projects/#ceo-succession. A project entry highlights itself when it matches,
 * so a visitor who follows a link from the research statement can see which
 * project it pointed to.
 *
 * It starts empty and is only filled in once the page is running in the
 * browser, so the server-rendered HTML and the first client render agree.
 */
export const targetHash = ref('')

/** Keeps `targetHash` in sync with the address bar. Call once, from the layout. */
export function trackTargetHash() {
  const sync = () => {
    targetHash.value = decodeURIComponent(window.location.hash.slice(1))
  }

  onMounted(() => {
    sync()
    window.addEventListener('hashchange', sync)
  })
  onUnmounted(() => window.removeEventListener('hashchange', sync))

  // Fires after VitePress swaps in a new page without a full reload.
  onContentUpdated(sync)
}
