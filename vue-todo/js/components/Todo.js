import List from './List.js';
import Tag from './Tag.js';
export default {
    components: { List , Tag},
    props:{
        lists:Array,
        title:String
    },
    template:`   
        <section>
            <h1>{{title}} ({{lists.length}})</h1>
            <Tag :lists="lists" />
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
      
        filterLists(){
            if(this.currentTag === '全部'){
                return this.lists;
            }else{
                return this.lists.filter(data => data.tag===this.currentTag)
            }
        }
    }
}