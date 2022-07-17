<script setup>
    import {useCounterStore} from '@/store/CounterStore'
    import {storeToRefs} from 'pinia'
    const CounterStore = useCounterStore();

    const {count,test} =storeToRefs(CounterStore);

    function plus(){
        CounterStore.countPlus();
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
        <div>{{test}}</div>
    </div>
</template>