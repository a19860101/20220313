import List from './List.js';
export default {
    components: { List },
    props:{
        lists:Array,
        title:String
    },
    template:`   
        <section>
            <h1>{{title}}</h1>
            <ul>
                <List 
                    v-for="list in lists"
                    :key="list.id"
                    :list="list"
                ></List>
            </ul>
        </section>
    `
}