import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { router } from '@/router'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    projects_array: [],
    current_page: undefined,
    max_pages: undefined,
    single_project: undefined
  }),
  getters: {

  },
  actions: {
    getProjects(page) {
      if ((this.max_pages && page > this.max_pages) || page < 0) {
        return
      }
      let params = {
        page
      }
      axios.get('http://127.0.0.1:8000/api/projects', { params }).then(res => {

        this.projects_array = res.data.projects.data
        this.current_page = res.data.projects.current_page
        this.max_pages = res.data.projects.last_page
      })
    },
    async getSingleProject(id) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
        if (!response.data.success) {
          router.push({ name: 'not-found' });
          return null;
        }
        return response.data.project;
      } catch (error) {
        console.error("Error fetching single project:", error);
        return null;
      }
    }

  },
})