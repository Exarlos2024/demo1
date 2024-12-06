<!--
 * @Author: Exarlos
 * @Date: 2024-12-07 00:30:48
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:37:07
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
/* 将原来的导航栏相关样式移到这里 */
.main-nav {
  background: #24292f;
  color: #fff;
  padding: 1rem;
}

/* ... 其他导航栏相关样式 ... */
</style>
