<template>
    <div class="project-container">
        <!-- <h2> {{ store.single_project?.title }} </h2> -->
        <ProjectCard :project="project" class="card-big"></ProjectCard>
    </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { defineProps, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '@/stores/generalStore'
import axios from 'axios'
const props = defineProps(['project'])
const route = useRoute()
const store = useGeneralStore()
const projectId = route.params.id
const project = ref(undefined)


onMounted(async () => {

    project.value = await store.getSingleProject(projectId)
})
</script>

<style scoped>
.project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

.card-big {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>