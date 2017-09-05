import React from 'react';

let MathOps = ({clickHandler}) => (
    <div>
        <button onClick={() => {
                clickHandler("/")    
        }}>/</button>
        <button onClick={() => {
                clickHandler("*")    
        }}>*</button>
        <button onClick={() => {
                clickHandler("-")    
        }}>-</button>
        <button onClick={() => {
                clickHandler("+")    
        }}>+</button>
        <button onClick={() => {
                clickHandler("=")    
        }}>=</button>
    </div>
)

export default MathOps;