import { defineStore } from 'pinia'


export const useCounterStore = defineStore('CounterStore',{
    // state
    state: () => {
        return {
            count: 12,
        }
    },
    actions: {
        countPlus(){
            this.count += 1;
        },
        countMinus(){
            this.count -= 1;
        }
    }
    // getters
});

