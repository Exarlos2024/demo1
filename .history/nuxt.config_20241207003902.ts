/*
 * @Author: Exarlos
 * @Date: 2024-12-05 15:36:51
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-07 00:39:00
 * @Description: 世界上没有低级的法术,只有低级的法师!
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/home'
    ]
  },
  app: {
    head: {
      title: '大连市甘井子区卫生健康局信息化办公平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})