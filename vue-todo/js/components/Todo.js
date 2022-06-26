export default {
    props:['caption','lists'],
    template:`
        <h1>{{caption}}</h1>
        <ul>
            <li v-for="list in lists">{{list.name}}</li>
        </ul>    
    `
}