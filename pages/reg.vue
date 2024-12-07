<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 13:29:24
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 14:51:51
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <div class="register-page">
    <TheRegNavbar />
    <div class="form-container">
      <h2 class="form-title">注册</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="form.username" required />
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <button type="submit" class="submit-button">注册</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheRegNavbar from '~/components/layout/TheRegNavbar.vue'

const form = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log('提交的表单数据:', form.value)
}
</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
}

.form-container {
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
  backdrop-filter: blur(10px);
}

.form-title {
  margin-bottom: 24px;
  font-size: 28px;
  text-align: center;
  color: #333;
  font-weight: bold;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.submit-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.submit-button:hover {
  background-color: #5a67d8;
  transform: translateY(-2px);
}
</style> 