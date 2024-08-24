<template>
    <form name="login-form" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="username">Username: </label>
        <input id="username" v-model="username" type="text" />
      </div>
      <div class="mb-3">
        <label for="password">Password: </label>
        <input id="password" v-model="password" type="password" />
      </div>
      <button class="btn btn-outline-dark" type="submit">
        Login
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        // 执行提交逻辑，例如验证用户名和密码
        if (this.username === 'correctUsername' && this.password === 'correctPassword') {
          alert('Login successful!');
          // 执行成功登录后的逻辑
        } else {
          alert('Invalid username or password.');
          // 处理登录失败的逻辑
        }
      }
    }
  }
  </script>
  