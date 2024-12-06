<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 18:36:03
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="github-home">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="nav-content">
        <div class="left-nav">
          <div class="logo">
            <img src="/images/github-logo.png" alt="Logo" />
          </div>
          <div class="nav-links">
            <div class="dropdown">
              <button class="dropdown-trigger">产品 <span class="arrow">▼</span></button>
              <div class="dropdown-content">
                <!-- 下拉菜单内容 -->
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-trigger">解决方案 <span class="arrow">▼</span></button>
            </div>
            <div class="dropdown">
              <button class="dropdown-trigger">开源 <span class="arrow">▼</span></button>
            </div>
            <a href="#pricing">定价</a>
          </div>
        </div>
        <div class="right-nav">
          <div class="search-bar">
            <input type="text" placeholder="搜索或跳转至..." />
            <kbd>/</kbd>
          </div>
          <button class="sign-in">登录</button>
          <button class="sign-up">注册</button>
        </div>
      </div>
    </nav>

    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            在单一协作平台上
            <span class="gradient-text">构建和发布软件</span>
          </h1>
          <p class="hero-description">
            加入全球最广泛采用的AI驱动开发者平台。
          </p>
        </div>
        <div class="hero-cta">
          <form class="signup-form">
            <input type="email" placeholder="输入邮箱地址" />
            <button class="btn-signup">免费注册</button>
          </form>
          <button class="btn-trial">开始免费试用</button>
        </div>
      </div>
      <div class="hero-animation">
        <!-- 这里可以放置动画效果 -->
        <div class="floating-elements">
          <div class="element" v-for="i in 5" :key="i"></div>
        </div>
      </div>
    </section>

    <!-- 特性展示区域 -->
    <section class="features">
      <div class="feature-tabs">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          :class="['tab', { active: activeTab === index }]"
          @click="activeTab = index"
        >
          {{ tab.name }}
        </button>
      </div>
      <div class="feature-content">
        <transition name="fade" mode="out-in">
          <div :key="activeTab" class="feature-detail">
            <h2>{{ tabs[activeTab].title }}</h2>
            <p>{{ tabs[activeTab].description }}</p>
            <div class="feature-demo">
              <!-- 特性演示区域 -->
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)
const tabs = ref([
  {
    name: '代码',
    title: '使用AI提升编码效率',
    description: '借助GitHub Copilot，在工作流程中实现更快速、更安全的编码。'
  },
  {
    name: '规划',
    title: '高效项目管理',
    description: '使用适应性强的电子表格同步您的工作。'
  },
  {
    name: '协作',
    title: '团队协作新方式',
    description: '通过统一的平台实现更好的协作。'
  }
])
</script>

<style scoped>
/* 基础样式 */
.github-home {
  background: #0d1117;
  color: #c9d1d9;
  min-height: 100vh;
}

/* 导航栏样式 */
.main-nav {
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #21262d;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.nav-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Hero 区域样式 */
.hero {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
  position: relative;
  z-index: 2;
}

.gradient-text {
  background: linear-gradient(120deg, #7ee787, #4184e4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* 动画效果 */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.element {
  position: absolute;
  background: radial-gradient(circle, rgba(126, 231, 135, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(100px, 100px) rotate(360deg); }
}

/* 特性展示区域样式 */
.features {
  background: #010409;
  padding: 4rem 0;
}

.feature-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  color: #c9d1d9;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab.active {
  border-bottom-color: #7ee787;
  color: #fff;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .feature-tabs {
    flex-direction: column;
    align-items: center;
  }
}
</style>
