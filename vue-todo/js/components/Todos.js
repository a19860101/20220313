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
                <input type="text" placeholder="標籤" list="tagList"  v-model="newTag" />
                <datalist id="tagList">
                    <option :value="tag" v-for="tag in tagList">{{tag}}</option>
                </datalist>
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
            lists:'',
            newList:'',
            newTag:'',
        }
    },
    created(){
        fetch('http://localhost:3333/lists')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.lists = data
            })
    },
    methods:{
        add(e){
            // e.preventDefault();
            console.log(this.list);
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