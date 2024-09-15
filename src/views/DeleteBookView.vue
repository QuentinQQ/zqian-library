<template>
  <div>
    <h1>Delete Book</h1>
    <form @submit.prevent="deleteBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <button type="submit">Delete Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'

export default {
  setup() {
    const isbn = ref('')

    const deleteBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        // Create a query to find
        const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))

        // get query results
        const querySnapshot = await getDocs(q)

        // check if any book found
        if (querySnapshot.empty) {
          alert('No book found with the given ISBN.')
          return
        }

        // get the reference of finded book
        const docRef = querySnapshot.docs[0].ref

        // delete
        await deleteDoc(docRef)

        isbn.value = ''
        alert('Book deleted successfully!')
      } catch (error) {
        console.error('Error deleting book: ', error)
      }
    }

    return {
      isbn,
      deleteBook
    }
  }
}
</script>
