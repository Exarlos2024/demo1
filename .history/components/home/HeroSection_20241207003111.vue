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
/* 将原来的 hero 部分相关样式移到这里 */
.hero-section {
  background: linear-gradient(180deg, rgb(13, 17, 54) 0%, rgb(58, 45, 113) 100%);
  /* ... 其他 hero 相关样式 ... */
}
</style> 