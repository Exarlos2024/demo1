<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 13:46:29
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 16:35:01
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <div>
    <TheNavbar />
    <div class="about-container">
      <h1>关于我们</h1>
      <p>这里是关于我们的页面内容。</p>
      <nuxt-link to="/" class="back-home-button">回到主页</nuxt-link>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '~/components/layout/TheNavbar.vue'
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.back-home-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #24292f;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;
}

.back-home-button:hover {
  background-color: #3b3f45;
  transform: translateY(-2px);
}
</style> 