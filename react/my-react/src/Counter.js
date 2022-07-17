import {useState} from 'react'
const Counter = ()=>{
    const [count, setCount] = useState(0);
    
    return (
        <>
            <button>+</button>
            <h1>{count}</h1>
            <button>-</button>
        </>
    )
}

export default Counter;