import List from './List.js';
import Tag from './Tag.js';
export default {
    components: { List,Tag },
    props:{
        lists:Array,
        title:String
    },
    template:`   
        <section>
            <h1>{{title}}
                <span>({{lists.length}})</span>
            </h1>
            
            <Tag 
                :list-tags="lists.map(list => list.tag)"
                :current-tag = "currentTag"
                @change="currentTag = $event"    
            />
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
            currentTag: 'all'
        }
    },
    computed: {
        filterLists(){
            if(this.currentTag === 'all'){
                return this.lists;
            }else{
                return this.lists.filter(list => list.tag === this.currentTag);
            }
        },

    }
}