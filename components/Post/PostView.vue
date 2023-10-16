<script setup lang="ts">
  defineProps<{ post: RouterOutput['posts']['getPost'] }>()
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<style scoped lang="scss">
  p {
    line-height: 1.5em;
  }
</style>
