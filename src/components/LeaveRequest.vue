<template>
  <section class="flex ">
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
    
    <h1 class="text-2xl font-bold mb-4">Leave Requests</h1>

    <table class="w-[1000px] border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-4 py-2">Name</th>
          <th class="border px-4 py-2">Start Date</th>
          <th class="border px-4 py-2">End Date</th>
          <th class="border px-4 py-2">Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="leave in userStore.leaves" 
          :key="leave.submitted_at"
          class="hover:bg-gray-50"
        >
          <td class="border px-4 py-2">{{ leave.name }}</td>
          <td class="border px-4 py-2">{{ leave.start_date }}</td>
          <td class="border px-4 py-2">{{ leave.end_date }}</td>
          <td class="border px-4 py-2">{{ leave.reason }}</td>
        </tr>

        <!-- empty state -->
        <tr v-if="userStore.leaves.length === 0">
          <td colspan="4" class="text-center text-gray-400 py-4">
            No leave requests yet.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </section>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()

console.log('[LeaveRequest] leaves:', userStore.leaves)
</script>
