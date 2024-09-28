<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active"> About </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"> Log in </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active">
            Firebase Log in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active"> Add Book </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/updatebook" class="nav-link" active-class="active">
            Update Book
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/deletebook" class="nav-link" active-class="active">
            Delete Book
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/searchbook" class="nav-link" active-class="active">
            Search Book
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">
            Get Book Count
          </router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active" @click="handleFirebaseLogout">
            Firebase Log out
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" active-class="active" @click="handleLogout">Log out</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import router from '../router'
import { useAuth } from '../router/authenticate'
import { getAuth, signOut } from 'firebase/auth'

const { isAuthenticated, logout } = useAuth()

const handleFirebaseLogout = () => {
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    console.log('Signing out user:', user)
  }

  signOut(auth)
    .then(() => {
      console.log('User signed out successfully.')
      alert('You have been logged out.')
      router.push('/login')
    })
    .catch((error) => {
      console.error('Error during logout:', error)
    })
}

const handleLogout = () => {
  logout()
  alert('You have been logged out.')
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
