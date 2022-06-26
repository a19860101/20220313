export default {
    props:{
        list:Object
    },
    template:`
        <li>
            <input type="checkbox" :id="list.name" v-model="list.isComplete">
            <label :for="list.name">
                {{list.name}}
            </label>
        </li>
    `
}