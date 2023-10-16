<script setup lang="ts">
  const { $client } = useNuxtApp()

  const posts = await $client.posts.getAllPosts.query()
</script>

<template>
  <div>
    <NuxtPage />

    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>
