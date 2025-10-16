<template>
  <i 
      class="fa-solid fa-bars text-black text-2xl p-4 cursor-pointer block md:block lg:hidden"
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
     
  
</template>

<script>

</script>

<style>

</style>

