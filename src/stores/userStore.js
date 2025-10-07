import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref([
    { id: 1, name: "Alice Johnson", email: "alice123@gmail.com", role: "Admin", status: "Checked In" },
    { id: 2, name: "Bob Smith", email: "bob124@gmail.com", role: "User", status: "Checked Out" },
    { id: 3, name: "Chea Phearum", email: "cheaphearum125@gmail.com", role: "User", status: "On Leave" },
    { id: 1, name: "Alice Johnson", email: "alice126@gmail.com", role: "Admin", status: "Checked In" },
    { id: 2, name: "John Smith", email: "Johnsmith127@gmail.com", role: "User", status: "Checked Out" },
    { id: 3, name: "Charlie Brown", email: "charlie128@gmail.com", role: "User", status: "On Leave" }
  ])

  function addUser(user) {
    users.value.push(user)
  }

   function updateUserStatus(email, status) {
    const user = users.value.find(u => u.email === email)
    if (user) user.status = status
  }


  return { users, addUser, updateUserStatus}
})
