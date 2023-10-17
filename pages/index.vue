<script setup lang="ts">
  const { $client } = useNuxtApp()

  const posts = await $client.posts.getAllPosts.query()
</script>

<template>
  <div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
