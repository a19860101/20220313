import {defineStore} from 'pinia'

export const useTodoStore = defineStore('TodoStore',{
    state:()=>{
        return {
            todos: [
                {
                    id:1,
                    name: '洗衣服',
                    isCompleted: false
                },
                {
                    id:2,
                    name: '做報告',
                    isCompleted: true
                },
                {
                    id:3,
                    name: '買禮物',
                    isCompleted: false
                },
            ]
        }
    },
    getters: {
        completedTodos: (state)=>{
            return state.todos.filter(data=>data.isCompleted === true)
        },
        unCompletedTodos: (state)=>{
            return state.todos.filter(data=>data.isCompleted === false)
        }
    },
    actions: {
        createNewItem(data){
            this.todos.push({
                id:this.todos.length + 1,
                name: data,
                isCompleted: false
            })
        }
    }
})