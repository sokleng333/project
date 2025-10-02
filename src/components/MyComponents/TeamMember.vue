<template>
  <div class="text-center p-4">
    <img :src="image" alt="profile" class="w-24 h-24 rounded-full mx-auto mb-2" />
    <h3 class="font-bold">{{ name }}</h3>
    <p class="text-sm">{{ role }}</p>
    <p class="text-xs text-gray-500">{{ position }}</p>

    <div class="flex justify-center gap-3 mt-2">
      <a v-for="(icon, index) in icons" 
         :key="index" 
         :href="icon.link" 
         target="_blank"
         class="text-xl hover:text-blue-500">
        <font-awesome-icon :icon="icon.name" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  position: String,
  image: String,
  icons: Array // [{ name: ['fab', 'github'], link: '...' }]
})
</script>
