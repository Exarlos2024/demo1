<!--
 * @Author: Exarlos
 * @Date: 2024-12-06 13:58:01
 * @LastEditors: Exarlos
 * @LastEditTime: 2024-12-06 16:19:52
 * @Description: 世界上没有低级的法术,只有低级的法师!
-->

<template>
  <div class="softbank-home">
    <!-- 顶部导航 -->
    <nav class="main-nav">
      <div class="logo">
        <img src="/images/softbank-logo.png" alt="SoftBank" />
      </div>
      <div class="nav-links">
        <a href="#" class="nav-link">Mobile</a>
        <a href="#" class="nav-link">Internet</a>
        <a href="#" class="nav-link">Energy</a>
        <a href="#" class="nav-link">Business</a>
        <a href="#" class="nav-link">About Us</a>
      </div>
      <div class="utility-nav">
        <a href="#" class="btn-primary">My SoftBank</a>
        <a href="#" class="btn-secondary">Support</a>
        <a href="#" class="btn-secondary">Shop</a>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main>
      <!-- Hero区域 -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to SoftBank</h1>
          <p>Connecting you to tomorrow</p>
        </div>
      </section>

      <!-- 产品展示区 -->
      <section class="products">
        <h2 class="section-title">TOPICS</h2>
        <div class="product-grid">
          <div class="product-card" @mouseover="hover = 1" @mouseleave="hover = null">
            <div class="card-image">
              <img src="/images/pixel-9.jpg" alt="Google Pixel 9" />
            </div>
            <div class="card-content">
              <h3>Google Pixel 9</h3>
              <p>Experience the next generation of Android</p>
              <button class="btn-primary">Buy Now</button>
              <a href="#" class="btn-link">Learn More</a>
            </div>
          </div>
          <div class="product-card" @mouseover="hover = 2" @mouseleave="hover = null">
            <div class="card-image">
              <img src="/images/pixel-9-pro.jpg" alt="Google Pixel 9 Pro" />
            </div>
            <div class="card-content">
              <h3>Google Pixel 9 Pro / 9 Pro XL</h3>
              <p>Professional grade camera system</p>
              <button class="btn-primary">Buy Now</button>
              <a href="#" class="btn-link">Learn More</a>
            </div>
          </div>
          <div class="product-card" @mouseover="hover = 3" @mouseleave="hover = null">
            <div class="card-image">
              <img src="/images/pixel-fold.jpg" alt="Google Pixel 9 Pro Fold" />
            </div>
            <div class="card-content">
              <h3>Google Pixel 9 Pro Fold</h3>
              <p>The future unfolds</p>
              <button class="btn-primary">Buy Now</button>
              <a href="#" class="btn-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- iPhone区域 -->
      <section class="iphone-section">
        <div class="iphone-background">
          <div class="iphone-card">
            <h3>iPhone 16 Pro</h3>
            <p>Hello, Apple Intelligence.</p>
            <p class="highlight">Coming fall 2024</p>
            <button class="btn-primary">Buy now</button>
            <a href="#" class="btn-link">Learn more</a>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer>
      <div class="social-links">
        <a href="#" class="social-icon line">LINE</a>
        <a href="#" class="social-icon twitter">X (formerly Twitter)</a>
        <a href="#" class="social-icon facebook">Facebook</a>
        <a href="#" class="social-icon instagram">Instagram</a>
        <a href="#" class="social-icon youtube">YouTube</a>
      </div>
      <div class="footer-info">
        <p>© SoftBank Corp. All Rights Reserved.</p>
        <p>Registration number(Telecommunications carrier):No.72</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hover = ref(null)
</script>

<style scoped>
.softbank-home {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 导航栏样式 */
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  padding: 1rem;
}

.nav-links a, 
.utility-nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product-card {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
}

footer {
  margin-top: 3rem;
  padding: 2rem;
  background: #f5f5f5;
  text-align: center;
}
</style>
