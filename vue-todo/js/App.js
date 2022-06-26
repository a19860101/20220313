export default {
    data(){
        return {
            lists:[
                {id:1,name:'發票寄限掛',isComplete:false},
                {id:2,name:'洗衣服',isComplete:false},
                {id:3,name:'網站輪播處裡',isComplete:false},
                {id:4,name:'買晚餐',isComplete:false},
            ]
        }
    },
    computed:{
        listComplete(){
            return this.lists.filter(data=>data.isComplete)
        },
        listUncomplete(){
            return this.lists.filter(data=>!data.isComplete)
        }
    }
}