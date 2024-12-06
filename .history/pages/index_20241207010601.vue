<template>
  <div class="simple-page">
    <TheNavbar />
    <!-- 其他内容保持不变 -->
    <section class="hero-section">
      <!-- Hero 部分内容 -->
    </section>
  </div>
</template>

<script setup>
// 如果有其他逻辑，保持不变
</script>

<style scoped>
/* 保留除导航栏以外的所有样式 */
.hero-section {
  background: linear-gradient(180deg, rgb(13, 17, 54) 0%, rgb(58, 45, 113) 100%);
  padding: 80px 16px;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* ... 其他样式保持不变 ... */
</style>
