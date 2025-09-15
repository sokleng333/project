<template>
  <div class="p-6">
    <!-- Top bar with Check In button -->
    <div class="flex justify-end mb-4">
      <button 
        class="bg-green-500 text-white px-4 py-2 rounded"
        @click="showModal = true"
      >
        Check In
      </button>
    </div>

    <!-- Users Table -->
    <table class="w-full border border-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Name</th>
          <th class="p-2 border">Email</th>
          <th class="p-2 border">Role</th>
          <th class="p-2 border">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="text-center">
          <td class="p-2 border">{{ user.id }}</td>
          <td class="p-2 border">{{ user.name }}</td>
          <td class="p-2 border">{{ user.email }}</td>
          <td class="p-2 border">
            <span 
              :class="user.role === 'Admin' ? 'bg-green-100 text-green-600 px-2 py-1 rounded' : 'bg-blue-100 text-blue-600 px-2 py-1 rounded'">
              {{ user.role }}
            </span>
          </td>
          <td class="p-2 border">
            <button class="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded ml-2" @click="deleteUser(user.id)">Delete</button>
          </td>
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
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const users = ref([
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
]);

const newUser = ref({
  name: "",
  email: "",
  role: "User",
});

const addUser = () => {
  users.value.push({
    id: users.value.length + 1,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
  });

  // Reset form & close modal
  newUser.value = { name: "", email: "", role: "User" };
  showModal.value = false;
};

const deleteUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};
</script>
