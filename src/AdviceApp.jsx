/*import {useEffect, useState} from 'react';
import "./Advice.css";

export const AdviceApp = () => {
    const [advice,setAdvice] = useState("Get a Free Advice Today :)");
    const [count,setCount] = useState(0);

    async function getAdvice(){
        const res= await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }

    useEffect(function(){
        getAdvice();
    },[]);

    return (
    <div><h3>{advice}❤️</h3>
    <button onClick={getAdvice}>Get Advice</button>

    <p>You Have Read <b>{count}</b> Chunck of Advice</p>
    </div>
  )
}*/

import { useEffect, useState } from 'react';
import './Advice.css';

export const AdviceApp = () => {
    const [advice, setAdvice] = useState('Get a Free Advice Today :)');
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <>
            {/* Header Section */}
            <header className="header">
                <div className="header-container">
                    <h1 className="header-title">Advice Generator</h1>
                </div>
            </header>

            {/* Main Content */}
            <div className="advice-app">
                <div className="advice-card">
                    <p className="advice-text">{advice}❤️</p>
                    <button className="advice-button" onClick={getAdvice}>
                        Get Advice
                    </button>
                    <p className="advice-counter">
                        You have read <b>{count}</b> pieces of advice
                    </p>
                </div>
            </div>
        </>
    );
};

