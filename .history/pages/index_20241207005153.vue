<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:51:43
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="simple-page">
    <UNotifications />
    <TheNavbar />
    <HeroSection />
  </div>
</template>

<script setup>
const toast = useToast();

function showNotification(message, type = "success") {
  toast.add({
    title: type === "error" ? "错误提示" : "操作提示",
    description: message,
    icon:
      type === "error" ? "i-heroicons-x-circle" : "i-heroicons-check-circle",
    color: type === "error" ? "red" : "green",
    timeout: 3000,
  });
}
</script>

<style scoped>
.simple-page {
  background: #f5f5f5;
  color: #333;
  min-height: 100vh;
}
</style>
