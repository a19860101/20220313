<script setup>
    import {ref} from 'vue'
    import {useTodoStore} from '@/store/TodoStore'

    const item = ref('');
    const TodoStore = useTodoStore();

    function handleCreateNewItem(){
        TodoStore.createNewItem(item.value);
        item.value = '';
    }
</script>
<template>
    <div>
        <input type="text" v-model="item"><button @click="handleCreateNewItem()">New Item</button>
    </div>

</template>