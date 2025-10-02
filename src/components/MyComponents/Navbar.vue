
<template>
  <header class=" fixed bg-white shadow-sm h-auto flex items-center px-2 justify-center w-screen">
    <nav class="flex gap-60 items-center   w-[1080px]  ml-2">
        <router-link to="/"><img src="../../assets/logo-v5 (1) (1).png" alt="" width="120" height="60"></router-link>
        <ul class="flex space-x-10">
            <li><router-link to="/Feature" class="text-[#043873] font-medium font-montserrat">Feature</router-link></li>
            <li><router-link to="/about" class="text-[#043873] font-medium font-montserrat">About Us</router-link></li>
            <li><router-link to="/contact" class="text-[#043873] font-medium font-montserrat">Help & Support</router-link></li>
        </ul>
        <div class="m-2">
        <button class="bg-[#043873] text-white px-4 py-2 rounded ">Log in</button>
        </div>
    </nav>
  </header>
</template>

<script>

</script>

<style>

</style>
