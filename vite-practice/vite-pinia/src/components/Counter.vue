<script setup>
    import {useCounterStore} from '@/store/CounterStore'
    import {storeToRefs} from 'pinia'
    const CounterStore = useCounterStore();

    const {count} =storeToRefs(CounterStore);

    function plus(){
        CounterStore.countPlus();
        console.log(CounterStore);
    }
    function minus(){
        CounterStore.countMinus();
    }
</script>

<template>
    <div>
        <button @click="plus()">+</button>
        <button @click="minus()">-</button>
        <h1>{{count}}</h1>
        <h1>{{CounterStore.count}}</h1>
    </div>
</template>