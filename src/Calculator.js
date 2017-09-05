import React, { Component } from 'react';

import Display from './Display';
import Clear from './Clear';
import NumArea from './NumArea';
import MathOps from './MathOps';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            displayNumber: []
        }
    }

    render () {
        return (
            <div className="calcBody">
                <Display num={this.state.displayNumber} className="display"/>
                <Clear clickHandler={this._clear}/>
                <NumArea clickHandler={this._changeDisplay}/>
                <MathOps clickHandler={this._space}/>
            </div>
        );
    }

    _clear = () => {
        this.setState({
            displayNumber: ""
        });
    }

    _space = (operator) => {
        if (operator === '='){
            // this._finalDisplay
            var numString = this.state.displayNumber.toString();
            var operatorIndex = numString.indexOf("+");
            var num1 = parseInt(numString.substring(0,operatorIndex));
            var num2 = parseInt(numString.substring(operatorIndex+1, numString.length));
            console.log(num1);
            console.log(num2);
            var numFinal = num1 + num2;
            this.setState({
                displayNumber: numFinal
            });
        } else {
            this.setState({
                displayNumber: this.state.displayNumber.concat([operator])
            })
        }
    }

    // _finalDisplay = () => {
    //     var numString = this.state.displayNumber.toString();
    //     var operatorIndex = numString.indexOf("+");
    //     var num1 = parseInt(numString.substring(0,operatorIndex));
    //     var num2 = parseInt(numString.substring(operatorIndex, numString.length-1));
    //     console.log(num1);
    //     console.log(num2);
    //     var numFinal = num1 + num2;
    //     this.setState({
    //         displayNumber: numFinal
    //     });
    // }

    _changeDisplay = (num) => {
        this.setState({
            displayNumber: this.state.displayNumber.concat([num]) 
        });
        console.log("The number is: " + this.state.displayNumber);
    }
}


export default Calculator;