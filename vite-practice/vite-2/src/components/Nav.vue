<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/product">Product</router-link>
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