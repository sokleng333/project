<template>
  <section class="h-screen w-full bg-[linear-gradient(to_right,#977DFF,#0033FF,#0600AB)]">
    <h1 class="text-center font-bold text-3xl text-white pt-20">
      Contact Us Here When You Need Help
    </h1>

    <section
      class="grid grid-cols-[400px_600px] place-content-center items-center gap-10 mt-20 ml-10"
    >
      <div class="flex flex-col">
        <div class="flex flex-col items-center mb-5">
          <img src="../../assets/contact.PNG" alt="" width="150" height="50" class="ml-6" />
          <p class="text-white text-xl font-bold">ANY QUESTION</p>
          <p class="text-white">You can ask any question you want</p>
        </div>

        <div class="flex flex-col items-center">
          <input
            v-model="question"
            type="text"
            placeholder="Question?"
            class="bg-white rounded p-2 w-[60%] border-0 outline-blue-400"
          />
          <button
            @click="submitQuestion"
            type="button"
            class="w-[100px] bg-white mt-2 rounded-xl p-2 hover:bg-gray-200"
          >
            Submit
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <p class="text-2xl font-montserrate text-white">
          Want to learn how our Smart Attendance system works? Reach out to us for product details,
          system setup guidance, or technical support. We’re here to help you automate attendance
          tracking efficiently and accurately.
        </p>
      </div>
    </section>
  </section>

  <!-- Contact Form Section -->
  <div class="w-[700px] h-[600px] shadow-2xl mx-auto my-20 p-10">
    <h1 class="text-center font-bold text-3xl text-blue-600 pt-20">CONTACT US</h1>
    <hr class="w-20 border-2 border-blue-600 mx-auto mt-2" />
    <p class="text-center">Send your query using the form below or email us at checkifykh@gmail.com.</p>

    <div class="flex justify-around mt-10">
      <div><img src="./../../assets/IMG_0360.PNG" alt="" width="250" height="auto" /></div>
      <div>
        <form @submit.prevent="submitForm" class="flex flex-col">
          <div class="flex flex-col mb-3">
            <label>Name</label>
            <input
              v-model="name"
              type="text"
              placeholder="Input name"
              class="border-1 outline-blue-400 rounded-xl w-[300px] h-[50px] p-1.5 border-gray-300"
              required
            />
          </div>
          <div class="flex flex-col mb-3">
            <label>Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="Input email"
              class="border-1 outline-blue-400 rounded-xl w-[300px] h-[50px] p-1.5 border-gray-300"
              required
            />
          </div>
          <div class="flex flex-col">
            <label>Message</label>
            <textarea
              v-model="message"
              cols="30"
              rows="10"
              placeholder="Type your message here"
              class="border-1 outline-blue-400 rounded-xl p-1.5 border-gray-300 h-[150px]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-[100px] bg-blue-600 text-white mt-2 rounded-xl p-2 hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

// form data
const name = ref('')
const email = ref('')
const message = ref('')
const question = ref('')

// function for main contact form
const submitForm = () => {
  if (name.value && email.value && message.value) {
    Swal.fire({
      title: 'Message Sent!',
      text: 'Your message has been submitted successfully.',
      icon: 'success',
      confirmButtonColor: '#2563eb', // blue-600
    })
    // reset form
    name.value = ''
    email.value = ''
    message.value = ''
  } else {
    Swal.fire({
      title: 'Missing Fields',
      text: 'Please fill in all required fields.',
      icon: 'warning',
      confirmButtonColor: '#facc15', // yellow
    })
  }
}

// function for the question box
const submitQuestion = () => {
  if (question.value.trim() !== '') {
    Swal.fire({
      title: 'Question Sent!',
      text: 'We have received your question. We’ll get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#2563eb',
    })
    question.value = ''
  } else {
    Swal.fire({
      title: 'Empty Question!',
      text: 'Please type a question before submitting.',
      icon: 'error',
      confirmButtonColor: '#ef4444', // red
    })
  }
}
</script>
