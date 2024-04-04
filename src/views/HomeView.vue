<script setup>
import { useGeneralStore } from '../stores/generalStore'
import { ref, onMounted } from 'vue'
const store = useGeneralStore()

onMounted(() => {
  store.getProjects()
  console.log(store.projects_array)
})
</script>

<template>
  <main>

  </main>
</template>
