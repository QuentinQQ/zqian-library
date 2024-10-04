<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getAllBooksAPI()
  },
  methods: {
    async getAllBooksAPI() {
      try {
        // Use the correct API endpoint for fetching all books.
        const response = await axios.get('https://getallbooks-urqxwia3tq-uc.a.run.app')
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.error('Error fetching all books:', error)
        this.error = error
      }
    }
  }
}
</script>
