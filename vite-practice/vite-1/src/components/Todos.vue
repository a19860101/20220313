<script>
    import Todo from './Todo.vue'
    export default {
        components:{
            Todo
        },
        data(){
            return {
                title:'Todo List!!!',
                "lists":[
                    {"id":1,"name":"發票寄限掛","isComplete":false,"tag":"重要"},
                    {"id":2,"name":"洗衣服","isComplete":true,"tag":"普通"},
                    {"id":3,"name":"網站輪播處裡","isComplete":false,"tag":"急件"},
                    {"id":4,"name":"買晚餐","isComplete":false,"tag":"普通"},
                    {"id":5,"name":"test 1","isComplete":false,"tag":"普通"},
                    {"id":6,"name":"test 2","isComplete":false,"tag":"普通"},
                    {"id":7,"name":"important 1","isComplete":false,"tag":"重要"},
                    {"id":8,"name":"important 2","isComplete":false,"tag":"重要"}
                ],  
                newList:'',
                newTag:'',
            }
        },
        methods:{
            add(e){
                this.lists.push({
                    id: this.lists.length + 1,
                    name: this.newList,
                    isComplete:false,
                    tag: this.newTag
                })
                this.newList = '';
                this.newTag = '';
            }
        },
        computed:{
            listComplete(){
                return this.lists.filter(data=>data.isComplete)
            },
            listUncomplete(){
                return this.lists.filter(data=>!data.isComplete)
            },
            listFilter(){
                return {
                    complete:this.lists.filter(data=>data.isComplete),
                    uncomplete:this.lists.filter(data=>!data.isComplete)
                }
            },
            tagList(){
                return new Set(this.lists.map(data=>data.tag));
            }
        }
    }
</script>
<template>
    <section>
        <Todo :lists="listFilter.uncomplete" title="代辦事項"></Todo>
        <Todo :lists="listFilter.complete" title="已完成"></Todo>
        <hr>
        <form @submit.prevent="add">
            <input type="text" placeholder="新增事項" v-model="newList">
            <input type="text" placeholder="標籤" list="tagList"  v-model="newTag" />
            <datalist id="tagList">
                <option :value="tag" v-for="tag in tagList" :key="tag">{{tag}}</option>
            </datalist>
            <input type="submit" value="新增">
        </form>
    </section>
</template>
<style scoped>

</style>