<script>
import Nav from '@/components/Nav.vue'
export default {
  components: {Nav}
}
</script>

<template>
  <div>
    <h1>My Vite App</h1>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI';
}
</style>
