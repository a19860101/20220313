export default {
    props:['lists'],
    template:`   
        <section>
            <h1>代辦項目</h1>
            <ul>
                <li v-for="list in lists" :key="list.id">
                    <input type="checkbox" :id="list.name" v-model="list.isComplete">
                    <label :for="list.name">
                        {{list.name}}
                    </label>
                </li>
            </ul>
        </section>
    `
}