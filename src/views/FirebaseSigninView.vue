<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const checkIfAdmin = (email) => {
  if (email === 'admin@email.com') {
    return true
  }
  return false
}

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      if (checkIfAdmin(email.value)) {
        // if the user is an admin
        console.log('Admin login successful!')
        alert('Admin login successful!')
        router.push('/')
      } else {
        // if the user is not an admin
        console.log('User login successful!')
        alert('User login successful!')
        router.push('/')
      }
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
      alert('Error: ' + error.message)
    })
}
</script>
