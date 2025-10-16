<template>
  <!-- <Dashboard/>
  <Table/> -->
  <!-- <nav>
    <router-link to="/"></router-link>
    <router-link to="/table"></router-link>
  </nav> -->


<!-- here is our content -->
     <router-link to="/Feature"></router-link>
    <router-link to="/Aboutus">
    </router-link> 
     <router-link to="/contact"></router-link> 
      <router-link to="/dashboard"></router-link>
      <router-link to="/table"></router-link>
      <router-link to="/leave"></router-link>
<!-- end of content -->
  <div class="bg-gray-300">
 <Employee/>
 </div> 


      <!-- <Login/> -->
  <router-view/>
</template>

<script setup>
// import Employee from './components/Employee.vue';

// import Login from './components/Pages/Login.vue';

</script>

<style>

</style>