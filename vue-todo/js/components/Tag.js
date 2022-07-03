export default {
    props:{
        lists: Array
    },
    template:`
    <div>
        <button 
            v-for="tag in tags"
            @click="currentTag = tag"
            :class="{active: currentTag === tag}"
        >{{tag}}</button>
    </div>
    `,
    computed:{
        tags(){
            return ['全部',...new Set(this.lists.map(data => data.tag))];
        },
    }
}