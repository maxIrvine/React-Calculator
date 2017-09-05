import React from 'react';

let Display = ({num}) => {
    var newNum = num;
    if (num.length === 0) {
        newNum = 0;
    } 
    return (
        <div>{newNum}</div>
    )
}

export default Display;