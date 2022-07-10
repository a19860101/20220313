<script setup>
  import {ref,reactive,computed} from 'vue'

  const title = ref('hello vue');
  const users = reactive([
    'John','Mary','test'
  ])
  const totalUser = computed(()=>{
    return users.length;
  })

  const input = ref('');
  const addUser = () => {
    users.push(input.value);
    input.value = '';
  }
</script>

<template>
  <div>
    <h1>hello composition</h1>
    <h2>
    {{title}}
    </h2>
    <input type="text" v-model="input">
    <button @click="addUser">new</button>
    <ul>
      <li v-for="(user,idx) in users" :key="idx">
        {{user}}
      </li>
    </ul>
    {{totalUser}}
  </div>
</template>

<style>

</style>
