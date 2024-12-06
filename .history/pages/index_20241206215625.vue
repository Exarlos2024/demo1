<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 21:55:48
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="simple-page">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="nav-content">
        <div class="left-nav">
          <img src="/images/githublogo.png" alt="Logo" class="logo" />
          <UDropdown
            v-for="menu in navMenus"
            :key="menu.label"
            :items="menu.items"
            :popper="{
              placement: 'bottom-start',
              strategy: 'fixed',
            }"
            class="github-dropdown"
          >
            <UButton
              variant="solid"
              class="nav-button"
              :label="menu.label"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
        </div>
        <div class="right-nav">
          <UButton variant="ghost" class="sign-in-button" label="登录" />
          <UButton
            variant="solid"
            color="primary"
            class="sign-up-button"
            label="注册"
          />
        </div>
      </div>
    </nav>

    <!-- 内容部分 -->
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="hero-title">
          <br>大连市甘井子区卫生健康局<信息化办公平台
        </h1>
        <p class="hero-description">
          Join the world's most widely adopted AI-powered developer platform.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const navMenus = [
  {
    label: "Excel工具",
    items: [
      [
        {
          label: "Excel查重工具",
          icon: "i-heroicons-plus",
        },
        {
          label: "Excel比对工具",
          icon: "i-heroicons-folder-open",
        },
      ],
      [
        {
          label: "导入数据",
          icon: "i-heroicons-arrow-down-tray",
        },
        {
          label: "导出数据",
          icon: "i-heroicons-arrow-up-tray",
        },
      ],
    ],
  },
  {
    label: "Word公文工具",
    items: [
      [
        {
          label: "公文格式化工具",
          icon: "i-heroicons-document-plus",
        },
        {
          label: "打开公文",
          icon: "i-heroicons-folder-open",
        },
      ],
      [
        {
          label: "公文格式模板下载",
          icon: "i-heroicons-document-duplicate",
        },
        {
          label: "导出PDF",
          icon: "i-heroicons-arrow-up-tray",
        },
      ],
    ],
  },
  {
    label: "医政医管科",
    items: [
      [
        {
          label: "Profile",
          avatar: {
            src: "https://avatars.githubusercontent.com/u/739984?v=4",
          },
        },
      ],
      [
        {
          label: "投诉管理平台",
          icon: "i-heroicons-pencil-square-20-solid",
          shortcuts: ["E"],
        },
        {
          label: "Duplicate",
          icon: "i-heroicons-document-duplicate-20-solid",
          shortcuts: ["D"],
        },
      ],
      [
        {
          label: "Archive",
          icon: "i-heroicons-archive-box-20-solid",
        },
        {
          label: "Move",
          icon: "i-heroicons-arrow-right-circle-20-solid",
        },
      ],
      [
        {
          label: "Delete",
          icon: "i-heroicons-trash-20-solid",
          shortcuts: ["⌘", "D"],
        },
      ],
    ],
  },
  {
    label: "监督科",
    items: [
      [
        {
          label: "Profile",
          avatar: {
            src: "https://avatars.githubusercontent.com/u/739984?v=4",
          },
        },
      ],
      [
        {
          label: "投诉管理平台",
          icon: "i-heroicons-pencil-square-20-solid",
          shortcuts: ["E"],
        },
        {
          label: "Duplicate",
          icon: "i-heroicons-document-duplicate-20-solid",
          shortcuts: ["D"],
        },
      ],
      [
        {
          label: "Archive",
          icon: "i-heroicons-archive-box-20-solid",
        },
        {
          label: "Move",
          icon: "i-heroicons-arrow-right-circle-20-solid",
        },
      ],
      [
        {
          label: "Delete",
          icon: "i-heroicons-trash-20-solid",
          shortcuts: ["⌘", "D"],
        },
      ],
    ],
  },
];
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
  background: #24292f;
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
  gap: 8px;
  align-items: center;
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

/* 修改导航按钮样式 */
.nav-button {
  background-color: transparent !important;
  color: white !important;
  border: none !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* GitHub风格的下拉菜单样式 */
:deep(.github-dropdown) {
  --dropdown-background: #ffffff;
  --dropdown-border: 1px solid #d0d7de;
  --dropdown-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
}

:deep(.github-dropdown .u-dropdown-item) {
  padding: 8px 16px !important;
  font-size: 14px !important;
  color: #24292f !important;
}

:deep(.github-dropdown .u-dropdown-item:hover) {
  background-color: #f6f8fa !important;
  color: #24292f !important;
}

:deep(.github-dropdown .u-dropdown) {
  border-radius: 6px !important;
  margin-top: 8px !important;
  min-width: 180px !important;
}

:deep(.github-dropdown .u-dropdown-item-icon) {
  margin-right: 8px !important;
  color: #57606a !important;
}

/* 分割线样式 */
:deep(.github-dropdown .u-dropdown-divider) {
  margin: 8px 0 !important;
  border-top: 1px solid #d0d7de !important;
}

/* GitHub风格的登录注册按钮 */
.sign-in-button {
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
}

.sign-in-button:hover {
  border-color: rgba(255, 255, 255, 0.4) !important;
  background-color: transparent !important;
}

.sign-up-button {
  background-color: white !important;
  color: #24292f !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
}

.sign-up-button:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

/* Hero 部分样式 */
.hero-section {
  background: linear-gradient(180deg, #040d21 0%, #0c162d 100%);
  padding: 80px 16px;
  min-height: calc(100vh - 64px); /* 减去导航栏高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-title {
  font-size: 72px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.hero-description {
  font-size: 24px;
  line-height: 1.5;
  color: #7d8590;
  margin-bottom: 32px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-description {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 18px;
  }
}
</style>
