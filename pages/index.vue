<script setup lang="ts">
  const { $client } = useNuxtApp()

  const posts = await $client.posts.getAllPosts.query()
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`post/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
