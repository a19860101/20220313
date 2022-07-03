<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Todos from './components/Todos.vue'
export default {
  components:{Todos}
}
</script>

<template>
  <Todos></Todos>
</template>

<style>
  .active {
    background-color: #098;
    color: #fff;
  }
</style>
