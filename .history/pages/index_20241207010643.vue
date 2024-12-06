<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 01:06:01
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <div class="simple-page">
    <TheNavbar />
    <!-- 其他内容保持不变 -->
    <section class="hero-section">
      <!-- 添加背景动画元素 -->
      <div class="hero-background">
        <div class="star-field">
          <div class="small"></div>
          <div class="medium"></div>
          <div class="large"></div>
        </div>
        <div class="globe-container">
          <div class="globe"></div>
        </div>
      </div>
      
      <div class="hero-container">
        <h1 class="hero-title">
          大连市甘井子区卫生健康局<br>
          信息化办公平台
        </h1>
        <p class="hero-description">
          Join the world's most widely adopted AI-powered developer platform.
        </p>
        
        <!-- 添加 CTA 按钮 -->
        <div class="hero-cta">
          <UButton
            size="xl"
            color="white"
            class="start-button"
            label="开始使用"
          />
          <UButton
            size="xl"
            variant="ghost"
            class="learn-more-button"
            label="了解更多"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 如果有其他逻辑，保持不变
</script>

<style scoped>
/* 保留除导航栏以外的所有样式 */
.hero-section {
  background: linear-gradient(
    180deg,
    rgb(13, 17, 54) 0%,
    rgb(58, 45, 113) 100%
  );
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
