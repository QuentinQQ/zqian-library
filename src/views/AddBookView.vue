<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import axios from 'axios'
import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const capitalizeName = async (name) => {
      try {
        const response = await axios.post(
          'https://capitalizename-urqxwia3tq-uc.a.run.app',
          {
            name: name
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        return response.data.name
      } catch (error) {
        console.error('Error capitalizing book name:', error)
        throw error
      }
    }

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        let capitalizedName = await capitalizeName(name.value)
        console.log('Capitalized name:', capitalizedName) // test check

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: capitalizedName
        })
        isbn.value = ''
        name.value = ''
        capitalizedName = ''
        alert('Book added successfully!')
      } catch (error) {
        console.error('Error adding book: ', error)
      }
    }

    return {
      isbn,
      name,
      addBook
    }
  },
  components: {
    BookList
  }
}
</script>
