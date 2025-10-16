<template>
  <div class="flex h-auto bg-gray-100">
    <!-- Burger Menu (ONLY on sm & md, hidden on lg) -->
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
      <router-link to="/log in"><button class="text-red-500 hover:underline">Log out</button></router-link>
    
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 overflow-hidden">
      <h2 class="text-2xl font-bold mb-6">Dashboard</h2>

      <!-- Top Row -->
      <div class="grid lg:grid-cols-[300px_1fr] md:grid-cols-[250px_1fr] gap-4 mb-6 ">
        <!-- Time Card -->
        <div class="bg-white p-4 rounded shadow text-center h-[270px]">
          <p class="text-xl text-left pl-9 mt-4">🕒 8:02:09 AM <br><span class="text-sm text-gray-400 pl-10">real time insight</span></p>
          <div class="mt-6">
            <div class="text-left pl-12">
              <p class="text-gray-500">Tuesday:</p>
              <p>29th August 2025</p>
            </div>
            <router-link to="/table">
              <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">View Attendance</button>
            </router-link>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="position bg-blue-900 text-white p-4 rounded shadow lg:h-[200px] lg:w-[600px] lg:relative md:w-[510px] md:h-[200px]">
          <h3 class="font-bold">This Month</h3>
          <p class="mt-4 text-right">This Year: <span class="font-bold">22</span></p>
          <div class="flex justify-between mt-4">
            <div class="text-center">
              <p class="text-2xl font-bold">17</p>
              <p>Present</p>
            </div>
            <div class="text-center">    
              <p class="text-2xl font-bold">04</p>
              <p>Late</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">01</p>
              <p>Absent</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">22</p>
              <p>Total</p>
            </div>
          </div>
        </div>

        <div class="flex md:absolute gap-6 justify-center lg:absolute lg:left-150 lg:top-76 md:left-85 sm:top-30 text-xs items-center md:top-76">
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
      </div>

      <!-- Bottom Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-3">
        <!-- Leave Requests -->
        <div class="bg-blue-300 p-4 rounded shadow text-center h-[170px] lg:w-[296px] md:w-[240px]">
          <div class="flex justify-end">
            <img src="../assets/Screenshot 2025-08-29 160928.png" alt="" class="w-[40px] h-[40px] rounded-full">
          </div>
          <p class="text-4xl font-bold text-white mt-3">05</p>
          <p class="font-bold mt-3">Total Leave Requests this month</p>
        </div>

        <!-- Mini Stats -->
        <div class="bg-blue-300 grid grid-cols-2 gap-2 p-2 h-[170px]">
          <div class="bg-white p-4 rounded shadow text-center h-[70px]">
            <p class="text-xl font-bold">04</p>
            <p>On Time</p>
          </div>
          <div class="bg-white p-4 rounded shadow text-center h-[70px]">
            <p class="text-xl font-bold">05</p>
            <p>Absent</p>
          </div>
          <div class="bg-white p-4 rounded shadow text-center h-[70px]">
            <p class="text-xl font-bold">06</p>
            <p>Late Arrival</p>
          </div>
          <div class="bg-white p-4 rounded shadow text-center h-[70px]">
            <p class="text-xl font-bold">04</p>
            <p>Time-off</p>
          </div>
        </div>

        <!-- Profile -->
        <div class="bg-white p-4 rounded shadow flex items-center justify-center gap-4 lg:w-[270px] lg:h-[170px]">
          <div>
            <img src="https://i.pinimg.com/1200x/6d/df/22/6ddf22da1b3e6a5a0fa05dbfaf2fd741.jpg" class="w-16 h-16 rounded-full border-2 border-blue-500" />
            <p class="text-sm text-gray-500 mt-2">Cyber Security</p>
          </div>
          <div class="mb-7">
            <h3 class="font-bold">John Doe</h3>
            <p class="text-sm text-gray-500 mt-2">ID: 123975</p>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Attendance Records -->
  <!-- <div class="bg-white p-4 rounded shadow mt-6">
    <h3 class="font-bold mb-2">Attendance Records</h3>
    <ul>
      <li v-for="record in attendance" :key="record.id">
        {{ record.type }} at {{ record.time }}
      </li>
    </ul>
  </div> -->



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
    <!-- check out modal -->

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
</template>
<script setup>
import { ref, onMounted } from "vue";
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


// ...existing code...

// === Leave Form ===
// async function submitLeave() {
//   const newLeave = {
//     ...leaveForm.value,
//     submitted_at: new Date().toLocaleString(),
//     status: "Pending"
//   };

//   leaveRequests.value.push(newLeave);

//   await fetch("http://localhost:5000/api/leave", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newLeave),
//   });

//   showLeaveModal.value = false;
//   leaveForm.value = { name: "", start_date: "", end_date: "", reason: "" };
// }
// end of leave form

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
</script>
