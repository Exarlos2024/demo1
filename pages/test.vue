<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 14:02:09
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 01:41:50
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 14:01:51
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="container">
    <h1 class="title">test Page</h1>
    
    <!-- 添加一些基础内容 -->
    <div class="content">
      <p>欢迎来到测试页面</p>
      <TheNavbar />
      <button class="btn" @click="handleClick">点击我</button>
      <button class="home-btn" @click="goToHome">返回主页</button>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from '~/components/layout/TheNavbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 添加响应式数据和方法
const handleClick = () => {
  console.log('按钮被点击了！')
}

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.title {
  color: #333;
  margin-bottom: 20px;
}

.content {
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.btn:hover {
  background-color: #45a049;
}

.home-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
}
</style>
