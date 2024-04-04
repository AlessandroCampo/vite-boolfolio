<script setup>
import { useGeneralStore } from '../stores/generalStore'
import { ref, onMounted } from 'vue'
const store = useGeneralStore()

onMounted(() => {
  store.getProjects(1)
  console.log(store.projects_array)
  console.log(store.current_page)
})

const projects = ref(store.projects_array)
</script>

<template>
  <section class="flex items-center flex-col w-screen">
    <div class="py-16">
      <div class="text-center">

        <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Projects by Aleks</h2>
        <p class="mt-6 text-gray-700 dark:text-gray-300">I for sure didnt steal this component.</p>
      </div>

      <div class="mx-auto px-6 max-w-6xl text-gray-500">


        <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div class="project-card" v-for="(project) in store.projects_array" :key="project?.id">

            <div
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 h-fit">
              <h2 class="uppercase text-center text-xl my-6">
                {{ project.title }}
              </h2>
              <div aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
              </div>
              <div class="relative">
                <div class="flex justify-center gap-3">
                  <div
                    class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                    v-for="tech in project.technologies" :key="tech.id">
                    <img :src="tech.logo_url" alt="">
                  </div>
                </div>


                <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300 h-[150px]"> {{ project.description }}</p>
                </div>

                <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                  <a href="#" download="/"
                    class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path>
                    </svg>
                  </a>
                  <a class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                    :href="project.github_link" target="_blank" v-show="project.github_link">
                    <span class="sr-only">Source Code</span>
                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                      </path>
                    </svg>
                  </a>

                </div>
                <img :src="project.thumb" alt="" class="mt-10 h-[200px]">
              </div>
            </div>
          </div>


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
