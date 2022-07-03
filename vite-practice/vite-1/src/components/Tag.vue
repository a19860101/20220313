<script>
export default {
    props:{
        lists: Array,
        // currentTag: tring,
        modelValue: String,
        // cTag: String
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
            @click="$emit('update:modelValue',tag)"
            :class="{active: modelValue === tag}"
            :key="tag"
        >{{tag}}</button>
    </div>
</template>