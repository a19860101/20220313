<script>
export default {
    props:{
        lists: Array,
        // currentTag: tring,
        // modelValue: String,
        cTag: String
    },
    
    computed:{
        tags(){
            return ['全部',...new Set(this.lists)];
        },
    }
}
</script>
<template>
    <div>
        <button 
            v-for="tag in tags"
            @click="$emit('update:cTag',tag)"
            :class="{active: cTag === tag}"
            :key="tag"
        >{{tag}}</button>
    </div>
</template>