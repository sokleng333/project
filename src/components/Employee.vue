<template>
    <section class="flex">
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
          <router-link to="/dashboard" class="p-2 bg-blue-100 text-blue-700 rounded">Employee</router-link>
         
          <router-link to="/account" class="p-2 hover:bg-gray-200 rounded">Account</router-link>

         
        </ul>
      </div>
        
    <!-- Logout button -->
     <!-- Logout button -->
<button
  @click="showLogoutModal = true"
  class="text-red-500 hover:underline mt-6"
>
  Log out
</button>

<!-- Logout confirmation modal -->
<div
  v-if="showLogoutModal"
  class="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
>
  <div class="bg-white rounded-xl shadow-lg p-6 w-[300px] text-center">
    <h2 class="text-lg font-semibold mb-3">Confirm Logout</h2>
    <p class="text-gray-600 mb-6">Are you sure you want to log out?</p>

    <div class="flex justify-center gap-4">
      <button
        @click="confirmLogout"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Yes
      </button>
      <button
        @click="showLogoutModal = false"
        class="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        No
      </button>
    </div>
  </div>
</div>
  
<!-- <router-link to="/login"><button class="text-red-500 hover:underline">Log out</button></router-link>
       -->
      
      <!-- Modal -->
 
  
    </aside>  
    <section class=" bg-gray-100 w-full p-2">
        <h1 class="text-3xl font-bold ">Good Morning <span class="text-blue-500">Monika!</span></h1>
        <div class="w-[815px] rounded mt-2 shadow-sm bg-white h-[120px] p-3">
            <h1 class="font-bold">Today Task</h1>
            <p class="text-gray-400">Check out your task here</p>
            <button class="bg-blue-500 p-1 rounded text-white mt-2 text-sm">View Task</button>
        </div>
        <div class="flex justify-between w-[78%]">
         <div class="bg-white shadow-sm rounded w-[200px] h-[100px] p-2 mt-2">
            <p class="text-center">Up coming task</p>
            <div class="flex  items-center justify-center gap-1">
            <h1 class="font-bold text-xl">18</h1>
            <img src="../assets/emp_poster1.jpg" alt="" width="80" height="50">
            </div>
        </div>
          <div class="bg-white shadow-sm rounded w-[200px] h-[100px] p-2 mt-2">
            <p class="text-center">On going task</p>
            <div class="flex  items-center justify-center gap-1">
            <h1 class="font-bold text-xl">10</h1>
            <img src="../assets/emp_poster.jpg" alt="" width="80" height="50">
            </div>
        </div>
          <div class="bg-white shadow-sm rounded w-[200px] h-[100px] p-2 mt-2">
            <p class="text-center">Completed task</p>
            <div class="flex  items-center justify-center gap-1">
            <h1 class="font-bold text-xl">12</h1>
            <img src="../assets/emp_poster1.jpg" alt="" width="80" height="50">
            </div>
        </div>
        </div>
        <section class="flex gap-6 mt-3"> 
         <div class="w-[220px] p-4 bg-white rounded-lg border shadow-sm">
<h3 class="text-sm font-semibold mb-3">Employee progress overview</h3>


<div v-for="item in series" :key="item.label" class="mb-3">
<div class="flex items-center justify-between mb-1">
<div class="text-xs font-medium">{{ item.label }}</div>
<div class="text-xs font-mono">{{ item.value }}%</div>
</div>


<div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
<div
class="h-3 rounded-full transition-all duration-300"
:class="item.value > 100 ? 'bg-red-400' : 'bg-blue-500'"
:style="{ width: Math.min(item.value, 100) + '%' }
"></div>
</div>


<div v-if="item.value > 100" class="text-[10px] text-red-600 mt-1">
Value exceeds 100% — shown capped at 100% for visualization.
</div>
</div>


<div class="mt-2 text-[11px] text-gray-500">Note: values are treated as independent metrics (they don't need to sum to 100%).</div>
</div>


        <!-- end -->
        <div class="w-[300px] h-[250px] border rounded-lg p-2 flex flex-col bg-white text-gray-800 text-sm mt-2">
            <header class="flex items-center justify-between mb-1">
            <button @click="prevMonth" class="text-gray-600 hover:text-black">‹</button>
            <div class="font-semibold">{{ monthName }} {{ currentYear }}</div>
            <button @click="nextMonth" class="text-gray-600 hover:text-black">›</button>
            </header>
            <div class="grid grid-cols-7 text-center text-xs font-medium text-gray-500 border-b pb-1">
            <div v-for="d in weekdays" :key="d">{{ d }}</div>
        </div>


<div class="grid grid-cols-7 gap-y-1 flex-1 mt-1">
<div
v-for="cell in calendarCells"
:key="cell.key"
class="flex items-center justify-center rounded cursor-pointer hover:bg-gray-100"
:class="{ 'text-gray-400': !cell.inMonth, 'bg-blue-100 font-semibold': isToday(cell.date) }"
@click="selectDate(cell)"
>
{{ cell.date.getDate() }}
</div>
</div>
</div>
    <div class="w-[250px] h-[250px] shadow-sm p-5">
          <div class="flex flex-col  gap-6 justify-center mt-2 ">
            <button 
        class="bg-green-200 border-1 text-green-800 px-4 py-2 rounded lg:w-[180px] h-[40px] md:w-[150px] text-xs font-bold"
        @click="showModal = true"
      >
        Check In
      </button>
          <button  @click="showCheckOutModal = true" class="bg-red-200 border-1 text-red-800 px-4 py-2 rounded lg:w-[180px] h-[40px] md:w-[150px] text-xs font-bold">Check Out</button>
          <button @click="showLeaveModal = true"
            class="bg-yellow-200 text-yellow-800 border-1 border-amber-500 px-4 py-2 rounded lg:w-[180px] h-[40px] md:w-[150px] text-xs sm:font-bold">
            Leave Request
          </button>
        </div>


    </div>
    </section>

    <!--show modal check in  -->
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
              <option>Employee</option>
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
    <!-- check out -->
     <div 
  v-if="showCheckOutModal" 
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
>
  <div class="bg-white p-6 rounded shadow-md w-[400px]">
    <h2 class="text-xl font-bold mb-4">Check Out</h2>
    <form @submit.prevent="submitCheckOut">
      <div class="mb-3">
        <label class="block text-sm">Email</label>
        <input v-model="checkOutUser.email" type="email" class="w-full border px-2 py-1 rounded" required />
      </div>
      <div class="flex justify-end mt-4">
        <button type="button" class="px-4 py-2 mr-2 bg-gray-400 text-white rounded" @click="showCheckOutModal=false">Cancel</button>
        <button type="submit" class="px-4 py-2 bg-red-500 text-white rounded">Submit</button>
      </div>
    </form>
  </div>
</div>

<!-- Leave Request Modal -->
        <div 
          v-if="showLeaveModal"
          class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
        >
          <div class="bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <h2 class="text-xl font-bold mb-4">Leave Request</h2>
            <form @submit.prevent="submitLeave">
              <div class="mb-3">
                <label class="block text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  v-model="leaveForm.name" 
                  class="border rounded w-full p-2"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="block text-sm font-medium">Start Date</label>
                <input 
                  type="date" 
                  v-model="leaveForm.start_date" 
                  class="border rounded w-full p-2"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="block text-sm font-medium">End Date</label>
                <input 
                  type="date" 
                  v-model="leaveForm.end_date" 
                  class="border rounded w-full p-2"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="block text-sm font-medium">Reason</label>
                <textarea 
                  v-model="leaveForm.reason" 
                  class="border rounded w-full p-2"
                  required
                ></textarea>
              </div>
              <div class="flex justify-end gap-2">
                <button type="button" @click="showLeaveModal=false" class="px-4 py-2 rounded bg-gray-300">
                  Cancel
                </button>
                <button type="submit" class="px-4 py-2 rounded bg-blue-600 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
   
    </section>
    

</section>

  
</template>

<script setup>
import { ref, computed,toRef } from 'vue'


const today = new Date()
const view = ref(new Date(today.getFullYear(), today.getMonth(), 1))
const selected = ref(null)


const weekdays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']


const currentYear = computed(() => view.value.getFullYear())
const monthName = computed(() => view.value.toLocaleString(undefined, { month: 'long' }))


function startOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1) }
function endOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0) }


function buildCalendar(viewDate){
const start = startOfMonth(viewDate)
const end = endOfMonth(viewDate)
let startWeekday = start.getDay() // Sunday=0, Monday=1
startWeekday = startWeekday === 0 ? 6 : startWeekday - 1 // make Monday start


const cells = []
for(let i = startWeekday - 1; i >= 0; i--){
const dt = new Date(start)
dt.setDate(start.getDate() - (i + 1))
cells.push({ key: `p-${dt.toISOString()}`, date: dt, inMonth: false })
}


for(let d=1; d<=end.getDate(); d++){
const dt = new Date(viewDate.getFullYear(), viewDate.getMonth(), d)
cells.push({ key: `c-${dt.toISOString()}`, date: dt, inMonth: true })
}


while(cells.length % 7 !== 0){
const last = cells[cells.length-1].date
const dt = new Date(last)
dt.setDate(last.getDate() + 1)
cells.push({ key: `n-${dt.toISOString()}`, date: dt, inMonth: false })
}


return cells
}


const calendarCells = computed(() => buildCalendar(view.value))


function prevMonth(){
view.value = new Date(view.value.getFullYear(), view.value.getMonth() - 1, 1)
}
function nextMonth(){
view.value = new Date(view.value.getFullYear(), view.value.getMonth() + 1, 1)
}


function isToday(d){
return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate()
}


function selectDate(cell){
selected.value = cell.date
}






// Props: accepts an array of objects: { label: string, value: number }
// Default values are the ones you provided.
const props = defineProps({
data: {
type: Array,
default: () => [
{ label: 'Earning', value: 50 },
{ label: 'Project complete', value: 70 },
{ label: 'Upcoming project', value: 20 }
]
}
})


const series = toRef(props, 'data')


// check in
import { onMounted } from "vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore()
// === State ===
const message = ref("");
const attendance = ref([]);

// Sidebar toggle
const isOpen = ref(false);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

// Leave modal
const showLeaveModal = ref(false);
const leaveForm = ref({
  name: "",
  start_date: "",
  end_date: "",
  reason: ""
});
// const leaveRequests = ref([]);

// Check-in modal
const showModal = ref(false);
const newUser = ref({
  name: "",
  email: "",
  role: "User"
});
// ...existing code...
const showCheckOutModal = ref(false);
const checkOutUser = ref({
  email: ""
});

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:5000/api/hello");
    const data = await res.json();
    message.value = data.message;
  } catch (err) {
    console.error("Backend not reachable", err);
  }
});

// === Attendance ===
function handleCheckIn() {
  const record = { type: "Check In", time: new Date().toLocaleString() };
  attendance.value.push(record);

  fetch("http://localhost:5000/api/checkin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
}


function submitCheckOut() {
  // Find the user by email from the Check Out modal and update status
  userStore.updateUserStatus(checkOutUser.value.email, "Checked Out");

  // Optionally, add a record to attendance
  const record = { type: "Check Out", time: new Date().toLocaleString() };
  attendance.value.push(record);

  fetch("http://localhost:5000/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });

  // Reset form & close modal
  checkOutUser.value.email = "";
  showCheckOutModal.value = false;
}


//add

async function submitLeave() {
  const newLeave = {
    name: leaveForm.value.name,
    start_date: leaveForm.value.start_date,
    end_date: leaveForm.value.end_date,
    reason: leaveForm.value.reason,
    submitted_at: new Date().toISOString(),
  }
  
  console.log('[Dashboard] submitLeave -> newLeave:', newLeave)
  userStore.addLeave(newLeave)
  console.log('[Dashboard] after addLeave userStore.leaves:', userStore.leaves)

  // ... backend POST omitted for brevity ...
  showLeaveModal.value = false
  leaveForm.value = { name: "", start_date: "", end_date: "", reason: "" }
}
// === User Handling (Pinia) ===
const addUser = () => {
  userStore.addUser({
    id: userStore.users.length + 1,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    status: "Checked In"
  });

  newUser.value = { name: "", email: "", role: "User" };
  showModal.value = false;
};

const deleteUser = (id) => {
  userStore.users = userStore.users.filter((user) => user.id !== id);
};



import { useRouter } from "vue-router";

const router = useRouter();
const showLogoutModal = ref(false);

const confirmLogout = () => {
  showLogoutModal.value = false;
  // optional: clear user data or tokens here
  router.push("/login"); // navigate to Employee.vue page
};

//





</script>

<style>

</style>

