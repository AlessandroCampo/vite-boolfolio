import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    projects_array: [],
    current_page: undefined,
    max_pages: undefined
  }),
  getters: {

  },
  actions: {
    getProjects(page) {
      let params = {
        page
      }
      axios.get('http://127.0.0.1:8000/api/projects', { params }).then(res => {
        console.log(res.data)
        this.projects_array = res.data.projects.data
        this.current_page = res.data.current_page
        this.max_pages = res.data.last_page
      })
    }
  },
})