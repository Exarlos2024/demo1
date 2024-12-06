<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 14:02:09
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 16:13:26
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
      <button class="btn" @click="handleClick">点击我</button>
    </div>
  </div>
</template>

<script setup>
// 添加响应式数据和方法
const handleClick = () => {
  console.log('按钮被点击了！')
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
}

.btn:hover {
  background-color: #45a049;
}
</style>
