<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 19:49:55
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="simple-page">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="nav-content">
        <div class="left-nav">
          <img src="/images/githublogo.png" alt="Logo" class="logo" />
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Excel工具</nuxt-ui-button>
            <template #dropdown>
              <nuxt-ui-menu>
                <nuxt-ui-menu-item>选项1</nuxt-ui-menu-item>
                <nuxt-ui-menu-item>选项2</nuxt-ui-menu-item>
                <nuxt-ui-menu-item>选项3</nuxt-ui-menu-item>
              </nuxt-ui-menu>
            </template>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Word公文工具</nuxt-ui-button>
            <template #dropdown>
              <nuxt-ui-menu>
                <nuxt-ui-menu-item>选项A</nuxt-ui-menu-item>
                <nuxt-ui-menu-item>选项B</nuxt-ui-menu-item>
                <nuxt-ui-menu-item>选项C</nuxt-ui-menu-item>
              </nuxt-ui-menu>
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
</style>
