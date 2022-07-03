<script>
    import List from './List.vue'
    import Tag from './Tag.vue'
    export default {
        components: { List , Tag},
        props:{
            lists:Array,
            title:String
        },
    
        data(){
            return {
                currentTag:'全部',
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
</script>
<template>
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
</template>