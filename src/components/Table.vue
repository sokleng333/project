<template>
  <section class="w-full h-screen flex ">
  <i 
      class="fa-solid fa-bars text-2xl p-4 cursor-pointer block lg:!hidden"
      @click="toggleSidebar"
    ></i>

    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-4 flex flex-col 
             transform transition-transform duration-300
             lg:translate-x-0 lg:static lg:flex"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Close button -->
      <i 
        class="fa-solid fa-xmark text-2xl cursor-pointer  block lg:!hidden ml-auto"
        @click="toggleSidebar"
      ></i>
      <div>
        <h1 class="text-xl font-bold mb-6">Dashboard</h1>
        <ul class="space-y-3 flex flex-col">
          <router-link to="/dashboard" class="p-2 bg-blue-100 text-blue-700 rounded">Dashboard</router-link>
         
          <router-link to="/table" class="p-2 hover:bg-gray-200 rounded">Attendance</router-link>

          <router-link to="/leave" class="p-2 hover:bg-gray-200 rounded">Leave Request</router-link>
        </ul>
      </div>
      <button class="text-red-500 hover:underline">Log out</button>
    </aside>


  <div class="p-6">
    <!-- Top bar with Check In button -->
    <div class="flex justify-between mb-4">
      <h1 class=" text-2xl font-bold">Attendance</h1>
      <input type="text" placeholder="search" class="border-2 p-2 border-blue-800 rounded">
      <!-- <button 
        class="bg-green-500 text-white px-4 py-2 rounded"
        @click="showModal = true"
      >
        Check In
      </button> -->
    </div>

    <!-- Users Table -->
    <table class="w-[1000px] h-auto border border-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Name</th>
          <th class="p-2 border">Email</th>
          <th class="p-2 border">Role</th>
          <th class="p-2 border">Status</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="user in userStore.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.status }}</td>
          
        </tr>
      </tbody>
    </table>

    <!-- Modal Form -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded shadow-md w-[400px]">
        <h2 class="text-xl font-bold mb-4">Check In</h2>

        <form @submit.prevent="addUser">
          <div class="mb-3">
            <label class="block text-sm">Name</label>
            <input v-model="newUser.name" type="text" class="w-full border px-2 py-1 rounded" required />
          </div>

          <div class="mb-3">
            <label class="block text-sm">Email</label>
            <input v-model="newUser.email" type="email" class="w-full border px-2 py-1 rounded" required />
          </div>

          <div class="mb-3">
            <label class="block text-sm">Role</label>
            <select v-model="newUser.role" class="w-full border px-2 py-1 rounded">
              <option>User</option>
              <option>Admin</option>
            </select>
          </div>

          <div class="flex justify-end mt-4">
            <button type="button" class="px-4 py-2 mr-2 bg-gray-400 text-white rounded" @click="showModal=false">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>

import { ref } from "vue";

const showModal = ref(false);


import { useUserStore } from '../stores/userStore'
const userstore = useUserStore()

const addUser = () => {
  userStore.addUser({
    id: userStore.users.length + 1,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    status: "Checked In"
  })
  // Reset form & close modal
  newUser.value = { name: "", email: "", role: "User" }
  showModal.value = false
}


const deleteUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};


const userStore = useUserStore()

</script>
<style scoped>
th,td{
  padding: 10px;
}
  
</style>
