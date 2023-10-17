<script setup lang="ts">
  const { $client } = useNuxtApp()
  const { id } = useId()

  const post = await $client.posts.getPost.query(id)
</script>

<template>
  <div>
    <PostView :post="post" />

    <NuxtLink to="/">All Posts</NuxtLink>
  </div>
</template>
