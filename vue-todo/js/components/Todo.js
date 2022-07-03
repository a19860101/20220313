import List from './List.js';
export default {
    components: { List },
    props:{
        lists:Array,
        title:String
    },
    template:`   
        <section>
            <h1>{{title}} ({{lists.length}})</h1>
            <div>
                <button 
                    v-for="tag in tags"
                    @click="currentTag = tag"
                    :class="{active: currentTag === tag}"
                >{{tag}}</button>
            </div>
            <ul>
                <List 
                    v-for="list in filterLists"
                    :key="list.id"
                    :list="list"
                ></List>
            </ul>
        </section>
    `,
    data(){
        return {
            currentTag:'全部'
        }
    },
    computed:{
        tags(){
            return ['全部',...new Set(this.lists.map(data => data.tag))];
        },
        filterLists(){
            if(this.currentTag === '全部'){
                return this.lists;
            }else{
                return this.lists.filter(data => data.tag===this.currentTag)
            }
        }
    }
}