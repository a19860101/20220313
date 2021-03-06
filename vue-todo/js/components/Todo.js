import List from './List.js';
import Tag from './Tag.js';
export default {
    components: { List , Tag},
    props:{
        lists:Array,
        title:String
    },
    // template:`   
    //     <section>
    //         <h1>{{title}} ({{lists.length}})</h1>
    //         <Tag 
    //             :lists="lists.map(data=>data.tag)" 
    //             @change="currentTag = $event"
    //         />
    //         <ul>
    //             <List 
    //                 v-for="list in filterLists"
    //                 :key="list.id"
    //                 :list="list"
    //             ></List>
    //         </ul>
    //     </section>
    // `,
    template:`   
        <section>
            <h1>{{title}} ({{lists.length}})</h1>
            <Tag 
                :lists="lists.map(data=>data.tag)" 
                v-model:cTag="currentTag"
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
            currentTag:'全部',
        }
    },
    methods:{
        // test(p){
        //     this.currentTag = p;
        // }
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