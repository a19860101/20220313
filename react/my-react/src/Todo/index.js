import {useState} from 'react'
import List from './components/List'
const Todo = ()=>{
   const [todos, setTodos] = useState([
        {
            id:1,
            name: '洗衣服',
            isCompleted: false
        },
        {
            id:2,
            name: '做報告',
            isCompleted: true
        },
        {
            id:3,
            name: '買禮物',
            isCompleted: false
        },
    ])

    const [input, setInput] = useState('');
    function handleInput(e){
        setInput(e.target.value);
        console.log(input)
    }
    return (
        <>
            <h1>Todo</h1>
            <input type="text"  value={input} onChange={handleInput}/>
            <button>New Item</button>
            <div>{input}</div>
            <div>
                {
                    todos.map(todo => <List name={todo.name} isCompleted={todo.isCompleted} key={todo.id} />)
                }
            </div>
        </>
    )
}

export default Todo;