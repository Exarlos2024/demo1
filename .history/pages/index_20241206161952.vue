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
      <div class="logo">SoftBank</div>
      <div class="nav-links">
        <a href="#">Mobile</a>
        <a href="#">Internet</a>
        <a href="#">Energy</a>
        <a href="#">Business</a>
        <a href="#">About Us</a>
      </div>
      <div class="utility-nav">
        <a href="#">My SoftBank</a>
        <a href="#">Support</a>
        <a href="#">Shop</a>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main>
      <!-- 产品展示区 -->
      <section class="products">
        <h2>TOPICS</h2>
        <div class="product-grid">
          <div class="product-card">
            <h3>Google Pixel 9</h3>
            <button>Buy Now</button>
            <a href="#">Learn More</a>
          </div>
          <div class="product-card">
            <h3>Google Pixel 9 Pro / 9 Pro XL</h3>
            <button>Buy Now</button>
            <a href="#">Learn More</a>
          </div>
          <div class="product-card">
            <h3>Google Pixel 9 Pro Fold</h3>
            <button>Buy Now</button>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      <!-- iPhone区域 -->
      <section class="iphone-section">
        <div class="iphone-card">
          <h3>iPhone 16 Pro</h3>
          <p>Hello, Apple Intelligence. Coming fall 2024</p>
          <button>Buy now</button>
          <a href="#">Learn more</a>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer>
      <div class="social-links">
        <a href="#">LINE</a>
        <a href="#">X (formerly Twitter)</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
      </div>
      <div class="footer-info">
        <p>© SoftBank Corp. All Rights Reserved.</p>
        <p>Registration number(Telecommunications carrier):No.72</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// 这里可以添加需要的组件逻辑
</script>

<style scoped>
/* 这里可以添加样式 */
.softbank-home {
  max-width: 1200px;
  margin: 0 auto;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
