
<template>
  <div class="w-full h-screen bg-[linear-gradient(to_right,#3b82f6,#60a5fa,#93c5fd)] flex justify-center items-center">
    <form
      @submit.prevent="handleLogin"
      autocomplete="off"
      class="w-[370px] h-[300px] bg-white rounded-xl p-4 "
    >
      <!-- Hidden dummy fields to discourage browser autofill -->
      <input type="text" name="fake_username" id="fake_username" style="display:none" autocomplete="username" />
      <input type="password" name="fake_password" id="fake_password" style="display:none" autocomplete="current-password" />

      <div class="m-4">
        <label for="username">Username</label>
        <input
          v-model="username"
          id="username"
          name="username"
          type="text"
          autocomplete="off"
          placeholder="Enter your username"
          class="w-[300px] h-10 rounded-md p-2 border-2 border-gray-400"
        />
      </div>

      <div class="m-2">
        <label for="password" class="m-1">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          autocomplete="new-password"
          placeholder="Enter your password"
          class="m-1 w-[300px] h-10 rounded-md p-2 border-2 border-gray-400"
        />
      </div>

      <div class="flex gap-3 ml-3">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember me</label>
      </div>

      <button class="bg-blue-500 text-white w-[300px] h-auto ml-3 px-3 py-2 rounded">Log in</button>
      <div v-if="error" class="text-red-500 mt-2 ml-3">{{ error }}</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

function handleLogin() {
  error.value = ''
  // simple frontend check (for demo). Replace with API call for real auth.
  if (username.value === 'employee' && password.value === 'emp123') {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/dashboard')
  } else {
    error.value = 'Invalid username or password'
  }
}
</script>