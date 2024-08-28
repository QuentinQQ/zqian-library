<template>
  <div class="container about">
    <div v-if="isAuthenticated">
      <h1 class="text-center">About Our Library</h1>
      <p class="text-left">
        Welcome to our digital library! We're dedicated to providing a vast collection of books and
        resources to our community.
      </p>
    </div>
    <div v-else class="fail">
      <h1 class="text-center">Access Denied</h1>
      <p class="text-center">You do not have permission to view this page. Please log in first.</p>
      <div class="text-center">
        <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '../router/authenticate'

const { isAuthenticated } = useAuth() // Correctly import and use the authentication state
</script>

<style>
.fail h1 {
  color: red;
  text-align: center;
  margin-top: 50px;
}

.fail p {
  margin-bottom: 20px;
}
</style>
