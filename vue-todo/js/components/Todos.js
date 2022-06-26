import Todo from './Todo.js';
export default {
    components:{Todo},
    template:`
        <section v-show="listUncomplete.length">
            <h1>代辦項目</h1>
            <ul>
                <li v-for="list in listUncomplete" :key="list.id">
                    <input type="checkbox" :id="list.name" v-model="list.isComplete">
                    <label :for="list.name">
                        {{list.name}}
                    </label>
                </li>
            </ul>
        </section>
        <section v-show="listComplete.length">
            <h1>已完成</h1>
            <ul>
                <li v-for="list in listComplete" :key="list.id">
                    <input type="checkbox" :id="list.name" v-model="list.isComplete">
                    <label :for="list.name">
                        {{list.name}}
                    </label>
                </li>
            </ul>
        </section>
    `,
    data(){
        return {
            lists:[
                {id:1,name:'發票寄限掛',isComplete:false},
                {id:2,name:'洗衣服',isComplete:false},
                {id:3,name:'網站輪播處裡',isComplete:false},
                {id:4,name:'買晚餐',isComplete:false},
            ]
        }
    },
    computed:{
        listComplete(){
            return this.lists.filter(data=>data.isComplete)
        },
        listUncomplete(){
            return this.lists.filter(data=>!data.isComplete)
        }
    }
}