<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 00:30:48
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 16:45:30
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->
<template>
  <nav class="main-nav">
    <div class="nav-content">
      <div class="left-nav">
        <nuxt-link to="/">
          <img src="/images/Exarlos.png" alt="Logo" class="logo" />
        </nuxt-link>
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
        <UButton
          variant="solid"
          class="nav-button"
          label="关于"
          @click="$router.push('/about')"
        />
      </div>
      <div class="right-nav">
        <nuxt-link to="/login" class="sign-in-button">登录</nuxt-link>
        <nuxt-link to="/reg" class="sign-up-button">注册</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navMenus } from "~/constants/navigation";
</script>

<style scoped>
/* 移除通用样式，保留特定样式 */
.right-nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

.sign-in-button,
.sign-up-button {
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  font-size: 18px !important;
  padding: 5px 12px !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
  background-color: transparent !important;
}

.sign-in-button:hover,
.sign-up-button:hover {
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

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
