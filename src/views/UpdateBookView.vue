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
    const originalIsbn = ref('')
    const originalName = ref('')
    const newIsbn = ref('')
    const newName = ref('')

    const updateBook = async () => {
      try {
        const originalIsbnNumber = Number(originalIsbn.value)
        if (isNaN(originalIsbnNumber)) {
          alert('Original ISBN must be a valid number')
          return
        }

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

        const docRef = querySnapshot.docs[0].ref

        await updateDoc(docRef, {
          isbn: Number(newIsbn.value),
          name: newName.value
        })

        // Clear
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
