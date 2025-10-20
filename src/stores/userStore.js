import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref([
    { id: 1, name: "Alice Johnson", email: "alice123@gmail.com", role: "Admin", status: "Checked In" },
    { id: 2, name: "Bob Smith", email: "bob124@gmail.com", role: "Employee", status: "Checked Out" },
    { id: 3, name: "Chea Phearum", email: "cheaphearum125@gmail.com", role: "Employee", status: "Check in" },
    { id: 4, name: "Alice Johnson", email: "alice126@gmail.com", role: "Employee", status: "Checked In" },
    { id: 5, name: "John Smith", email: "Johnsmith127@gmail.com", role: "Employee", status: "Checked Out" },
    { id: 6, name: "Charlie Brown", email: "charlie128@gmail.com", role: "Employee", status: "Check out" }
  ])
  const leaves = ref([
    {
    name: "Dana ",
    start_date: "2025-10-01",
    end_date: "2025-10-02",
    reason: "sick"
  },
  {
    name: "John Doe",
    start_date: "2025-11-01",
    end_date: "2025-11-02",
    reason: "accident"
  },
  {
    name: "Kevin",
    start_date: "2025-10-05",
    end_date: "2025-10-07",
    reason: "Wedding"
  },
  {
    name: "Phearum",
    start_date: "2025-10-18",
    end_date: "2025-10-19",
    reason: "Funeral"
  },
  {
    name: "Channie",
    start_date: "2025-12-01",
    end_date: "2025-12-02",
    reason: "Hang over"
  },
  {
    name: "Sovanita",
    start_date: "2025-12-01",
    end_date: "2025-10-02",
    reason: "Family meeting"
  }

   

  ])

  function addUser(user) {
    users.value.push(user)
  }

   function updateUserStatus(email, status) {
    const user = users.value.find(u => u.email === email)
    if (user) user.status = status
  }
  function addLeave(leave) {
    console.log('[store] addLeave', leave)
    leaves.value.push(leave)
  }                       


  return { users, addUser, updateUserStatus,leaves,addLeave}
})
