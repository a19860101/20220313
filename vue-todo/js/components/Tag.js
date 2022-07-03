export default {
    props:{
        lists: Array,
        // currentTag: tring,
        // modelValue: String,
        cTag: String
    },
    // template:`
    // <div>
    //     <button 
    //         v-for="tag in tags"
    //         @click="currentTag = tag"
    //         :class="{active: currentTag === tag}"
    //     >{{tag}}</button>
    // </div>
    // `,
    template:`
    <div>
        <button 
            v-for="tag in tags"
            @click="$emit('update:cTag',tag)"
            :class="{active: cTag === tag}"
        >{{tag}}</button>
    </div>
    `,
    
    computed:{
        tags(){
            return ['全部',...new Set(this.lists)];
        },
    }
}