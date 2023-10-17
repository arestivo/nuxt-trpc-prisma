<script setup lang="ts">
  const { $client } = useNuxtApp()
  const post = ref<RouterInput['posts']['createPost']>({ title: '', text: '' })

  async function onSubmit() {
    await $client.posts.createPost.query(post.value)
    navigateTo('/')
  }
</script>

<template>
  <div class="post-create">
    <form>
      <label for="title">Title</label>
      <input id="title" v-model="post.title" type="text" />
      <label for="text">Text</label>
      <textarea id="text" v-model="post.text" rows="10"></textarea>
      <button type="submit" @click.prevent="onSubmit">Create</button>
    </form>
    <NuxtLink to="/">Cancel</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  form {
    display: grid;
    margin-bottom: 1em;
    gap: 0.5em;

    label {
      margin-top: 1em;
    }
  }
</style>
