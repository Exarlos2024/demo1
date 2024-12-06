<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 18:54:33
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="simple-page">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="nav-content">
        <div class="left-nav">
          <div class="logo">
            <img src="/images/githublogo.png" alt="Logo" />
          </div>
        </div>
        <div class="right-nav">
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Excel工具</nuxt-ui-button>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>Word公文工具</nuxt-ui-button>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>医政科</nuxt-ui-button>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>妇幼科</nuxt-ui-button>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>监督科</nuxt-ui-button>
          </nuxt-ui-dropdown>
          <nuxt-ui-dropdown>
            <nuxt-ui-button>联系我</nuxt-ui-button>
          </nuxt-ui-dropdown>
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

.logo img {
  height: 40px;
}

.right-nav button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.right-nav button:hover {
  background: #45a049;
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
