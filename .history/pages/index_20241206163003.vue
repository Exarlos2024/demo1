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
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #e60012;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hero区域样式 */
.hero {
  height: 80vh;
  background: url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 产品卡片样式 */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0;
  color: #333;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 5%;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
  text-align: center;
}

/* iPhone区域样式 */
.iphone-section {
  margin: 4rem 0;
  padding: 4rem 0;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  color: white;
}

.iphone-background {
  background: url('/images/iphone-bg.jpg') center/cover no-repeat;
  padding: 4rem;
  text-align: center;
}

.iphone-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 按钮样式 */
.btn-primary {
  background: #e60012;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin: 1rem;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #ff1a1a;
}

.btn-secondary {
  background: transparent;
  color: #333;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  border: 2px solid #333;
  text-decoration: none;
  margin: 0.5rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #333;
  color: white;
}

.btn-link {
  color: #e60012;
  text-decoration: none;
  font-weight: 500;
  margin-left: 1rem;
}

/* 页脚样式 */
footer {
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social-icon {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #e60012;
}

.footer-info {
  color: #666;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
