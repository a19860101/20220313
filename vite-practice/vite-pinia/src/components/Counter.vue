<script setup>
    import useCounterStore from '@/store/CounterStore'
    const CounterStore = useCounterStore();
</script>

<template>
    <div>
        <button>+</button>
        <button>-</button>
        <h1>{{CounterStore.count}}</h1>
    </div>
</template>