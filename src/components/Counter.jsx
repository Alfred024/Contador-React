import {useState} from "react";
import './Counter.css'
import Button from "./Button";

export function Counter(){
    let [counter, setCounter] = useState(0);

    const incrementCounter = ()=>{
        setCounter(++counter);
    };
    const restartCounter = ()=>{
        setCounter(0);
    };

    return(
        <div className="Counter">  
            <p className="Counter-Info">
                {counter}  
            </p>
            <div className="flex-column">
                <Button 
                    buttonType={'increment'}
                    setFunction={incrementCounter}/>
                <Button 
                    buttonType={'restart'}
                    setFunction={restartCounter}/>
            </div>
        </div>
    );
}