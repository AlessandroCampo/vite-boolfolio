import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

import ProjectView from "@/views/ProjectView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/project/:id', component: ProjectView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

