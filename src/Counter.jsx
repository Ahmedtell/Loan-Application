import { useState } from "react";

export default function Counter(){

    const [counter, setCounter] = useState(0);

    function increament(){
        setCounter(counter+1);
    }

    function decrement(){
        setCounter(counter-1);
    }
    
    return (
        <diiv>
            <h1>{counter}</h1>
            <button onClick={increament}>+</button>
            <button onClick={decrement}>-</button>
        </diiv>
    );
}