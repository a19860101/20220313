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
            currentTag:''
        }
    },
    computed:{
        tags(){
            return new Set(this.lists.map(data => data.tag));
        },
        filterLists(){
            return this.lists.filter(data => data.tag===this.currentTag)
        }
    }
}