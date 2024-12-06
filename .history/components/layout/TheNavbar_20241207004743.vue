<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 00:30:48
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:47:43
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
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
</template>

<script setup>
import { navMenus } from '~/constants/navigation'
</script>

<style scoped>
/* 导航栏相关样式 */
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

/* 导航按钮样式 */
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

/* 登录注册按钮样式 */
.sign-in-button {
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
