import { defineStore } from 'pinia'


const useCounterStore = defineStore('CounterStore',{
    // state
    state: () => {
        return {
            count: 22,
        }
    }
    // actions
    // getters
});

export default useCounterStore;