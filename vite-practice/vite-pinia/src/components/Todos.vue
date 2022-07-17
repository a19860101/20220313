<script setup>
    import {useTodoStore} from '@/store/TodoStore'
    import {storeToRefs} from 'pinia'
    console.log(useTodoStore())

    const TodoStore = useTodoStore();
    const {todos} = storeToRefs(TodoStore);
</script>
<template>
<div>

    <h1>TODO</h1>
    <div>
        {{todos}}
    </div>
</div>
</template>