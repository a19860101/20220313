import {useState, useEffect} from 'react'
const Counter = ()=>{
    const [count, setCount] = useState(0);

    const countMinus = () => setCount(prevData => prevData -= 1);
    // const countMinus = () => {return setCount((prevData) => {return prevData -= 1})};
    
    useEffect(()=>{
        // setCount(6);
        console.log('useEffect',count);
    },[count])
    /* 
        沒有任何參數: 每次變化皆會執行
        空陣列: 只有初始化會執行
        陣列內有指定變數: 初始化與陣列內變數有變化時執行

        執行順序
        組件更新->DOM更新->渲染->執行useEffect
    */   

    return (
        <>
            <button onClick={()=>{return setCount((prevData)=>{return prevData += 1})}}>+</button>
            <button onClick={()=>setCount(prevData => prevData += 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(prevData => prevData -= 1)}>-</button>
            <button onClick={countMinus}>-</button>
        </>
    )
}

export default Counter;