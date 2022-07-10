<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/service" custom v-slot="{ navigate }"> 
        <button @click="navigate">Service</button>
    </router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/product/123?test=banana">Product</router-link>
    <router-link
      :to="{
        name: product,
        params: {
          id: 9527,
        },
        query: {
          test: '0998098',
        },
      }"
      >Product</router-link
    >
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  background-color: #eee;
  padding: 15px;
}
nav a {
  color: #000;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  transition: 600ms;
}
.nav-active-link {
  background-color: #098;
  color: #fff;
}
</style>