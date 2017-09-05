import React from 'react';

let NumArea = ({clickHandler}) => (
    <div>
        <div>
            <button onClick={() => {
                clickHandler(7)    
            }}>7</button>
            <button onClick={() => {
                clickHandler(8)    
            }}>8</button>
            <button onClick={() => {
                clickHandler(9)    
            }}>9</button>
        </div>
        <div>
            <button onClick={() => {
                clickHandler(4)    
            }}>4</button>
            <button onClick={() => {
                clickHandler(5)    
            }}>5</button>
            <button onClick={() => {
                clickHandler(6)    
            }}>6</button>
        </div>
        <div>
            <button onClick={() => {
                clickHandler(1)    
            }}>1</button>
            <button onClick={() => {
                clickHandler(2)    
            }}>2</button>
            <button onClick={() => {
                clickHandler(3)    
            }}>3</button>
        </div>
        <div>
            <button onClick={() => {
                clickHandler(0)    
            }}>0</button>
            <button>.</button>
        </div>
    </div>
)

export default NumArea;