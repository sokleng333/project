import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Checked In" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Checked Out" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "On Leave" }
  ])

  function addUser(user) {
    users.value.push(user)
  }

  return { users, addUser }
})
