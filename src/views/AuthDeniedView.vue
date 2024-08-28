<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Access Denied</h1>
        <p class="text-center">
          You do not have permission to view this page. Please log in first.
        </p>
        <div class="text-center">
          <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  color: red;
  text-align: center;
  margin-top: 50px;
}

p {
  margin-bottom: 20px;
}
</style>
