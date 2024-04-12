<script setup>
import { useGeneralStore } from '../stores/generalStore'
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { router } from '@/router'
const store = useGeneralStore()

onMounted(() => {
  store.getProjects(1)
  console.log(store.projects_array)
  console.log(store.current_page)
})

const openProjectPage = function (project) {
  console.log(project.id)
  router.push({ name: 'project', params: { id: project?.id }, props: { project } })
}


const projects = ref(store.projects_array)
</script>

<template>
  <section class="flex items-center flex-col w-screen">
    <div class="py-16">
      <div class="text-center">

        <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Projects by Aleks</h2>
        <RouterLink to="/contactUs">Contact me</RouterLink>
        <p class="mt-6 text-gray-700 dark:text-gray-300">I for sure didnt steal this component.</p>
      </div>

      <div class="mx-auto px-6 max-w-6xl text-gray-500">


        <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

          <ProjectCard v-for="(project) in store.projects_array" :key="project?.id" :project="project"
            @click="openProjectPage(project)"></ProjectCard>



        </div>
      </div>
    </div>

    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between flex-col gap-3">
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer">

              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                @click="store.getProjects(store.current_page - 1)">
                <path fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd" />
              </svg>
            </a>

            <a aria-current="page"
              class="relative z-10 inline-flex items-center  text-white px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              :class="count == store.current_page ? 'bg-blue-500' : ' bg-black'" v-for="count in store.max_pages"
              :key="count" @click="store.getProjects(count)">
              {{ count }}
            </a>


            <a
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                @click="store.getProjects(store.current_page + 1)">
                <path fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>

  </section>
</template>
