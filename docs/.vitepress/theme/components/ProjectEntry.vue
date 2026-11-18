<script setup lang="ts">
import { computed } from 'vue'
import { targetHash } from '../targetHash'

const props = defineProps<{
  /** Used in links: /projects/#<id>. Keep it stable once other pages link to it. */
  id: string
  title: string
  /** Short stage label, e.g. "In progress". */
  status?: string
  /** Optional second label, e.g. "Collaborative" or "with Jane Doe". */
  note?: string
}>()

const isTarget = computed(() => targetHash.value === props.id)
</script>

<template>
  <!-- The id sits on an element without padding so link scrolling lands exactly on it. -->
  <article :id="id" class="project" :class="{ 'is-target': isTarget }">
    <div class="project-card">
      <h3 class="project-title">
        {{ title }}
        <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to “${title}”`">&#8203;</a>
      </h3>
      <p v-if="status || note" class="project-meta">
        <span v-if="status" class="project-label project-status">{{ status }}</span>
        <span v-if="note" class="project-label project-note">{{ note }}</span>
      </p>
      <div class="project-body">
        <slot />
      </div>
    </div>
  </article>
</template>

<style scoped>
.project {
  margin: 20px 0;
}

.project-card {
  padding: 22px 26px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  transition:
    border-color 0.3s,
    background-color 0.3s;
}

.project.is-target .project-card {
  border-color: var(--vp-c-brand-1);
  background-color: var(--sa-c-target-bg);
}

.project-title {
  margin: 0;
  font-size: 21px;
  line-height: 1.3;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 0;
  line-height: 1;
}

.project-label {
  padding: 5px 10px;
  border-radius: 999px;
  font-family: var(--vp-font-family-base);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.project-status {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.project-note {
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-default-soft);
}

.project-body :deep(p),
.project-body :deep(li) {
  font-size: 17px;
  line-height: 1.65;
}

.project-body :deep(> :first-child) {
  margin-top: 14px;
}

.project-body :deep(> :last-child) {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .project-card {
    padding: 18px 18px 20px;
  }

  .project-title {
    font-size: 19px;
  }
}
</style>
