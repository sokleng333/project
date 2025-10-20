
<template>
    <section class="flex">
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
          <router-link to="/empdashboard" class="p-2 bg-blue-100 text-blue-700 rounded">Employee</router-link>
         
          <router-link to="/account" class="p-2 hover:bg-gray-200 rounded">Account</router-link>

          <router-link to="/Task" class="p-2 hover:bg-gray-200 rounded">Task</router-link>
        </ul>
      </div>
      <router-link to="/login"><button class="text-red-500 hover:underline">Log out</button></router-link>
      
    </aside> 
    <div class="flex items-center justify-center p-8">
    <div class="bg-white rounded-2xl shadow-lg w-[392px] md:w-[837px] p-8 relative">

      <!-- Close icon -->
      <button class="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-xl font-bold">
        ×
      </button>

      <!-- Title -->
      <h2 class="text-2xl font-semibold text-blue-700 mb-8">Edit profile</h2>

      <div class="flex flex-col md:flex-row gap-8 items-start">

        <!-- Left: Profile photo + upload -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <img
              src="https://i.pinimg.com/736x/ff/ec/b4/ffecb46ba777e9d3e570a35f1ebf36ff.jpg"
              alt="Profile photo"
              class="w-32 h-32 rounded-full object-cover border"
            />
            <div
              class="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow cursor-pointer hover:bg-gray-100"
            >
              📷
            </div>
          </div>
          <button
            class="mt-4 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
          >
            Upload image
          </button>
        </div>

        <!-- Right: Form fields -->
        <div class="flex-1 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-600 text-sm mb-1">ID Card</label>
              <input
                type="text"
                value="819901"
                readonly
                class="w-full border rounded-md bg-blue-100 px-3 py-2"
              />
            </div>

            <div>
              <label class="block text-gray-600 text-sm mb-1">Full name</label>
              <input
                type="text"
                value="Jang Wonyoung"
                readonly
                class="w-full border rounded-md bg-blue-100 px-3 py-2"
              />
            </div>

            <div>
              <label class="block text-gray-600 text-sm mb-1">Gender</label>
              <input
                type="text"
                value="Female"
                readonly
                class="w-full border rounded-md bg-blue-100 px-3 py-2"
              />
            </div>

            <div>
              <label class="block text-gray-600 text-sm mb-1">Department</label>
              <input
                type="text"
                value="Cyber Security"
                readonly
                class="w-full border rounded-md bg-blue-100 px-3 py-2"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-gray-600 text-sm mb-1">Date of joining</label>
              <input
                type="text"
                value="28/03/2025"
                readonly
                class="w-full border rounded-md bg-blue-100 px-3 py-2"
              />
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end gap-3 mt-6">
            <button
              class="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition"
            >
              Cancel
            </button>
            <button
              class="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Save change
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
</template>

<script setup>


</script>

<style>

</style>