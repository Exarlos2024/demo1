<template>
  <div class="simple-page">
    <UNotifications />
    <TheNavbar />
    <HeroSection />
  </div>
</template>

<script setup>
const toast = useToast()

function showNotification(message, type = 'success') {
  toast.add({
    title: type === 'error' ? '错误提示' : '操作提示',
    description: message,
    icon: type === 'error' ? 'i-heroicons-x-circle' : 'i-heroicons-check-circle',
    color: type === 'error' ? 'red' : 'green',
    timeout: 3000
  })
}
</script>

<style scoped>
.simple-page {
  min-height: 100vh;
}
</style>
