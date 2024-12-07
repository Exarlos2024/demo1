<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 18:19:32
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 19:04:30
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <div class="layout-container">
    <TheNavbar />
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <div class="footer-content">
        <p>版权所有 © 艾克萨罗斯 2024</p>
        <div class="footer-links">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <span class="divider">|</span>
          <a href="/about">关于我们</a>
          <span class="divider">|</span>
          <a href="/contact">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TheNavbar from './TheNavbar.vue'
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  position: relative;
  padding: 0;
}

.site-footer {
  background-color: #24292f;
  color: #8b949e;
  text-align: center;
  padding: 2rem 0;
  position: relative;
  z-index: 2;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer-links {
  margin-top: 0;
  display: flex;
  align-items: center;
}

.footer-links a {
  color: #58a6ff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #79c0ff;
}

.divider {
  color: #8b949e;
  margin: 0 1rem;
}

p {
  margin: 0;
  font-size: 0.9rem;
}
</style> 