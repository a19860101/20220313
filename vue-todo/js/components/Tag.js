export default {
    props:{
        listTags:Array,
        currentTag: String
    },
    // template:`
    // <div>
    //     <button 
    //         @click="currentTag = tag"
    //         v-for="tag in tags"
    //         :class="{active:currentTag === tag}"
    //         >{{tag}}
    //     </button>
    // </div>`,
    template:`
    <div>
        <button 
            @click="$emit('change',tag)"
            v-for="tag in tags"
            :class="{active:this.currentTag === tag}"
            >{{tag}}
        </button>
    </div>`,

    computed:{
        tags(){
            // return this.lists.map(list => list.tag);
            // return new Set(this.lists.map(list => list.tag));
            // return ['all',...new Set(this.lists.map(list => list.tag))];
            return ['all',...new Set(this.listTags)];
        }
    }
}