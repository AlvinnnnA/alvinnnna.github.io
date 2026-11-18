<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import ProfileCard from './components/ProfileCard.vue'
import { trackTargetHash } from './targetHash'

const { frontmatter } = useData()

trackTargetHash()
</script>

<template>
  <!-- A page with a `profile:` block in its front matter gets the portrait side column. -->
  <DefaultTheme.Layout :class="{ 'has-profile': frontmatter.profile }">
    <template #doc-before>
      <ProfileCard v-if="frontmatter.profile" v-bind="frontmatter.profile" />
    </template>
  </DefaultTheme.Layout>
</template>
