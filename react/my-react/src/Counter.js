import {useState} from 'react'
const Counter = ()=>{
    const [count, setCount] = useState(0);

    const countMinus = () => setCount(data => data -= 1);
    // const countMinus = () => {return setCount((data) => {return data -= 1})};
    
    return (
        <>
            <button onClick={()=>{return setCount((data)=>{return data += 1})}}>+</button>
            <button onClick={()=>setCount(data => data += 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(data => data -= 1)}>-</button>
            <button onClick={countMinus}>-</button>
        </>
    )
}

export default Counter;