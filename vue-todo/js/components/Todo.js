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
                <button v-for="tag in tags">{{tag}}</button>
            </div>
            <ul>
                <List 
                    v-for="list in lists"
                    :key="list.id"
                    :list="list"
                ></List>
            </ul>
        </section>
    `,
    computed:{
        tags(){
            return new Set(this.lists.map(data => data.tag));
            
        }
    }
}