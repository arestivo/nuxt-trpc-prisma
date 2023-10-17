<script setup lang="ts">
  defineProps<{ brand: string }>()
</script>

<template>
  <div class="navigation">
    <h1>{{ brand }}</h1>
  </div>
</template>
