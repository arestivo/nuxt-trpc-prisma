<script setup lang="ts">
  const { $client } = useNuxtApp()
  const route = useRoute()

  const post = await $client.posts.getPost.query(parseInt(route.params.id.toString(), 10))
</script>

<template>
  <div>
    <PostView :post="post" />

    <NuxtLink to="/">All Posts</NuxtLink>
  </div>
</template>
