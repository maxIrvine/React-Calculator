import React from 'react';

let Display = ({num}) => {
    var newNum = num;
    if (num === null) {
        newNum = 0;
    } else {
        newNum = newNum.substring(('null').length);
        console.log(typeof newNum);
    }
    return (
        <div>{newNum}</div>
    )
}

export default Display;