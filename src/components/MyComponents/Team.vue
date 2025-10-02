<template>
  <div class="flex justify-center gap-10">
    <TeamMember
      name="Mr. KAY KEO"
      role="IT instructor/Mentor"
    
      image="src/assets/Screenshot 2025-09-05 111359.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/houtsokleng143' },
        { name: ['fas', 'envelope'], link: 'mailto:houtsokleng203@gmail.com' }
      ]"
    />
     <TeamMember
      name="MR CHAN CHHAYA"
      role="IT instructor/Mentor"
     
      image="src/assets/Screenshot 2025-09-05 111408.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/meypanhawath' },
        { name: ['fas', 'envelope'], link: 'mailto:meypanhawath18@gmail.com' }
      ]"
    />

  </div>
  <div><h1 class="text-center text-3xl  text-[#043873] font-bold font-montserrate mt-3"> Team Members</h1>
    <hr class="w-20 border-2 border-[#043873] mx-auto mt-2 mb-6">
    </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    <TeamMember
      name="Hout Sokleng"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-01 110110.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/houtsokleng143' },
        { name: ['fas', 'envelope'], link: 'mailto:houtsokleng203@gmail.com' }
      ]"
    />
     <TeamMember
      name="Mey Panhawath"
      role="Frontend, UX/UI"
      position="Leader"
      image="src/assets/Screenshot 2025-09-01 105956.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/meypanhawath' },
        { name: ['fas', 'envelope'], link: 'mailto:meypanhawath18@gmail.com' }
      ]"
    />
     <TeamMember
      name="Manith Sara"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-01 110127.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/Manith991' },
        { name: ['fas', 'envelope'], link: 'mailto:rithsaramanith123@gmail.com' }
      ]"
    />
    <TeamMember
      name="Koam Kitya"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-04 133547.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/Kitya-yuom' },
        { name: ['fas', 'envelope'], link: 'mailto:kityayuom@gmail.com' }
      ]"
    />
   
    <TeamMember
      name="LONH RAKSMEY"
      role="Frontend, UX/UI"
      position="Co-Leader"
      image="src/assets/Screenshot 2025-09-04 133621.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/stupiqqsmey' },
        { name: ['fas', 'envelope'], link: 'mailto:lonhraksmey828282@gmail.com' }
      ]"
    />
   
    <TeamMember
      name="Lim Sokheang"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-04 133605.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/Manith991' },
        { name: ['fas', 'envelope'], link: 'mailto:sokheanglim2005@gmail.com' }
      ]"
    />
    <TeamMember
      name="Sam Soksreng"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-04 133631.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/Soksreng12' },
        { name: ['fas', 'envelope'], link: 'mailto:lapawlmaug000@gmail.com' }
  
      ]"
    />
     <TeamMember
      name="Sim Sol"
      role="Frontend, UX/UI"
      position="Team Member"
      image="src/assets/Screenshot 2025-09-04 133555.png"
      :icons="[
        { name: ['fab', 'github'], link: 'https://github.com/Mrrsol033' },
        { name: ['fas', 'envelope'], link: 'mailto:lapawlmaug000@gmail.com' }
  
      ]"
    />
   
   
  </div>
</template>

<script setup>
import TeamMember from './TeamMember.vue'
</script>
