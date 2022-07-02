import Todo from './Todo.js';
export default {
    components:{Todo},
    template:`
        <section>
            <Todo :lists="listFilter.uncomplete" title="代辦事項"></Todo>
            <Todo :lists="listFilter.complete" title="已完成"></Todo>
            <hr>
            <form @submit.prevent="add">
                <input type="text" placeholder="新增事項" v-model="newList">
                <input type="submit" value="新增">
            </form>
        </section>
    `,
    // template:`
    //     <section v-show="listUncomplete.length">
    //         <h1>代辦項目</h1>
    //         <ul>
    //             <li v-for="list in listUncomplete" :key="list.id">
    //                 <input type="checkbox" :id="list.name" v-model="list.isComplete">
    //                 <label :for="list.name">
    //                     {{list.name}}
    //                 </label>
    //             </li>
    //         </ul>
    //     </section>
    //     <section v-show="listComplete.length">
    //         <h1>已完成</h1>
    //         <ul>
    //             <li v-for="list in listComplete" :key="list.id">
    //                 <input type="checkbox" :id="list.name" v-model="list.isComplete">
    //                 <label :for="list.name">
    //                     {{list.name}}
    //                 </label>
    //             </li>
    //         </ul>
    //     </section>
    // `,
    data(){
        return {
            title:'Todo List!!!',
            lists:[
                {id:1,name:'發票寄限掛',isComplete:false,tag:'today'},
                {id:2,name:'洗衣服',isComplete:true,tag:'today'},
                {id:3,name:'網站輪播處裡',isComplete:false,tag:'week'},
                {id:4,name:'買晚餐',isComplete:false,tag:'month'},
                {id:5,name:'test 2',isComplete:false,tag:'today'},
                {id:6,name:'test 3',isComplete:false,tag:'week'},
            ],
            newList:''
        }
    },
    methods:{
        add(e){
            // e.preventDefault();
            console.log(this.list);
            this.lists.push({
                id: this.lists.length + 1,
                name: this.newList,
                isComplete:false
            })
            this.newList = '';
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
        }
    }
}