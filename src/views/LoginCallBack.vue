<template>
   <h1>LoginCallBack</h1>
   
</template>

<script setup>
import { onMounted } from "vue"
import router from "@/router/index.js"
import authService from "@/service/authservice";
import { useCounterStore } from '@/stores/counter'
onMounted(async () => {
    const user = await authService.handleRedirectCallback()
    const store = useCounterStore();
    store.setUser(user)
    router.replace("/")
 
})

</script>