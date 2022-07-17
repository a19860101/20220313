import {useState} from 'react'
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

    return (
        <>
            <h1>Todo</h1>
            <div>
                {
                    todos.map(todo=>
                        <>
                            <div>{todo.name}</div>
                            <div>{todo.id}</div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Todo;