<script setup lang="ts">
import { withBase } from 'vitepress'

// Filled in from the `profile:` block at the top of a page (see docs/index.md).
defineProps<{
  name: string
  /** Path to a picture in docs/public, e.g. "/portrait.jpg". */
  photo: string
  photoAlt?: string
  /** Short lines shown under the name. */
  interests?: string[]
  /** Optional links under the interests, e.g. Email, CV, Google Scholar. */
  links?: { text: string; link: string }[]
}>()

const isExternal = (link: string) => /^https?:/.test(link)
</script>

<template>
  <header class="profile-card">
    <img
      class="profile-photo"
      :src="withBase(photo)"
      :alt="photoAlt ?? `Portrait of ${name}`"
      width="800"
      height="1200"
      fetchpriority="high"
    />
    <div class="profile-id">
      <h1 class="profile-name">{{ name }}</h1>
      <ul v-if="interests?.length" class="profile-interests">
        <li v-for="item in interests" :key="item">{{ item }}</li>
      </ul>
      <ul v-if="links?.length" class="profile-links">
        <li v-for="item in links" :key="item.link">
          <a
            :href="isExternal(item.link) || item.link.startsWith('mailto:') ? item.link : withBase(item.link)"
            :target="isExternal(item.link) ? '_blank' : undefined"
            :rel="isExternal(item.link) ? 'noreferrer' : undefined"
            >{{ item.text }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
/* Phones: a small portrait beside the name, above the text. */
.profile-card {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}

.profile-photo {
  flex: none;
  width: 96px;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  /* The picture is taller than 4:5; keep the face, trim the shirt. */
  object-position: 50% 8%;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.profile-name {
  font-family: var(--sa-font-serif);
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.profile-interests {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 16px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
}

.profile-links a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  text-decoration-color: color-mix(in srgb, currentColor 45%, transparent);
}

.profile-links a:hover {
  text-decoration-color: currentColor;
}

/* Wider screens: a side column that stays in view while the statement scrolls. */
@media (min-width: 768px) {
  .profile-card {
    display: block;
    position: sticky;
    top: calc(var(--vp-nav-height) + 48px);
    margin-bottom: 0;
  }

  .profile-photo {
    width: 100%;
    border-radius: 10px;
  }

  .profile-name {
    margin-top: 20px;
  }
}
</style>
