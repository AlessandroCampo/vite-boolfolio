import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

import ProjectView from "@/views/ProjectView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/project/:id', name: 'project', component: ProjectView, props: true },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]


export const router = createRouter({
    history: createWebHistory(),
    routes
})

