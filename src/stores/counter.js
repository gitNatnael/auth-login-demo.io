import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const user = ref({})
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function setUser(data) {
    console.log('user from pinia', data)
    user.value = data
  }

  return { count, doubleCount, increment, setUser, user }
})
