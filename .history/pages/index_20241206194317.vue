<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 19:43:08
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="simple-page">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="nav-content">
        <div class="left-nav">
          <img src="/.png" alt="Logo" class="logo" />
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Excel工具</nuxt-ui-button>
            <template #dropdown>
              <ul>
                <li>选项1</li>
                <li>选项2</li>
                <li>选项3</li>
              </ul>
            </template>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Word公文工具</nuxt-ui-button>
            <template #dropdown>
              <ul>
                <li>选项A</li>
                <li>选项B</li>
                <li>选项C</li>
              </ul>
            </template>
          </nuxt-ui-dropdown>
          <!-- 其他工具类似处理 -->
        </div>
        <div class="right-nav">
          <nuxt-ui-button>注册</nuxt-ui-button>
          <nuxt-ui-button>登录</nuxt-ui-button>
        </div>
      </div>
    </nav>

    <!-- 内容部分 -->
    <section class="content">
      <h1 class="title">大连市甘井子区信息化办公平台</h1>
      <div class="additional-content">
        <!-- 这里可以放置其他内容 -->
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 基础样式 */
.simple-page {
  background: #f5f5f5;
  color: #333;
  min-height: 100vh;
}

/* 导航栏样式 */
.main-nav {
  background: #333;
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
  gap: 1rem;
}

/* 下拉菜单样式 */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.5rem 1rem;
  background: #444;
  color: #fff;
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
</style>
