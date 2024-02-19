<template>
  <main>
    <button @click="Login">Login</button>
    <h4> Your Name is: {{ name }}</h4>
    <div v-if="store.user?.profile?.name">
      <button @click="logout">Log out</button>
    </div>

  </main>
</template>


<script setup>
import { computed } from "vue"
import authService from "@/service/authservice";
import { useCounterStore } from "../stores/counter"
const store = useCounterStore()
async function Login() {
  await authService.login();
}

async function logout() {
  await authService.logout();
}
const name = computed(() => store.user?.profile?.name || 'Anonymous')
</script>


