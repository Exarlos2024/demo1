<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:53:35
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
  background: #f5f5f5;
  color: #333;
  min-height: 100vh;
}

/* 导航栏样式 */
.main-nav {
  background: #24292f;
  color: #fff;
  padding: 1rem;
}

.nav-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.logo {
  height: 40px;
}

.right-nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* 下拉菜单样式 */
.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #444;
  color: #fff;
  position: absolute;
  display: none; /* 默认隐藏 */
}

.nuxt-ui-dropdown:hover .dropdown-menu {
  display: block; /* 悬停时显示 */
}

li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

li:hover {
  background: #555;
}

/* 内容部分样式 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.additional-content {
  margin-top: 2rem;
}

/* 修改导航按钮样式 */
.nav-button {
  background-color: transparent !important;
  color: white !important;
  border: none !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* GitHub风格的下拉菜单样式 */
:deep(.github-dropdown) {
  --dropdown-background: #ffffff;
  --dropdown-border: 1px solid #d0d7de;
  --dropdown-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
}

:deep(.github-dropdown .u-dropdown-item) {
  padding: 8px 16px !important;
  font-size: 14px !important;
  color: #24292f !important;
}

:deep(.github-dropdown .u-dropdown-item:hover) {
  background-color: #f6f8fa !important;
  color: #24292f !important;
}

:deep(.github-dropdown .u-dropdown) {
  border-radius: 6px !important;
  margin-top: 8px !important;
  min-width: 180px !important;
}

:deep(.github-dropdown .u-dropdown-item-icon) {
  margin-right: 8px !important;
  color: #57606a !important;
}

/* 分割线样式 */
:deep(.github-dropdown .u-dropdown-divider) {
  margin: 8px 0 !important;
  border-top: 1px solid #d0d7de !important;
}

/* GitHub风格的登录注册按钮 */
.sign-in-button {
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
}

.sign-in-button:hover {
  border-color: rgba(255, 255, 255, 0.4) !important;
  background-color: transparent !important;
}

.sign-up-button {
  background-color: white !important;
  color: #24292f !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
}

.sign-up-button:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

/* Hero 部分基础样式 */
.hero-section {
  background: linear-gradient(180deg, #040d21 0%, #0c162d 100%);
  padding: 80px 16px;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* 背景动画样式 */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.star-field {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: twinkle 2s infinite;
}

.star-field div {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.star-field .small {
  width: 1px;
  height: 1px;
  box-shadow: 
    10vw 10vh #fff,
    20vw 20vh #fff,
    30vw 30vh #fff,
    /* 添加更多星星位置 */
    90vw 90vh #fff;
}

.star-field .medium {
  width: 2px;
  height: 2px;
  box-shadow: 
    15vw 15vh #fff,
    25vw 25vh #fff,
    35vw 35vh #fff,
    /* 添加更多星星位置 */
    85vw 85vh #fff;
}

.star-field .large {
  width: 3px;
  height: 3px;
  box-shadow: 
    5vw 5vh #fff,
    45vw 45vh #fff,
    75vw 75vh #fff,
    /* 添加更多星星位置 */
    95vw 95vh #fff;
}

/* 地球效果 */
.globe-container {
  position: absolute;
  width: 1000px;
  height: 1000px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
}

.globe {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, 
    rgba(100, 200, 255, 0.1) 0%,
    rgba(100, 200, 255, 0) 70%);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

/* 内容样式 */
.hero-container {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  z-index: 1;
}

.hero-title {
  font-size: 72px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(120deg, #fff, #88ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 3s ease-in-out infinite;
}

.hero-description {
  font-size: 24px;
  line-height: 1.5;
  color: #7d8590;
  margin-bottom: 32px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA 按钮样式 */
.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
}

.start-button {
  background: #fff !important;
  color: #0d1117 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 12px 32px !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  transition: all 0.2s !important;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.learn-more-button {
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  padding: 12px 32px !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  transition: all 0.2s !important;
}

.learn-more-button:hover {
  border-color: #fff !important;
  transform: translateY(-2px);
}

/* 动画关键帧 */
@keyframes twinkle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.4; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes titleGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-description {
    font-size: 20px;
  }
  
  .hero-cta {
    flex-direction: column;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 18px;
  }
}
</style>
