import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    projects_array: []
  }),
  getters: {

  },
  actions: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        console.log(res.data)
        this.projects_array = res.data.projects
      })
    }
  },
})