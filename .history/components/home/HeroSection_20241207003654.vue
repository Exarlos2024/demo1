<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 00:31:07
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:36:54
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <section class="hero-section">
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
    
    <div class="floating-lights">
      <div class="light-spot"></div>
      <div class="light-spot"></div>
      <div class="light-spot"></div>
    </div>
    
    <div class="hero-container">
      <h1 class="hero-title">
        大连市甘井子区卫生健康局<br>
        信息化办公平台
      </h1>
      <p class="hero-description">
        Join the world's most widely adopted AI-powered developer platform.
      </p>
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
</template>

<style scoped>
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
  background: rgba(255, 255, 255, 0.7);
}

/* ... 其他所有样式 ... */

/* 动画关键帧 */
@keyframes twinkle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.4; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(10px, 10px); }
  50% { transform: translate(-5px, 15px); }
  75% { transform: translate(-15px, -5px); }
}
</style> 