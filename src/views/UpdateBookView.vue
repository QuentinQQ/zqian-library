<template>
  <div>
    <h1>Update Book</h1>
    <form @submit.prevent="updateBook">
      <div>
        <h2>Original information:</h2>
      </div>
      <div>
        <label for="originalIsbn">ISBN:</label>
        <input type="text" v-model="originalIsbn" id="originalIsbn" required />
      </div>
      <div>
        <label for="originalName">Name:</label>
        <input type="text" v-model="originalName" id="originalName" required />
      </div>
      <div>
        <h2>New information:</h2>
      </div>
      <div>
        <label for="newIsbn">ISBN:</label>
        <input type="text" v-model="newIsbn" id="newIsbn" required />
      </div>
      <div>
        <label for="newName">Name:</label>
        <input type="text" v-model="newName" id="newName" required />
      </div>
      <button type="submit">Update Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore'

export default {
  setup() {
    // Reactive variables for original and new book data
    const originalIsbn = ref('')
    const originalName = ref('')
    const newIsbn = ref('')
    const newName = ref('')

    // Function to update the book
    const updateBook = async () => {
      try {
        // Convert the original ISBN to a number
        const originalIsbnNumber = Number(originalIsbn.value)
        if (isNaN(originalIsbnNumber)) {
          alert('Original ISBN must be a valid number')
          return
        }

        // Create a query to find the book by ISBN and name
        const q = query(
          collection(db, 'books'),
          where('isbn', '==', originalIsbnNumber),
          where('name', '==', originalName.value)
        )

        // Fetch the matching book documents
        const querySnapshot = await getDocs(q)

        // Check if a book was found
        if (querySnapshot.empty) {
          alert('No book found with the given original information.')
          return
        }

        // Update the first matched book (assuming ISBN and name are unique)
        const docRef = querySnapshot.docs[0].ref

        // Update the book with new information
        await updateDoc(docRef, {
          isbn: Number(newIsbn.value),
          name: newName.value
        })

        // Clear form fields after a successful update
        originalIsbn.value = ''
        originalName.value = ''
        newIsbn.value = ''
        newName.value = ''
        alert('Book updated successfully!')
      } catch (error) {
        console.error('Error updating book: ', error)
      }
    }

    return {
      originalIsbn,
      originalName,
      newIsbn,
      newName,
      updateBook
    }
  }
}
</script>
